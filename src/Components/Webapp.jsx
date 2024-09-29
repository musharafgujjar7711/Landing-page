import React from 'react';
import { FaAppStoreIos, FaArtstation } from 'react-icons/fa';
import { FaMobileScreenButton } from 'react-icons/fa6';
import { TbSeo } from 'react-icons/tb';

const services = [
  {
    icon: <FaAppStoreIos className='text-violet-400' size={30} />,
    title: 'Web Application',
    description: 'Lorem is simply',
  },
  {
    icon: <FaArtstation className='text-violet-400' size={30} />,
    title: 'AR/VR Solution',
    description: 'Lorem is simply',
  },
  {
    icon: <TbSeo className='text-violet-400' size={30} />,
    title: 'SEO',
    description: 'Lorem is simply',
  },
  {
    icon: <FaMobileScreenButton className='text-violet-400' size={30} />,
    title: 'Mobile Application',
    description: 'Lorem is simply',
  },
];

function Webapp() {
  return (
    <div className='flex items-center'>
      <div className='grid grid-cols-2 gap-4 p-4 mt-4 md:flex md:items-center md:justify-center md:gap-10 md:ml-36'>
        {services.map((service, index) => (
          <div key={index} className='flex flex-col md:flex-row items-center gap-3'>
            <div>{service.icon}</div>
            <div className='flex flex-col'>
              <h1 className='font-bold text-lg'>{service.title}</h1>
              <span className='font-thin'>{service.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Webapp;
