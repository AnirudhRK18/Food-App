import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Headlinecard from './components/Headlinecard'
import Food from './components/Food'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Navbar/>
      <Hero/>
      <Headlinecard/>
      <Food/>
     </div>
    </>
  )
}

export default App
