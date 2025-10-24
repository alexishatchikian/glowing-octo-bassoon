import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Application React Minimale</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Compteur : {count}
          </button>
        </div>
        <p>
          Modifiez <code>src/App.jsx</code> et sauvegardez pour tester le rechargement rapide.
        </p>
      </header>
    </div>
  )
}

export default App
