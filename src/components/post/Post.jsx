import React, { useState } from 'react'
import './Post.scss'
import { BsThreeDotsVertical } from 'react-icons/bs';


const Post = ({post}) => {
  const [toggle, setToggle] = useState(false);
  const {post_title,desc} = post
  return (
    <div className="post">
      <div className="three-point">
        <BsThreeDotsVertical />
        <div className="edit" style={{display:toggle ? 'block':'none'}}>
          <div className="edit-links">

          <p className="edit-link">Edit</p>
          <p className="delete-link">Delete</p>
          </div>
        </div>
      </div>
      <h3 className="post-title">
        {post_title}
      </h3>
      <p className="post-desc">
    {desc}
      </p>
    </div>
  )
}

export default Post
