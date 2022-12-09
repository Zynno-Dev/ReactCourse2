import React from 'react'
import './navbar.css'
import Cart from '../cart/Cart'
import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul className='navOptions'>
        <li> <NavLink to='/'><img src={logo} className="logo" alt="logo" /></NavLink> </li>
        <li> <NavLink to='/'>Home</NavLink> </li>
        <li> <NavLink to='/personajes'>Personajes</NavLink> </li>
        <li><Cart ind={30}/></li>
      </ul>
    </div>
  )
}

export default Navbar