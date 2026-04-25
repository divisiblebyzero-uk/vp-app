import { useState, useEffect } from 'react';

export function useActiveSection() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    // Set rootMargin to -50% to activate when element passes the middle of the screen
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveId(entry.target.id);
      });
    }, { rootMargin: '-50% 0px -50% 0px' });

    document.querySelectorAll('section[id]').forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return activeId;
}