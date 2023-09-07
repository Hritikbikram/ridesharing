import React from 'react'
import Header from '../Admin-Components/Header'

const Dashboard = () => {
  return (

    <div className='grid grid-cols-6 bg-teal-50'>

    <div className='bg-red-200 h-full rounded-tr-xl px-[10%] py-4 pb-[50%]'>
      <Header />
    </div>


    <div className='bg-teal-50 col-span-5 p-[2%]'>
      
      <h1  className='text-4xl font-bold pb-5'>Dashboard</h1>

      
    </div>


    </div>


  )
}

export default Dashboard