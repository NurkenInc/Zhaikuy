import { emitChange } from './emitter';

export type Listener = () => void;

export type StoreApi<T> = {
  setState: (state: T) => void
  subscribe: (listener: Listener) => () => void
  getState: () => T
}

export const createStoreBase = (initialState: any) => {
  type TState = typeof initialState;
  let state: TState = initialState;
  const listeners: Set<Listener> = new Set();

  const setState: StoreApi<TState>['setState'] = (newState: TState) => {
    if (typeof newState === 'function') {
      state = newState(state)
    } else {
      state = newState;
    }
    emitChange(listeners);
  }

  const getState: StoreApi<TState>['getState'] = () => state;

  const subscribe: StoreApi<TState>['subscribe'] = (listener: Listener) => {
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  }

  return {
    setState,
    getState,
    subscribe
  }
}