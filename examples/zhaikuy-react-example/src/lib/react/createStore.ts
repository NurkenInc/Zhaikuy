import { useSyncExternalStore } from 'react';
import { createStoreBase } from '../zhaikuy';

type Action<T> = (set: (partial: T | ((state: T) => T)) => void) => void;

type Actions<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? T[K] : never;
};

export type StateCreator<T> = (
  set: (partial: T | ((state: T) => T)) => void
) => {
  [key: string]: T[keyof T] | Action<T>; // Allow any state property and action function
};

export const createStore = <T>(createState: StateCreator<T>) => {
  const { getState, setState, subscribe } = createStoreBase({} as T);

  const { ...store } = createState(setState);
  const actions = [];
  const state: any = {}

  for (const key in store) {
    if (typeof store[key] === 'function') {
      actions.push(store[key])
    } else {
      state[key] = store[key];
    }
  }
  // init state
  setState(state);

  const useStore = () => {
    const syncedState = useSyncExternalStore(subscribe, getState);
    return {
      ...store,
      state: syncedState,
    } as {
      state: T;
    } & Actions<any>
  };

  return useStore;
};