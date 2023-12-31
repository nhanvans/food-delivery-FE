import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '~/pages/Home'
import Search from '~/pages/Search'
import RestaurantDetail from '~/pages/RestaurantDetail'
import FoodPlace from '~/admin/FoodPlace'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/detail' element={<RestaurantDetail />} />

          <Route path='/admin' element={<FoodPlace />} />
          <Route path='/admin/food-place' element={<FoodPlace />} />
          <Route path='/admin/food-place/create' element={<FoodPlace />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
