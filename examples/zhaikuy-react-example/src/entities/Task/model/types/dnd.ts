import { UniqueIdentifier } from '@dnd-kit/core'

export interface DndTask {
  id: UniqueIdentifier,
  data: {
    title: string,
    id: string,
    status: string,
    index: number,
    parent: string
  }
}