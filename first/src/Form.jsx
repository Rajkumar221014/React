import React, { useState } from 'react'

const Form = () => {
  const[username,setUsername]=useState('')
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log(username)
    setUsername('')

  }
  return (
    <>
    <form onSubmit={(e)=>{
      submitHandler(e)
    }}>
      <input value={username}
      onChange={(e)=>{
        setUsername(e.target.value)
      }}
      className='bg-yellow-100 mx-5 w-60 h-20' type='text' placeholder='Enter Your Name'></input>
      <button onClick={()=>
        console.log("hello")
      } className='bg-pink-400 text-black w-40 h-30'>click me </button>
    </form>
    </>
  )
}

export default Form