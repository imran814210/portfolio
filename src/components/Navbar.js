
import React from 'react';
import { Link } from 'react-router-dom';
import mypicture from '../Asset/mypic.jpg';
function Navbar(){
    return(
        <div className="flex justify-between w-full h-[50px] bg-red-400">
      <div className='bg-indigo-300 text-white w-full h-full bg-red-400 flex justify-end align-middle'>
        <ul className='flex items-center'>
            <li className='pr-4 '><span className='hover:underline decoration-4 hover:cursor-pointer'><Link to="/work">Work</Link></span></li>
            <li className='pr-4'><span className='hover:underline decoration-4 hover:cursor-pointer'><Link to="/about">About</Link></span></li>
            <li className='pr-4'><span className='hover:underline decoration-4 hover:cursor-pointer'><Link to="/contact">Contact</Link></span></li>
            <li className=' pr-4'><span className='hover:underline decoration-4 hover:cursor-pointer'><Link to="/home">Home</Link></span></li>
        </ul>
      </div>
      <div className=''>
        <img src={mypicture} className='rounded-full w-[50px] h-full mr-2 hover:cursor-pointer'></img>
      </div>
    </div>
    )
}
export default Navbar;