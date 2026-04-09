import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeJsx from './Components/WelcomeJsx'
import Parent from './Components/Parent'
import Greeting from './Components/Greeting'
import WelcomeMessage from './Components/WelcomeMessage'
import UserCard from './Components/UserCard'
import Counter from './Components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <WelcomeJsx />
      <Parent />
      <Greeting name="Raju" />
      <Greeting name="John" />
      <WelcomeMessage />
      <UserCard name="Raju" age="24" location="Ahmedabad" />
      <UserCard name="Amit" age="26" location="Mumbai" />
      <Counter />
    </>
  )
}

export default App
