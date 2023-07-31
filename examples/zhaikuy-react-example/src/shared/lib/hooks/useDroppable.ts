import {
  UseDroppableArguments,
  useDroppable as useOriginalDroppable,
} from "@dnd-kit/core";

interface UseDroppableTypesafeArguments<T> extends Omit<UseDroppableArguments, "data"> {
  data: T;
}

export function useDroppable<T>(props: UseDroppableTypesafeArguments<T>) {
  return useOriginalDroppable(props as any);
}