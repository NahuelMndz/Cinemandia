import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Navbar from './components/Navbar'
import Actors from './pages/Actors'
import AboutUs from './pages/AboutUs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Tvshows from './pages/Tvshows'
import Footer from './components/Footer'
import DetailPage from './pages/DetailPage'
import ScrollToTop from './components/ScrollToTop'
import CreditsPage from './pages/CreditsPage'

function App() {

  return (
    <>
    <div className='min-h-screen flex flex-col'>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<Tvshows />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path='/:idType/details/:id' element={<DetailPage/>}/>
        <Route path='/:idType/detailsAll/:id' element={<CreditsPage/>}/>
      </Routes>
    </div>
    <Footer/>
</>
  )
}

export default App