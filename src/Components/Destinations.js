import React from 'react';
import destination1 from '../Images/destination1.jpg';
import destination2 from '../Images/destination2.jpg';
import destination3 from '../Images/destination3.jpg';

const Destinations = () => {
  return (
    <div className='grid grid-cols-3 gap-5'>

      <div className='hover:cursor-pointer'>
        <div className='overflow-hidden h-full rounded-3xl'>
            <img className='w-full h-full rounded-3xl hover:scale-125 duration-300' src={destination1} alt="" />
        </div>
        <h1 className='font-extrabold text-2xl pt-4 '>Destination 1</h1>
      </div>



      <div className='hover:cursor-pointer'>
        <div className='overflow-hidden h-full rounded-3xl'>
            <img className='w-full h-full rounded-3xl hover:scale-125 duration-300' src={destination2} alt="" />
        </div>
        <h1 className='font-extrabold text-2xl pt-4'>Destination 2</h1>
      </div>



      <div className='hover:cursor-pointer'>
        <div className='overflow-hidden h-full rounded-3xl'>
            <img className='w-full h-full rounded-3xl hover:scale-125 duration-300' src={destination3} alt="" />
        </div>
          <h1 className='font-extrabold text-2xl pt-4'>Destination 3</h1>
      </div>



    </div>
  )
}

export default Destinations