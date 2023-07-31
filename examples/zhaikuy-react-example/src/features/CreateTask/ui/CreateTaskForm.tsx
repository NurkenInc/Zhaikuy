import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TaskRequest } from '@/entities/Task/model/types/task';
import { TasksSchema, useTasks } from '@/entities/Task/model/slices/tasksSlice';
import { TaskPriority, TaskStatus, taskValidator } from '@/entities/Task/model/validators/task';
import { InputFactory } from '@/shared/ui/Input/InputFactory';
import { Dropdown } from '@/shared/ui/Dropdown/Dropdown';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem,
  FormMessage
} from '@/shared/ui/Form/Form'
import { assigneeSelector, prioritySelector, statusSelector } from '../model/consts/selector';
import TextareaAutosize from 'react-textarea-autosize';
import { cn } from '@/shared/lib/utils/classes';
import { useSession } from '@/shared/lib/hooks/useSession';
import { useEffect, useTransition } from 'react';
import { useTranslation } from 'react-i18next';

// todo: refactor
export const CreateTaskForm = () => {
  const { user } = useSession();
  const form = useForm<TaskRequest>({
    resolver: zodResolver(taskValidator),
    defaultValues: {
      assignee: '',
      creatorEmail: '',
      description: '',
      dueDate: '',
      priority: 'normal',
      status: 'todo',
      tags: [],
      title: ''
    },
    shouldFocusError: false
  })
  const { t } = useTranslation();

  // const { 
  //   fields: tags, 
  //   append: appendTag, 
  //   remove: removeTag 
  // } = useFieldArray({
  //   control: form.control,
  //   name: 'tags'
  // })

  const addTask = useTasks<TasksSchema['addTask']>((state) => state.addTask);

  const onSubmit = (data: TaskRequest) => {
    addTask(data);
  }
  
  useEffect(() => {
    form.setValue('assignee', user?.email ?? '');
    form.setValue('creatorEmail', user?.email ?? '');
  }, [user?.email])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 card w-full">
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <InputFactory
                    type='text'
                    placeholder={t('issue title')}
                    className='focus:border-none focus:outline-none focus:ring-0 font-semibold text-xl px-0'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <div className='max-h-[300px] overflow-y-scroll'>
                    <TextareaAutosize
                      placeholder={t('add description')}
                      className={
                        cn('focus:border-none focus:outline-none focus:ring-0 resize-none w-full bg-base-100')
                      }
                      minRows={1}
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />
        <div className='flex gap-2'>
          <FormField
            control={form.control}
            name='status'
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Dropdown 
                      dropdownItems={statusSelector(field.onChange)} 
                      trigger={(
                        <button className='btn btn-outline btn-xs' tabIndex={0}>
                          {t(field.value)}
                        </button>
                      )}
                      variant='dropdown-right dropdown-top'
                    />
                  </FormControl>
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name='priority'
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Dropdown 
                      dropdownItems={prioritySelector(field.onChange)} 
                      trigger={(
                        <button className='btn btn-outline btn-xs' tabIndex={0}>
                          {t(field.value)}
                        </button>
                      )}  
                      variant='dropdown-right dropdown-top'
                    />
                  </FormControl>
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name='assignee'
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Dropdown
                      dropdownItems={assigneeSelector(field.onChange, [user!])} 
                      trigger={(
                        <button className='btn btn-outline btn-xs' tabIndex={0}>
                          {t(field.value)}
                        </button>
                      )}
                      variant='dropdown-top'
                    />
                  </FormControl>
                </FormItem>
              )
            }}
          />
        </div>
        <div className='border-t' />
        <button 
          className='btn btn-neutral btn-sm w-max rounded-md self-end capitalize'
          type="submit"
        >
          {t('assign')}
        </button>
      </form>
    </Form>
  )
}
