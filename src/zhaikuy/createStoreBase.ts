import { TCreateStore } from 'src/react/createStore';
import { emitChange } from './emitter';

export type Listener = () => void;

export type StoreApi<T> = {
  setState: (newState: T) => void
  getState: () => T
  subscribe: (listener: Listener) => void
  getActions: () => any[]
} 

export const createStoreBase = (cb: TCreateStore): StoreApi<any> => {
  const actions: any[] = [];
  let state: any = null;

  const storeProps = cb(setState);

  storeProps.forEach((prop: any) => {
    if (typeof prop === 'function') { actions.push(prop) }
    else { state = prop; }
  })

  let listeners: Listener[];

  function setState(newState: any) {
    state = newState; // todo immutable
    emitChange(listeners);
  }

  function getActions() {
    return actions;
  }

  function getState() { return state }

  function subscribe(listener: Listener): () => void {
    listeners = [...listeners, listener];

    return (): void => {
      listeners = listeners.filter(l => l !== listener);
    }
  }

  return {
    setState,
    getState,
    subscribe,
    getActions,
  }
}