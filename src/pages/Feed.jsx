import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Feed = () => {

    const [post, setPost] = useState([{
  image: "https://ik.imagekit.io/lltbd3s6z/image_nPiWOrHs4.jpg",
  caption: "test-caption-now"
}])

useEffect(() =>{
  axios.get("http://localhost:3000/getPost")
  .then((res) => {
   setPost(res.data.getPosts)
  })

},[])

  return (
    <div className='bg-gray-100' >
        {post.map((elem, idx) => {
            return <div key={idx} className='h-72 w-screen  px-4 py-3 bg-white drop-shadow-2xl my-3 rounded' >
                <img className='h-[90%] w-full object-cover' src={elem.image} alt="" />
                <h3>{elem.caption}</h3>
            </div>
        })}
    </div>
  )
}

export default Feed