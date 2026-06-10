import React from 'react'
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <div className='flex items-center justify-center px-1 gap-8 h-12 bg-emerald-500' >
        <Link className='px-4 py-1.5 bg-yellow-500 text-lg rounded' to='/' >Crate Post</Link>
        <Link className='px-4 py-1.5 bg-yellow-500 text-lg rounded' to='/feed' > Post Feed</Link>
    </div>
  )
}

export default Navber