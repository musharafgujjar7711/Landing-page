import React from 'react';

function Experience() {
  return (
    <div>
      <div className='flex flex-col-reverse md:flex-row items-center w-full p-3 md:p-16 gap-10 justify-around bg-cyan-200'>
        <div className='w-full md:w-[400px] py-6 flex flex-col gap-3'>
          <h1 className='font-bold text-2xl'>
            Experience in <span className='text-blue-600'>mobile and web</span> application and website building measuring
          </h1>
          <p className='text-wrap font-thin'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ullam explicabo, similique unde fugit, laudantium saepe nulla asperiores ipsa ipsum commodi accusamus dolores non modi?
          </p>
          <div className='flex items-center gap-3'>
            <button className='p-2 bg-blue-600 rounded-md'>contact us</button>
            <button className='p-2 bg-white rounded-lg text-blue-800 border-b-2 border-black'>view more</button>
          </div>
        </div>

        <div>
          <img src="https://wallpapers.com/images/hd/web-developer-working-illustration-4wxamt77ru03qkh6.jpg" className='w-full md:w-[350px] h-72 object-cover' alt="" />
        </div>
      </div>
    </div>
  );
}

export default Experience;
