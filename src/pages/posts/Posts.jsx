import React, { useContext } from 'react'

import './Posts.scss'
import {posts} from '../../helper/data'
import Post from '../../components/post/Post'
import { OpenContext } from '../../context/OpenContext'
const Posts = () => {

  const { setOpen } = useContext(OpenContext);
  const handleClose= () => {
    setOpen(false);
  }
  return (
    <div className="posts" onClick={handleClose} >
<h1 className="title">Posts</h1>
<div className="post-container">

     {posts.map((post) =>
     <Post post={post}  key={post.id}/>
     )}
     </div>
    </div>
  )
}

export default Posts
