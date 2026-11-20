import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function useHeroReveal(scopeRef) {
  useGSAP(
    () => {
      const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion) return;

      gsap.from('[data-reveal]', {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.12,
      });
      gsap.from('[data-reveal-image]', {
        opacity: 0,
        x: 40,
        duration: 0.9,
        delay: 0.2,
        ease: 'power3.out',
      });
    },
    { scope: scopeRef },
  );
}
