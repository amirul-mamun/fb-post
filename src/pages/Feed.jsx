import React, { useState } from 'react'

const Feed = () => {
    const [post, setPost] = useState([{
  image: "https://ik.imagekit.io/lltbd3s6z/image_nPiWOrHs4.jpg",
  caption: "test-caption-now"
}])
  return (
    <div>
        {post.map((elem, idx) => {
            return <div key={idx} className='h-72 w-screen  px-4 py-3' >
                <img className='h-[90%] w-full' src={elem.image} alt="" />
                <h3>{elem.caption}</h3>
            </div>
        })}
    </div>
  )
}

export default Feed