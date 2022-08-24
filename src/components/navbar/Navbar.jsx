import React from 'react'
import './Navbar.scss';
import logo from '../../assets/image/nav-logo.png'
import { IoNotificationsOutline,IoMailOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container"><div className="logo">
        <a href="https://www.crewin.org/" target="_blank">

        <img src={logo} alt="" />
        </a>
      </div></div>
      
      <div className="right-menu">
        <div className="icons">
        <IoMailOutline size={20}/>
        <IoNotificationsOutline  size={20}/>
        <div className="user" style={{background:'url(https://avatars.githubusercontent.com/u/97898216?v=6)'}}></div>
        </div>
      </div>
   
    </nav>
  )
}

export default Navbar
