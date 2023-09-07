import React from 'react'
import Header from '../Admin-Components/Header'
import { Button, Input, Option, Select, Textarea } from '@material-tailwind/react'


const Packages = () => {
  return (
    


    <div className='grid grid-cols-6 bg-teal-50'>

    <div className='bg-red-200 h-full rounded-tr-xl px-[10%] py-4 pb-[50%]'>
      <Header />
    </div>


    <div className='bg-teal-50 col-span-5 p-[2%]'>
      
      <h1  className='text-4xl font-bold pb-5'>Packages</h1>

        {/* Add Package */}

        <div>

<form className="mt-8 mb-2  max-w-screen-lg sm:w-96">
    <div className="mb-4 flex gap-6">
      
      <div>
      <h1  className='text-xl font-bold pb-5 pt-[5%] '>Name of Place</h1>

          <Input type='text' size="lg" label="Name" />
      </div>

      <div>

        <h1  className='text-xl font-bold pb-5 pt-[5%] '>Select Province</h1>


        <Select size="lg" label="Select Type">
          <Option>Province 1</Option>
          <Option>Madhesh Province</Option>
          <Option>Bagmati Province</Option>
          <Option>Gandaki Province</Option>
          <Option>Lumbini Province</Option>
          <Option>Karnali Province</Option>
          <Option>Sudur Paschim Province</Option>
        </Select>

      </div>


      <div>

        <h1  className='text-xl font-bold pb-5 pt-[5%] '>Select Place</h1>


        <Select size="lg" label="Select Place">
          <Option>Kathmandu</Option>
          <Option>Pokhara</Option>
        </Select>

      </div>



      <div>

      <h1  className='text-xl font-bold pb-5 pt-[5%] '>Select Image</h1>
      
      <Input type='file' size="lg" label="Image" />
      
      </div>





      
    </div>

    
    <div>

      <h1  className='text-xl font-bold pb-5 '>Add Description</h1>


      <Textarea label='Description' className='w-full  bg-white'></Textarea>

    </div>

    <Button className='mt-5'>Submit</Button>

</form>


</div>

{/* Add Package End */}


{/* Destionation Table */}

<h1  className='text-4xl font-bold py-5'>Package List</h1>


<div className='pt-5'>
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th className='text-xl'>S.No</th>
            <th className='text-xl'>Name</th>
            <th className='text-xl'>Place</th>
            <th className='text-xl'>Province</th>
            <th className='text-xl'>Description</th>
            <th className='text-xl'>Image</th>
            <th className='text-xl'>Action</th>
          </tr>
        </thead>
        <tbody>
          
          
          <tr className='text-center'>
            <td className='text-lg p-2'>Place 1</td>
            <td className='text-lg p-2'>Malcolm Lockyer</td>
            <td className='text-lg p-2'>1961</td>
            <td className='text-lg p-2'>Place 1</td>
            <td className='text-lg p-2'>Description</td>
            <td className='text-lg p-2'>Malcolm Lockyer</td>
            <td className='text-lg p-2'><a href="/"><i className="fa-solid fa-pen-to-square"></i></a></td>
          </tr>



        </tbody>
      </table>
</div>


{/* Package Table End */}

      
    </div>


    </div>




  )
}

export default Packages