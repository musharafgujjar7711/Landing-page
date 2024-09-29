import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=' border relative md:flex md:items-center md:justify-between p-4 '>
      <div className='flex items-center justify-between'>
        <h1 className='capitalize font-bold text-blue-400'>logo</h1>
        
       
        <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
          <div className={`h-1 w-8 bg-blue-400 mb-1 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`h-1 w-8 bg-blue-400 mb-1 transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`h-1 w-8 bg-blue-400 mb-1 transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </div>
      </div>

      
      {isOpen && (
        <div className='absolute top-16 left-0 w-full h-60 bg-white border-t shadow-lg z-10 flex flex-col'>
          <ul className='flex flex-col items-start p-4'>
            <li className='py-2 hover:text-sky-300 duration-100 cursor-pointer'>home</li>
            <li className='py-2 hover:text-sky-300 duration-100 cursor-pointer'>about us</li>
            <li className='py-2 hover:text-sky-300 duration-100 cursor-pointer'>blog</li>
            <li className='py-2 hover:text-sky-300 duration-100 cursor-pointer'>service</li>
            <li className='py-1 bg-blue-400 rounded-lg text-white text-center w-full hover:bg-blue-500 cursor-pointer '>contact us</li>
          </ul>
        </div>
      )}

     
      <ul className='hidden md:flex capitalize items-end gap-12'> 
        <li className='hover:text-sky-300 duration-100 cursor-pointer'>home</li>
        <li className='hover:text-sky-300 duration-100 cursor-pointer'>about us</li>
        <li className='hover:text-sky-300 duration-100 cursor-pointer'>blog</li>
        <li className='hover:text-sky-300 duration-100 cursor-pointer'>service</li>
        <li className='p-1 bg-blue-400 rounded-lg text-white hover:bg-blue-500 cursor-pointer duration-200'>contact us</li>
      </ul>
    </div>
  );
}

export default Navbar;
