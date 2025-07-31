import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='px-7 py-8 text-white bg-emerald-600 flex items-center justify-between'>
        <h2 className='text-2xl'>LAMBORGINI</h2>
        <div className='flex gap-8 text-lg underline'>
           <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
             <Link to='/contact'>Contact</Link>
              <Link to='/products'>Products</Link>
        </div>
    </div>
  )
}

export default Header