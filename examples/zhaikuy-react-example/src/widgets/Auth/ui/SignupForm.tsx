import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ExtendedCredentials, extendedCredentials } from '@/shared/lib/validators/user'
import { InputFactory } from '@/shared/ui/Input/InputFactory'
import { signUpFormFields } from '@/shared/lib/consts/auth'
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormLabel, 
  FormItem,
  FormMessage
} from '@/shared/ui/Form/Form'
import { useSession } from '@/shared/lib/hooks/useSession'
import { useNavigate } from 'react-router-dom'

export const SignupForm = () => {
  const form = useForm<Omit<ExtendedCredentials, 'authenticated'>>({
    resolver: zodResolver(extendedCredentials),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    }
  })
  const { signup } = useSession();
  const navigate = useNavigate();

  const onSubmit = async (data: Omit<ExtendedCredentials, 'authenticated'>) => {
    await signup(data);
    navigate(-2);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 card w-full">
        {signUpFormFields.map((formField) => (
          <FormField
            key={formField.name}
            control={form.control}
            name={formField.name}
            render={({ field }) => {
              const errorForField = form.formState.errors[field.name];
              return (
                <FormItem>
                  <FormLabel className='flex flex-col items-start'>{formField.label}</FormLabel>
                  <FormControl>
                    <InputFactory
                      type={formField.type}
                      placeholder={formField.placeholder}
                      isError={Boolean(errorForField)}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {formField.description}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
        ))}
        <button 
          className='btn btn-outline btn-accent' 
          type="submit"
        >
          Sign up
        </button>
      </form>
    </Form>
  )
}