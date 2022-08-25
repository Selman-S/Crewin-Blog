import React, { useContext, useState } from 'react'
import './Navbar.scss';
import logo from '../../assets/image/crewin logo.png'
import { IoNotificationsOutline,IoMailOutline } from "react-icons/io5";
import { BiMenu} from "react-icons/bi";
import {OpenContext} from '../../context/OpenContext'



const Navbar = () => {
  const { open,setOpen } = useContext(OpenContext);
 
  
  console.log(open);
  const handleMenu = () => {
    setOpen(!open)
 
  }
  return (
    <>
    <nav className="navbar">
      <div className="logo-container"><div className="logo">
        <a href="https://www.crewin.org/" target="_blank"  rel="noreferrer">

        <img src={logo} alt="" />
        </a>
      </div></div>
      
      <div className="right-menu">
        <div className="icons">
        <IoMailOutline size={20}/>
        <IoNotificationsOutline  size={20}/> <a href="https://github.com/Selman-S" target="_blank"  rel="noreferrer">
        <div className="user" style={{backgroundImage:'url(https://avatars.githubusercontent.com/u/97898216?v=6)'}}>  </div></a>
        </div>
        <BiMenu id='hamburger' onClick={handleMenu}/>
      </div>


  

    </nav>
    </>
  )
}

export default Navbar
