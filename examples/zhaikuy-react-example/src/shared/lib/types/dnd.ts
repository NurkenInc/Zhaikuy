import { 
  DndContextProps, 
  Translate, 
  Collision, 
  Active ,
  Over
} from '@dnd-kit/core';

interface TypesafeActive<T> extends Omit<Active, "data"> {
  data: React.MutableRefObject<T | undefined>;
}
interface TypesafeOver<T> extends Omit<Over, "data"> {
  data: React.MutableRefObject<T | undefined>;
}
interface DragEvent<T> {
  activatorEvent: Event;
  active: TypesafeActive<T>;
  collisions: Collision[] | null;
  delta: Translate;
  over: TypesafeOver<T> | null;
}
export interface DragStartEvent<T> extends Pick<DragEvent<T>, "active"> {}
export interface DragMoveEvent<T> extends DragEvent<T> {}
export interface DragOverEvent<T> extends DragMoveEvent<T> {}
export interface DragEndEvent<T> extends DragEvent<T> {}
export interface DragCancelEvent<T> extends DragEndEvent<T> {}
export interface DndContextTypesafeProps
  extends Omit<
    DndContextProps,
    "onDragStart" | "onDragMove" | "onDragOver" | "onDragEnd" | "onDragCancel"
  > {
  onDragStart?<T>(event: DragStartEvent<T>): void;
  onDragMove?<T>(event: DragMoveEvent<T>): void;
  onDragOver?<T>(event: DragOverEvent<T>): void;
  onDragEnd?<T>(event: DragEndEvent<T>): void;
  onDragCancel?<T>(event: DragCancelEvent<T>): void;
}
