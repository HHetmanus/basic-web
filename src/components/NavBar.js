import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import CustomBtn from './CustomBtn'
import logo from '../guitarLogo.jpg'
import SearchBar from './searchBar';
import '../App.css';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function NavBar() {
  

  return(
    <div className='header'>
        <img src={logo} alt='' className='logo'/>
        <SearchBar />
        <nav className='nav-bar'> 
            <ul className='links'>
                <Link to='/home'>Home</Link> 
                <Link to='/'>Product</Link>
                <Link>Offers</Link>
                <Link to='/contact'>Contact</Link>
                
            </ul>
            <CustomBtn txt='Product Trial'/>
        </nav>
        
    </div>
    
  )
}
