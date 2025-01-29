import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </div>
        <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
      </div>
      <h1>Git + GitHub</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Click me !! : {count}
        </button>

      </div>
      <p className="read-the-docs">
        This Template has been edited !! + Update on New branch
      </p>
    </>
  )
}

export default App
