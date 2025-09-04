import { usePWA } from '@/hooks/usePWA';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useState } from 'react';

export const PWAUpdatePrompt = () => {
  const { needRefresh, updateServiceWorker } = usePWA();
  const [dismissed, setDismissed] = useState(false);

  if (!needRefresh) return null;
  if (dismissed) return null;

  const handleUpdate = async () => {
    await updateServiceWorker();
    setDismissed(true);
  };

  const handleDismiss = () => {
    setDismissed(true);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-primary text-primary-foreground p-4 rounded-lg shadow-lg max-w-sm">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            {needRefresh && (
              <p className="text-sm mb-2">
                🔄 New content available! Update to get the latest features.
              </p>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDismiss}
            className="h-6 w-6 text-primary-foreground hover:text-primary-foreground/80"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        {needRefresh && (
          <div className="flex gap-2 mt-2">
            <Button
              size="sm"
              onClick={handleUpdate}
              className="bg-white text-primary hover:bg-white/90"
            >
              Update Now
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={handleDismiss}
              className="border-white/50 text-white hover:bg-white/10"
            >
              Later
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};