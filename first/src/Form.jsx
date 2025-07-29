import React from 'react'

const Form = () => {
  return (
    <>
    <form>
      <input className='bg-yellow-100 mx-5 w-60 h-20' type='text' placeholder='type anything'></input>
      <button onClick={()=>
        console.log("hello")
      } className='bg-pink-400 text-black w-40 h-30'>click me </button>
    </form>
    </>
  )
}

export default Form