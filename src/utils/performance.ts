/**
 * Lazy load utility for heavy components
 * Use with Astro's client directives for optimal performance
 */

// Example usage in .astro files:
// <HeavyComponent client:visible />  - Load when visible
// <HeavyComponent client:idle />     - Load when browser is idle
// <HeavyComponent client:media="(min-width: 768px)" /> - Load on media query

/**
 * Intersection Observer hook for React components
 * Use this for custom lazy loading logic
 */
export function useInView(options = {}) {
    const [isInView, setIsInView] = React.useState(false);
    const ref = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsInView(entry.isIntersecting);
        }, {
            threshold: 0.1,
            ...options,
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return [ref, isInView];
}

/**
 * Preload critical resources
 * Add this to <head> for resources needed immediately
 */
export function preloadFont(fontPath) {
    return `<link rel="preload" href="${fontPath}" as="font" type="font/woff2" crossorigin />`;
}

/**
 * Debounce utility for scroll/resize handlers
 */
export function debounce(fn, delay = 150) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}

/**
 * Request Animation Frame throttle
 * Better than debounce for scroll handlers
 */
export function rafThrottle(fn) {
    let rafId = null;
    return (...args) => {
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
            fn(...args);
            rafId = null;
        });
    };
}
