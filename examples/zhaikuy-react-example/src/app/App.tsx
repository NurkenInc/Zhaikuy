import { Outlet } from 'react-router-dom'
import { Providers } from './providers/Providers';

import './styles/App.css';

function App() {
  return (
    <Providers>
      <Outlet />
    </Providers>
  )
}

export default App
