import React from 'react'
import './Sidebar.scss';
import { Link } from 'react-router-dom';
import { RiHome5Line } from 'react-icons/ri';
import { FiUsers } from "react-icons/fi";
import { BiMessageSquareDetail } from "react-icons/bi";


const Sidebar = () => {
  return (
    <div className="sidebar">
     <div className="nav-menu">
      <Link to='/' className="nav-item" > <span>
        <RiHome5Line/>
        </span> 
        <p>Dashborad</p> </Link>
      <Link to='users' className="nav-item" >
        <span>
        <FiUsers/>
        </span>
        <p>Users</p></Link>
      <Link to='posts' className="nav-item"  >
        <span><BiMessageSquareDetail/></span>
        <p>
        Posts

        </p>
        </Link>
     </div>
    </div>
  )
}

export default Sidebar
