import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelopeCircleCheck, faCartShopping, faUserCircle, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import '../App.css';
import { Link } from 'react-router-dom';

export default function SearchBar() {
    
  return (
    <div className='searchBar'>
      <div className='searchBox'>
        <input type="text"  placeholder="search" className='input'/>
        <button type='submit'>
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        </button>
      </div>

        <Link to='/cart'><FontAwesomeIcon icon={faCartShopping} className='faCart'></FontAwesomeIcon></Link>
        <FontAwesomeIcon id='faUser' icon={faUserCircle}></FontAwesomeIcon>
        <Link to='/contact'><FontAwesomeIcon id='faEnvelope' icon={faEnvelopeCircleCheck}></FontAwesomeIcon></Link>
      
      </div>
  )
}
