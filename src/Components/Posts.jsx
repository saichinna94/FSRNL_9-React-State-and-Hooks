import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Posts = () => {
    const API="https://jsonplaceholder.typicode.com/posts";
    const[postData,setPostData]=useState([]);
    useEffect(()=>{

        axios.get(API)
        .then(res=> {
            console.log(res.data)
            setPostData(res.data);
        })
        
        .catch(err=> console.log(err))
    },[]);
  return (
    <>
    <h2>Latest Posts</h2>
    {postData.map(post=>
        <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <hr /> 
        </div>    
    )}
    </>
  )
}

export default Posts;
