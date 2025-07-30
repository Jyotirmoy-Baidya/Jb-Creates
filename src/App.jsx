import React, { Children } from 'react'
import { BrowserRouter, NavLink, Route, Router, Routes } from 'react-router-dom'
import AugustasGreenCard from './components/augustas/AugustasGreenCard'
import Augustas from './pages/Augustas'
import Abraham from './pages/Abraham'
import ProductDetailsCard from './components/abraham/ProductDetailsCard'
import Jb from './pages/Jb'
import MrBeast from './components/Jb/MrBeast'
import FurnitureLandingPage from './components/Jb/FurnitureLandingPage'
import N8nImagePost from './components/Jb/N8nImagePost'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <div className='flex gap-3'>
            <NavLink to="/augustas">AUGUSTAS</NavLink>

            <NavLink to="/abraham">ABRAHAM</NavLink>

            <NavLink to="/jb" >JB</NavLink>
          </div>
        } />
        <Route path="/jb" element={<Jb />} />
        <Route path="/jb/mrbeast" element={<MrBeast />} />
        <Route path="/jb/furniture-landing-page" element={<FurnitureLandingPage />} />
        <Route path="/jb/n8n-post" element={<N8nImagePost />} />


        <Route path="/augustas" element={<Augustas />} />
        <Route path='/augustas/green-card' element={<AugustasGreenCard />} />

        <Route path="/abraham" element={<Abraham />} />
        <Route path='/abraham/product-details' element={<ProductDetailsCard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App