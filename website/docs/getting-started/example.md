---
sidebar_position: 3
---

# Example

Here is quick sample of Todo application you can run sample on codesandbox or your vscode locally.

## Declare Model

Create a file at `src/components/TaskList/model/model.ts`:

```ts title="src/components/TaskList/model/model.ts"
import { createStore } from 'zhaikuy'

interface Task {
  id: string
  text: string
  createdAt: Date
}

interface TasksSchema {
  tasks: Task[]
}

const useTasks = createStore<TasksSchema>((set) => ({
  tasks: [],
  addTask: () => set((state) => ({ ...state })),
}))
```

Above we declared model of our tasks list where we declare task addition and tasks state. **createStore** api function will create store that will have tasks variable(current tasks) and addTask action. **createStore** function will return custom hook **useTasks** but you can name it whatever you want but make name simple and hooks naming convention condicts always start naming with 'use' prefix.

## Display Task List feature

Create a file at `src/components/TaskList/ui/TaskList.tsx`:

```ts title="src/components/TaskList/ui/TaskList.tsx"
import { useTasks } from '../model/model'

export const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <div>
      <h1>Tasks</h1>
      {tasks.map((task) => (
        <div>{task.text}</div>
      ))}
    </div>
  )
}
```

Now we created TaskList component in **ui** folder that will display out tasks all we need to do it's import our **useTasks** custom hook that **createStore** api function created and use it. Custom hook will return **tasks** variable that we contains all our tasks and we defined this state variable earlier in our tasks model and map over our tasks and display some ui. Hm, so how we now create our task cause our task list is empty?

## Task addition feature

Create a file at `src/components/TaskList/ui/CreateTask.tsx`:

```ts title="src/components/TaskList/ui/CreateTask.tsx"
import React, { useState } from 'react';
import { useTasks } from '../model/model'
import { v4 as uuidv4 } from 'uuid';

export const CreateTask = () => {
  const { addTask } = useTasks();
  const [text, setText] = useState('');

  const onSubmit = () => {
    addTask({
      createdAt: new Date(),
      id: uuidv4(),
      text,
    })
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return (
    <div>
      <h1>Add new task</h1>
      <form id="addTask" onSubmit={onSubmit}>
        <label>Task name</label>
        <input
          className='px-12 py-2 bg-slate-800 text-slate-100 rounded-md'
          placeholder='Your task text'
          aria-label='Task input'
          onChange={onChange}
          value={text}
        />
        <button 
          className='px-8 py-2 bg-blue-800 rounded-md text-bold' 
          form='addTask'
          type='submit'
        >
          Add
        </button>
      </form>
    </div>
  )
}
```

This is how! We import **useTasks** hook here also and retrieve **addTask** custom action from our **useTasks** hook. Now we declare **onSubmit** event handler that will add task in our **tasks** variable that we used in **TaskList** component above. We provide new task object were we generate unique id via uuid lib(for rendering optimization, you don't have to generate id if you don't want to) and we declared custom text state that will contain our current task text. Then we have to declare onChange handler to handle user input and after set *text* state. Then we just write our custom form ui where we pass onSubmit handler to our form and onChange handler to our input. And that's ready. You can test it out and magic! if we will go to our tasks list we can see our new *task*!