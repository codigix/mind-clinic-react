/**
 * Standardized theme configuration for Insight - The Mind Clinic
 * This file defines consistent color usage, typography, and component styling
 */

export const theme = {
  colors: {
    // Primary brand colors
    primary: {
      DEFAULT: 'hsl(41, 100%, 62%)', // Medical yellow
      light: 'hsl(41, 100%, 96%)',
      dark: 'hsl(41, 100%, 52%)',
      foreground: 'hsl(0, 0%, 100%)',
    },
    
    // Secondary brand colors
    secondary: {
      DEFAULT: 'hsl(41, 100%, 52%)', // Medical gold
      light: 'hsl(41, 100%, 96%)',
      foreground: 'hsl(0, 0%, 100%)',
    },
    
    // Accent colors
    accent: {
      DEFAULT: 'hsl(41, 100%, 52%)',
      foreground: 'hsl(0, 0%, 100%)',
    },
    
    // Semantic colors
    success: 'hsl(142, 71%, 45%)',
    warning: 'hsl(38, 92%, 50%)',
    error: 'hsl(0, 84%, 60%)',
    info: 'hsl(217, 91%, 60%)',
    
    // Neutral colors (using theme variables)
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))',
    muted: 'hsl(var(--muted))',
    'muted-foreground': 'hsl(var(--muted-foreground))',
    card: 'hsl(var(--card))',
    'card-foreground': 'hsl(var(--card-foreground))',
    border: 'hsl(var(--border))',
    
    // Legacy mapping for consistency
    insight: {
      yellow: 'hsl(41, 100%, 62%)',
    },
    medical: {
      yellow: 'hsl(41, 100%, 62%)',
      'yellow-light': 'hsl(41, 100%, 96%)',
      gold: 'hsl(41, 100%, 52%)',
      'gold-light': 'hsl(41, 100%, 96%)',
    }
  },
  
  // Typography scale
  typography: {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
    h2: 'text-3xl md:text-4xl font-bold',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-semibold',
    h5: 'text-lg font-medium',
    h6: 'text-base font-medium',
    
    body: {
      large: 'text-xl',
      regular: 'text-base',
      small: 'text-sm',
      tiny: 'text-xs',
    },
  },
  
  // Component styling
  components: {
    button: {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
      accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
      outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
    },
    
    card: {
      default: 'bg-card text-card-foreground border-border',
      elevated: 'bg-card text-card-foreground border-border shadow-lg',
      gradient: 'bg-gradient-to-br from-medical-yellow-light/30 to-medical-gold-light/20 border-medical-yellow/10',
    },
    
    section: {
      spacing: 'py-20',
      container: 'container mx-auto px-4',
    },
  },
  
  // Gradients
  gradients: {
    hero: 'bg-gradient-to-br from-primary to-secondary',
    card: 'bg-gradient-to-br from-medical-yellow-light/30 to-medical-gold-light/20',
    subtle: 'bg-gradient-to-r from-primary/5 to-secondary/5',
  },
  
  // Shadows
  shadows: {
    card: 'shadow-lg',
    subtle: 'shadow-sm',
    hover: 'shadow-xl transition-shadow duration-300',
  },
} as const;

// Utility function to get theme classes
export const getThemeClass = (path: string): string => {
  const keys = path.split('.');
  let result: any = theme;
  
  for (const key of keys) {
    if (result[key] === undefined) return '';
    result = result[key];
  }
  
  return result;
};