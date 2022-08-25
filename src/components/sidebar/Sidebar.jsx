import React, { useContext } from 'react'
import './Sidebar.scss';
import { Link } from 'react-router-dom';
import { RiHome5Line } from 'react-icons/ri';
import { FiUsers } from "react-icons/fi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { OpenContext } from '../../context/OpenContext';


const Sidebar = () => {
  const { open,setOpen } = useContext(OpenContext);
const visibl = {
  overflow: 'visible',
  width: '300px',
  padding: '60px 18px',
  
}

const handleClose= () => {
  setOpen(false);
}
  return (
    <div className="sidebar" onClick={handleClose} style={open?visibl:null}>
     <div className="nav-menu">
      <Link to='/' className="nav-item" > <span>
        <RiHome5Line/>
        </span> 
        <p>Dashboard</p> </Link>
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
