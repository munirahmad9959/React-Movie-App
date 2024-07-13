import { useState, useEffect } from 'react'
import './App.css'
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header'
import Banner from './pages/Banner'
import MainBody from './pages/MainBody';
import Footer from './pages/Footer';
import BackToTopBtn from './components/BackToTopBtn';

function App() {

  const [scroll, setScroll] = useState(0)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      setScroll(window.scrollY)
    })
  }, [scroll])

  return (
    <>
      <Header scroll={scroll}/>
      <Banner />
      <MainBody />
      <Footer />
      <BackToTopBtn scroll={scroll}/>
    </>
  )
}

export default App
