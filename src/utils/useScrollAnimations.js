import { useEffect } from 'react';

export function useScrollAnimations() {
  useEffect(() => {
    // 1. Initial Pass: Reveal elements already in the initial viewport immediately
    const checkInitialVisibility = () => {
      const revealElements = document.querySelectorAll(
        '.reveal-fade-up, .reveal-slide-left, .reveal-slide-right, .reveal-zoom-in, .reveal-stagger-group, [data-reveal]'
      );

      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95) {
          el.classList.add('is-revealed');
        }
      });
    };

    checkInitialVisibility();

    // 2. High-Performance IntersectionObserver for Elements as they enter the screen
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.05
    };

    const revealElements = document.querySelectorAll(
      '.reveal-fade-up, .reveal-slide-left, .reveal-slide-right, .reveal-zoom-in, .reveal-stagger-group, [data-reveal]'
    );

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Once revealed, disconnect observation of this element to maximize 60/120fps scroll smoothness
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach((el) => {
      if (!el.classList.contains('is-revealed')) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return {};
}
