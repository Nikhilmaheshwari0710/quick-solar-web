import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';

export function useLenisScroll() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.085,
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      syncTouch: false,
      infinite: false,
      autoRaf: true,
    });

    window.lenis = lenis;

    const handleLenisScroll = (e) => {
      const progressBar = document.querySelector('.global-scroll-progress-bar');
      if (progressBar) {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
          const progress = Math.min(100, Math.max(0, (e.scroll / totalHeight) * 100));
          progressBar.style.transform = `scaleX(${progress / 100})`;
          progressBar.style.opacity = progress > 0.5 ? '1' : '0';
        }
      }
    };

    lenis.on('scroll', handleLenisScroll);

    return () => {
      lenis.off('scroll', handleLenisScroll);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  // Jump to top instantly on route change
  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);
}
