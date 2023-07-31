import z from 'zod';

export type TaskStatus = 'done' | 'in review' | 'todo' | 'in progress' | 'cancelled' | 'backlog';
export type TaskPriority = 'urgent' | 'high' | 'low' | 'normal';

export const taskValidator = z.object({
  creatorEmail: z
    .string()
    .email(),
  assignee: z
    .string()
    .email(),
  title: z
    .string()
    .min(1, {
      message: 'one character'
    }),
  description: z
    .string()
    .min(1, {
      message: 'six characters'
    }),
  tags: z
    .array(
      z.object({ tag: z.string().min(2, { message: 'At least two character for title' }) })
    ).optional(),
  dueDate: z
    .string()
    .min(6, { message: 'Incorrect due date' })
    .optional()
    .or(z.literal('')),
  priority: z.union([
    z.literal('urgent'), 
    z.literal('low'), 
    z.literal('high'),
    z.literal('normal'),
  ]),
  status: z.union([
    z.literal('done'), 
    z.literal('in review'), 
    z.literal('in progress'),
    z.literal('todo'),
    z.literal('cancelled'),
    z.literal('backlog'),
  ]),
})