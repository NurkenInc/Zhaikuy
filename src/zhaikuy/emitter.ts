import { Listener } from './createStoreBase';

export function emitChange(listeners: Listener[]) {
  for (const listener of listeners) {
    listener();
  }
}