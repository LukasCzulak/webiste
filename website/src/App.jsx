import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        Lukas Czulak
      </h1>
      <p>
        Hier entsteht eine ganz tolle Website. <br/>
        Für mehr infos: info@lukasczulak.de
      </p>
    </>
  )
}

export default App
