import { useCallback, useState } from 'react';

export const useForceUpdate = (): (() => void) => {
  const [, setState] = useState<number>(0);

  const forceUpdate = useCallback(() => {
    setState((n) => n + 1);
  }, []);

  return forceUpdate;
};
