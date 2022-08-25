import React, { useContext } from 'react'

import './Users.scss'
import {data} from '../../helper/data'
import Card from '../../components/card/Card'
import { OpenContext } from '../../context/OpenContext'


const Users = () => {
  const { setOpen } = useContext(OpenContext);

  const handleClose= () => {
    setOpen(false);
  }
  return (
    <div className="users" onClick={handleClose}>
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
