import React from 'react'
import { BrowserRouter, Route,
  Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Dashbord from '../pages/Dashbord'
import Posts from '../pages/Posts'
import Users from '../pages/Users'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Dashbord/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/posts" element={<Posts/>}/>
     
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
