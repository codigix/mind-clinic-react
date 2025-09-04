import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string;
}

export const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  loading = 'lazy',
  priority = false,
  sizes = '100vw'
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Generate WebP and fallback sources
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const fallbackSrc = src;

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setError(true);
    setIsLoading(false);
  };

  return (
    <div className={cn('relative', className)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/10">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      <picture>
        <source
          srcSet={webpSrc}
          type="image/webp"
          sizes={sizes}
        />
        <source
          srcSet={fallbackSrc}
          type={fallbackSrc.includes('.png') ? 'image/png' : 'image/jpeg'}
          sizes={sizes}
        />
        <img
          src={error ? fallbackSrc : webpSrc}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : loading}
          decoding={priority ? 'sync' : 'async'}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            'transition-opacity duration-300',
            isLoading ? 'opacity-0' : 'opacity-100',
            className
          )}
        />
      </picture>
    </div>
  );
};

// Hook for responsive image generation
export const useResponsiveImage = (src: string, sizes: number[]) => {
  return sizes.map(size => ({
    src: src.replace(/\.(jpg|jpeg|png)$/i, `-${size}w.webp`),
    srcSet: `${src.replace(/\.(jpg|jpeg|png)$/i, `-${size}w.webp`)} ${size}w`,
    fallback: `${src.replace(/\.(jpg|jpeg|png)$/i, `-${size}w.${src.split('.').pop()}`)} ${size}w`
  }));
};