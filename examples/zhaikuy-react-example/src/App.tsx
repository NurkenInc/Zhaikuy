import './App.css'
import { sayHello, sayGoodbye } from 'zhaikuy'

function App() {

  const onHello = () => {
    sayHello();
  }

  const onBye = () => {
    sayGoodbye();
  }

  return (
    <>
      <button onClick={onHello}>Hello</button>
      <button onClick={onBye}>Bye</button>
    </>
  )
}

export default App
