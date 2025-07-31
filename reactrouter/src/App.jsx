import React from 'react'
import {Route,Routes} from 'react-router-dom';
import About from './pages/About';
import Products from './pages/Products';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from './components/Header';


const App = () => {
  return (
    <div>
      <Header/>
     
      <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/products' element={<Products/>} />

      </Routes>
      
    </div>
  )
}

export default App