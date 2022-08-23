import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import Dashbord from '../pages/dashboard/Dashbord'
import Posts from '../pages/posts/Posts'
import Users from '../pages/users/Users'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />

      <Routes>
        <Route path="/" element={<Dashbord />} />
        <Route path="/users" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
