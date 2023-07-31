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
      // console.log(newState?.(state));
      state = newState(state)
    } else {
      // console.log(newState);
      state = newState;
    }
    emitChange(listeners);
  }

  const getState: StoreApi<TState>['getState'] = () => {
    // console.log(state);
    return state;
  };

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