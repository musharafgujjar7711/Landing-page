import React, { Profiler } from 'react'
import { CgProfile } from 'react-icons/cg'

function Footer() {
  return (
    <div>
         <div>
      <div className='flex flex-col-reverse md:flex-row items-center w-full p-3 md:p-16 gap-10 justify-around '>
        <div className='w-full md:w-[400px] py-6 flex flex-col gap-6'>
            <div className=' flex items-center gap-5'>
                <CgProfile size={60} className=' text-blue-500'/>
                <div>
                 <h2 className=' font-bold text-orange-400'> My name is musharaf hussain</h2> 
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
          <h1 className='font-bold text-2xl'>
            <span className=' font-bold text-blue-800'>Lorem ipsum</span> dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className='text-wrap font-thin'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ullam explicabo, similique unde fugit, laudantium saepe nulla asperiores ipsa ipsum commodi accusamus dolores non modi?
          </p>
         
        </div>

        <div>
          <img src="https://previews.123rf.com/images/scyther5/scyther51109/scyther5110900101/10514725-news-on-mobile-phone-smart-phone-isolated-on-white.jpg" className='w-full md:w-[350px] h-72 object-cover' alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer