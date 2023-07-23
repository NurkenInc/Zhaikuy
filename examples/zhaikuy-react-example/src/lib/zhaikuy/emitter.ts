import { Listener } from './createStoreBase';

export function emitChange(listeners: Set<Listener>) {
  for (const listener of listeners) {
    listener();
  }
}