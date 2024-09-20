import { useEffect } from 'react';

// Sets css classes to allow page to show up when all images and css is already loaded
export const useShowPageOnLoad = (): void => {
  const addBodyClasses = () => {
    document.body.classList.remove('preload'); // Preventing animations on load
    document.body.classList.add('isLoaded'); // Showing page on load
  };

  useEffect(() => {
    document.readyState === 'complete' ? addBodyClasses() : window.addEventListener('load', addBodyClasses);

    return () => {
      window.removeEventListener('load', addBodyClasses);
    };
  }, []);
};
