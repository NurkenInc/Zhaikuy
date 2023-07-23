import './App.css'
// import { createStore } from 'zhaikuy'
import { createStore } from './lib';

interface Counter {
  count: number
  incBy: number
}

// feature: make partial without need spread oper after mvp
// feature make useStore to retrieve state in other components? like in zustand
// start making doc
const useStore = createStore<Counter>((set) => ({
  count: 0,
  incBy: 10,
  inc: () => set((state) => ({ ...state, count: state.count + 1 })),
  reset: () => set((state) => ({ ...state, count: 0 })),
  incrementBySize: () => set((state) => ({ ...state, count: state.count + state.incBy }))
}));

function App() {
  const { state, inc, reset, incrementBySize } = useStore();

  const increment = () => {
    incrementBySize();
  }

  const onReset = () => {
    reset();
  }

  return (
    <>
      <button onClick={increment}>Inc</button>
      <button onClick={onReset}>Reset</button>
      <div>
        {state.count}
      </div>
    </>
  )
}

export default App
