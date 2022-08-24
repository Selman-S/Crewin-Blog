import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Users.scss'
import {data} from '../../helper/data'
import Card from '../../components/card/Card'


const Users = () => {
  console.log(data);
  return (
    <div className="users">
<h1 className="title">Users</h1>
<div className="card-container">

    {data.map((user) =>
    <Card user={user} key={user.id}/>
    )}
    </div>
    </div>
  )
}

export default Users
