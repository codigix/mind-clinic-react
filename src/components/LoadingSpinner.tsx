import { Loader2 } from 'lucide-react';

export const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-background">
    <div className="flex flex-col items-center space-y-4">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  </div>
);

export const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="flex flex-col items-center space-y-4">
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
      <p className="text-lg text-muted-foreground">Loading page...</p>
    </div>
  </div>
);