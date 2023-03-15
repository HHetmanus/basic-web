import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import {Shop} from './pages/shop/shop';
import Cart from './pages/cart/cart';
import Contact from './pages/contact/contact';
import Home from './pages/home/home';


function App() {
  return(
    <div className='full-image'> 
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={< Shop />} />
        <Route path='/cart' element={< Cart />}/>
        <Route path='/contact' element={< Contact />}/>
        <Route path='/home' element={< Home />}/>
      </Routes>
    </Router>
    
    </div>
  )
}


  



export default App;
