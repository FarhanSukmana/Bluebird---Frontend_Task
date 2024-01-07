import React,{useState} from 'react'
import { Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='flex w-full h-20 bg-[#2f5296] items-center'>
        <div className='flex w-full h-full items-center justify-center gap-20 font-semibold text-white'>
          <Link to='/' className='hover:underline underline-offset-8 hover:scale-110 transform transition duration-100'>HOME</Link>
          <Link to='/Wishlist' className='hover:underline underline-offset-8 hover:scale-110 transform transition duration-100'>WISHLIST</Link>
          <Link to='/Mybook' className='hover:underline underline-offset-8 hover:scale-110 transform transition duration-100'>MY BOOK</Link>

        </div>
      </div>
    </>

  )
}
export default Navbar;