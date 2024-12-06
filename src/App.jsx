import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Nosotros from './components/Nosotros'
import { Servicios } from './components/Servicios'
import  Flota from './components/Flota'
import Footer from './components/Footer'

import './App.css';
import Main from './components/Main'
function App() {
  const [count, setCount] = useState(0)

  return (
     <div className='main'>
      <Header/>
            <div id="main">
              <Main/>
            </div>
          <div id="nosotros">
            <Nosotros/>
          </div>
          <div id="servicios">
            <Servicios/>
          </div>
          <div id="flota">
                <Flota/>
           </div>
          
          <Footer/>
      
   </div>
  )
}

export default App
