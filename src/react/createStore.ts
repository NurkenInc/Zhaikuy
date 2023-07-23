import { useSyncExternalStore } from 'react';
import { createStoreBase } from 'src/zhaikuy';

// actions, state
type StoreProps = {
  [stateName: string]: any
} & {
  [rest: string]: () => void // in actions will be called set func(setState)
}

export type TCreateStore = (setState: (newState: any) => void) => StoreProps

export const createStore = (cb: TCreateStore) => {
  const { getActions, getState, subscribe } = createStoreBase(cb);

  return () => {
    // fix
    // eslint-disable-next-line
    // @ts-ignore
    const state = useSyncExternalStore(subscribe, getState)

    return {
      state,
      ...getActions()
    }
  }
}
