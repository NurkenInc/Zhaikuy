import {
  UseDroppableArguments,
  useDraggable as useOriginalDraggable,
} from "@dnd-kit/core";

interface UseDraggableTypesafeArguments<T> extends Omit<UseDroppableArguments, "data"> {
  data: T;
}

export function useDraggable<T>(props: UseDraggableTypesafeArguments<T>) {
  return useOriginalDraggable(props as any);
}