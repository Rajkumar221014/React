import React,{useState} from 'react'

import Form from './Form'

const App = () => {
  
  const [age,setAge] = useState(20)
  const onchange=()=>{
    setAge(30)
  }
  return (
    
    <>
    <h1 className='bg-red-900 text-2xl h-40 w-60 px-10 py-10 my-2 mx-2'>My age is {age} </h1>
    <button onClick={onchange} className='bg-green-700 text-xl h-10 w-30 mx-2 my-2 '>click me</button>
    <Form/>
    </>
    
  )
}

export default App