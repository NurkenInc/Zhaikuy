import z from 'zod';
import { taskValidator } from '../validators/task';

export type TaskRequest = z.infer<typeof taskValidator>;

export type Task = z.infer<typeof taskValidator> & {
  id: string
};