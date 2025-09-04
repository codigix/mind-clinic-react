import { useEffect, useState } from 'react';

interface PWAState {
  needRefresh: boolean;
  updateServiceWorker: () => Promise<void>;
}

export const usePWA = (): PWAState => {
  const [needRefresh, setNeedRefresh] = useState(false);

  // Register service worker
  useEffect(() => {
    const registerSW = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const { registerSW } = await import('virtual:pwa-register');
          const updateSW = registerSW({
            onNeedRefresh() {
              setNeedRefresh(true);
            },
            onRegistered(r) {
              console.log('SW Registered:', r);
            },
            onRegisterError(error) {
              console.log('SW registration error', error);
            },
          });
          
          return updateSW;
        } catch (error) {
          console.error('Failed to register service worker:', error);
        }
      }
    };

    registerSW();
  }, []);

  const updateServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      const { registerSW } = await import('virtual:pwa-register');
      const updateSW = registerSW({
        onNeedRefresh() {
          setNeedRefresh(true);
        },
      });
      await updateSW(true);
    }
  };

  return {
    needRefresh,
    updateServiceWorker,
  };
};