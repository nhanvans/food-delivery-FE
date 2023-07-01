import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '~/pages/Home'
import Search from '~/pages/Search'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
