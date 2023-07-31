import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/shim/with-selector';
import { createStoreBase } from '../zhaikuy';
import { StoreApi } from '../zhaikuy/createStoreBase';

type Action<T> = (set: (partial: T | ((state: T) => T)) => void) => void;

export type StateCreator<T> = (
  set: (partial: T | ((state: T) => T)) => void
) => {
  [key: string]: T[keyof T] | Action<T>;
};

export const useStoreWithSelector = <T, Slice>(
  api: StoreApi<T>,
  selector: (state: T) => Slice,
  equalityFn?: (a: Slice, b: Slice) => boolean
): any => {
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getState,
    selector,
    equalityFn,
  );

  return slice;
};

export const createStore = <T>(
  createState: StateCreator<T>
) => {
  const api = createStoreBase({} as T);
  const { ...store } = createState(api.setState);
  
  // init state
  api.setState(store);

  const useStore = <Slice>(
    selector: (state: T) => Slice,
    equalityFn?: (a: Slice, b: Slice) => boolean
  ): Slice => {
    const syncedState = useStoreWithSelector(api, selector, equalityFn);
    return syncedState
  };

  return useStore;
};
