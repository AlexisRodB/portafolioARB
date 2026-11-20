import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(scopeRef) {
  useGSAP(
    () => {
      const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion) return;

      gsap.from('[data-reveal]', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: { trigger: scopeRef.current, start: 'top 70%', once: true },
      });
    },
    { scope: scopeRef },
  );
}
