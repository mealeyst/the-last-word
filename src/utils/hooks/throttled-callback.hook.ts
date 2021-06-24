import { useCallback, useEffect, useRef } from 'react';
//From: https://gist.github.com/Danziger/336e75b6675223ad805a88c2dfdcfd4a
export function useThrottledCallback<A extends any[]>(
  callback: (...args: A) => void,
  delay: number,
  deps?: readonly any[],
): (...args: A) => void {
  const timeoutRef = useRef<number>();
  const callbackRef = useRef(callback);
  const lastCalledRef = useRef(0);

  // Remember the latest callback:
  //
  // Without this, if you change the callback, when setTimeout kicks in, it
  // will still call your old callback.
  //
  // If you add `callback` to useCallback's deps, it will also update, but it
  // might be called twice if the timeout had already been set.

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Clear timeout if the components is unmounted or the delay changes:
  useEffect(() => window.clearTimeout(timeoutRef.current), [delay]);

  return useCallback((...args: A) => {
    // Clear previous timer:
    window.clearTimeout(timeoutRef.current);

    function invoke() {
      callbackRef.current(...args);
      lastCalledRef.current = Date.now();
    }

    // Calculate elapsed time:
    const elapsed = Date.now() - lastCalledRef.current;

    if (elapsed >= delay) {
      // If already waited enough, call callback:
      invoke();
    } else {
      // Otherwise, we need to wait a bit more:
      timeoutRef.current = window.setTimeout(invoke, delay - elapsed);
    }
  }, deps);
}