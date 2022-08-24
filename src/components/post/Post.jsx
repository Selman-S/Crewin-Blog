import React, { useEffect, useState } from 'react'
import './Post.scss'
import { BsThreeDotsVertical } from 'react-icons/bs';


const Post = ({post}) => {
  const [toggle, setToggle] = useState(null);
  const {post_title,desc} = post

  useEffect(() => {
 
  }, []);
  return (
    <div className="post">
      <div className="three-point" onClick={() => setToggle(!toggle)}>
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
