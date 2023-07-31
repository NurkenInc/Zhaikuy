import z from 'zod';

export const baseCredentials = z.object({
  email: z
    .string()
    .email(),
  password: z
    .string()
    .min(4, {
      message: 'Password should have at least'
    })
})

export type BaseCredentials = z.infer<typeof baseCredentials>;

export const extendedCredentials = baseCredentials.extend({
  confirmPassword: z
    .string()
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Confirmation password should match password',
  path: ['confirmPassword']
})

export type ExtendedCredentials = z.infer<typeof extendedCredentials> & {
  authenticated?: boolean
};

export const logoutCredentials = z.object({
  email: z
    .string()
    .email(),
  })
  
export type LogoutCredentials = z.infer<typeof logoutCredentials>;

export const user = z.object({
  name: z.string().optional().or(z.literal('')),
  username: z.string().optional().or(z.literal('')),
  email: z.string().email(),
  avatarUrl: z.string().url().optional().or(z.literal('')),
  bio: z.string().optional().or(z.literal(''))
})

export type User = z.infer<typeof user>;