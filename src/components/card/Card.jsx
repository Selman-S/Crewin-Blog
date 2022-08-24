import React from 'react'
import './Card.scss'

const Card = ({user}) => {
const {city,name,image,email} = user
  return (
    <div className="card">
      <div className="photo" style={{backgroundImage:`url(${image})`}} ></div>
        <h2 className="name">{name}</h2>
        <p className='email'>{email}</p>
        <p className='city'>
          {city}
        </p>

    </div>
  )
}

export default Card
