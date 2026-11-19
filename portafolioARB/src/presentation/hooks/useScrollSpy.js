import { useEffect, useState } from 'react';

export function useScrollSpy(ids, offset = 120) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const onScroll = () => {
      const position = window.scrollY + offset;
      let current = ids[0];
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= position) current = id;
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids, offset]);

  return activeId;
}
