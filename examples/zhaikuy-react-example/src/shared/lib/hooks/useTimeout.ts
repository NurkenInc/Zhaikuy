import { useEffect, useRef } from 'react';

export function useTimeout(callback: () => void, timeout:  number) {
  const savedCallback = useRef(callback);
  
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback])

  useEffect(() => {
    const timer = setTimeout(savedCallback.current, timeout);
    return () => {
      clearTimeout(timer);
    }
  }, [timeout])
}