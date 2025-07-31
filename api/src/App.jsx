import React, { useState } from 'react'
import axios from 'axios';

const App = () => {

  const [data,setData]=useState([])
   const clicked = async()=>{
   const response= await axios.get('https://picsum.photos/v2/list')
  //  console.log(response)
  //  const data=response.data
  //  console.log(data)
   setData(response.data)
   console.log(data)
   }
  return (
    <div className='p-10'>
    <button onClick={clicked} className='bg-red-500 text-black h-20 w-40 active:scale-90'>Get Data</button>
    <div className='text-white  p-5 mt-5'> {data.map(function(elem,idx){
      return <div key={idx} className='bg-gray-50 w-full flex items-center justify-between text-black px-7 py-6 rounded mb-5'>
        <img className='h-40' src={elem.download_url} alt=""/>
        <h1>{elem.author}</h1>
      </div>
    })}</div>
    </div>
  )
}

export default App