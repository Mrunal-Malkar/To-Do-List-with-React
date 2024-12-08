import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/navbar"
import Outcontainer from "./components/outcontainer.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <div className='flex justify-center'>
    <Outcontainer />
    </div>
    </>
  )
}

export default App
