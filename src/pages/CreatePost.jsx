import React from 'react'

const CreatePost = () => {
    const submitHandler = (e) =>{
         e.preventDefault()
    }
  return (
    <div className=' bg-gray-100 h-screen w-full flex justify-center gap-4 flex-col px-8' >
        <h1 className='text-center font-medium text-3xl' >Create Post</h1>
        <form className='py-6 px-2 flex flex-col items-center gap-2 h-44 w-full bg-white z-100 drop-shadow-lg rounded-lg' >
            <input className='w-full border-2 px-4 py-1 rounded' type="file" name="image"/>
            <input className='w-full border-2 px-4 py-1 rounded' type="text" name="caption" placeholder='Write Capton' id="" />
            <button onClick={(e) =>{submitHandler(e)}}
             className=' text-center py-2 bg-green-400 font-medium text-lg w-32 rounded' >Submit</button>
        </form>
    </div>
  )
}

export default CreatePost