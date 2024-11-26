// hooks/useUnsavedChanges.ts
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const useUnsavedChanges = (
  unsavedChanges: boolean,
  warningText: string,
  onBeforeExit: () => void
) => {
  const router = useRouter();

  useEffect(() => {
    const handleWindowClose = (e: BeforeUnloadEvent) => {
        onBeforeExit(); 
      if (unsavedChanges) {
        e.preventDefault();
 // For most browsers to show the confirmation dialog
      
        e.returnValue = warningText;// Execute the custom function
      }
    };

    const handleRouteChange = (url: string) => {
      if (unsavedChanges) {
        // Show confirmation dialog
        if (!window.confirm(warningText)) {
          // Prevent navigation by redirecting to the current path
          router.push(window.location.pathname); // Redirect to the current path
          throw new Error('Navigation aborted'); // Prevents navigation
        } else {
          onBeforeExit(); // Execute the custom function
        }
      }
    };

    // Handle route change manually
    const handlePopState = () => {
      handleRouteChange(window.location.pathname);
    };

    window.addEventListener('beforeunload', handleWindowClose);
    window.addEventListener('popstate', handlePopState);

    // Override router.push to handle unsaved changes before navigation
    const originalPush = router.push;
    router.push = async (url: string) => {
      handleRouteChange(url);
      return originalPush.call(router, url);
    };

    return () => {
      window.removeEventListener('beforeunload', handleWindowClose);
      window.removeEventListener('popstate', handlePopState);
      router.push = originalPush;
    };
  }, [unsavedChanges, warningText, onBeforeExit, router]);
};

export default useUnsavedChanges;
