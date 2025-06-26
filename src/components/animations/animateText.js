import gsap from 'gsap';

export const animateText = (element, trigger = true) => {
  if (!element) return;

  // Split text into characters and wrap each in a span
  const splitText = (text) => {
    return text.split('').map((char, index) => (
      `<span class="inline-block">${char === ' ' ? '\u00A0' : char}</span>`
    )).join('');
  };

  // Apply splitting to all text nodes within spans
  const spans = element.querySelectorAll('span');
  spans.forEach((span) => {
    span.innerHTML = splitText(span.textContent);
  });

  const charSpans = element.querySelectorAll('span span');

  // Set initial state for animation
  gsap.set(charSpans, { y: 50, opacity: 0 });

  // Create IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate each character
          gsap.to(charSpans, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.05,
            ease: 'power2.out',
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  if (trigger) {
    observer.observe(element);
  }

  // Return cleanup function
  return () => observer.disconnect();
};