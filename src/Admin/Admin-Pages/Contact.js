import React from 'react'
import Header from '../Admin-Components/Header'

const Contact = () => {
  return (
    


    <div className='grid grid-cols-6 bg-teal-50'>

    <div className='bg-red-200 h-full rounded-tr-xl px-[10%] py-4 pb-[50%]'>
      <Header />
    </div>


    <div className='bg-teal-50 col-span-5 p-[2%]'>
      
      

      
{/* Destionation Table */}

<h1  className='text-4xl font-bold py-5'>Contact Table </h1>


<div className='pt-5'>
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th className='text-xl'>S.No</th>
            <th className='text-xl'>Name</th>
            <th className='text-xl'>Description</th>
            <th className='text-xl'>Image</th>
            <th className='text-xl'>Action</th>
          </tr>
        </thead>
        <tbody>
          
          
          <tr className='text-center'>
            <td className='text-lg p-2'>Place 1</td>
            <td className='text-lg p-2'>Malcolm Lockyer</td>
            <td className='text-lg p-2'>Author</td>
            <td className='text-lg p-2'>Description</td>
            <td className='text-lg p-2'><a href="/"><i className="fa-solid fa-trash"></i></a></td>
          </tr>



        </tbody>
      </table>
</div>


{/* Blogs Table End */}


      
    </div>


    </div>





  )
}

export default Contact