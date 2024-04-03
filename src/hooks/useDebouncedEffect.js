import { useEffect } from "react";

/**
 * useDebouncedEffect hook works like useEffect but with a debounce functionality.
 *
 * @param effect - The effect function to run.
 * @param deps - Dependency array, same as useEffect.
 * @param delay - The debounce delay in milliseconds.
 */
const useDebouncedEffect = (effect, deps, delay) => {
  useEffect(() => {
    const handler = setTimeout(() => {
      effect();
    }, delay);

    // Cleanup function
    return () => {
      clearTimeout(handler);
    };
  }, [...deps, delay]); // Make sure to add delay here so it re-runs if delay changes
};

export default useDebouncedEffect;
