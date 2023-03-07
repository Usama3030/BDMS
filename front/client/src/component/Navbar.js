import React from 'react'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import './style.css';
//import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';


function Navbar({Toggle}) {
  return (
    <nav className="navbar navbar-expand-sm navbar-white "> 
  { //bg-transparent
  //<i className="navbar-brand bi bi-justify-left" fs-4 onClick={Toggle}></i>
}
<div className='px-3'>
   <FaIcons.FaBars onClick={Toggle} />
   </div>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation"><i className='bi bi-justify'></i></button>
    <div className="collapse navbar-collapse" id="NavId">
    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
    <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="#" id="admin" data-bs-toggle="dropdown" 
    aria-haspopup="true" aria-expanded="false">Usama</a>
    <div className="dropdown-menu" aria-labelledby="admin">
    <a className="dropdown-item" href="#">Profile</a> 
    <a className="dropdown-item" href="#">Setting</a> 
    <a className="dropdown-item" href="#">Logout</a> 
     </div>
         </li>
       </ul>
      </div>
    </nav>
  )
}

export default Navbar
