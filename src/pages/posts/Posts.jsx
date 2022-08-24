import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Posts.scss'
import {posts} from '../../helper/data'
import Post from '../../components/post/Post'
const Posts = () => {
  console.log(posts);
  return (
    <div className="posts">
<h1 className="title">Posts</h1>
     {posts.map((post) =>
     <Post post={post}  key={post.id}/>
     )}
    </div>
  )
}

export default Posts
