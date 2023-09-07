import React from 'react'

import Footer from '../Components/Footer';


import { Breadcrumbs, Button, Input, Option, Select } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
import destination1 from '../Images/destination1.jpg';
import destination2 from '../Images/destination2.jpg';
import destination3 from '../Images/destination3.jpg';


const DestinationPage = () => {
  return (
    <>



<div className='back '>


  <div className=' py-[6%] pl-[12%] '>

    <h1 className='text-4xl text-white font-extrabold  pb-5'>Explore Places With Us</h1>
    
    
    <div className='pt-[10%]'>
    <Breadcrumbs >
      <NavLink href="#" className="opacity-60 font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </NavLink>
      <NavLink href="#" className="opacity-60 font-bold">
        <span>Pages</span>
      </NavLink>
      <NavLink href="#" className="font-bold">All Destination</NavLink>
    </Breadcrumbs>
    </div>

  </div>


</div>


    {/* Our Services */}




<div className='px-[10%]  py-[1%]' >

      <div className='grid grid-cols-3 gap-5'>

            <div> 
              <h1  className='text-3xl font-bold pb-5 pt-[5%] '>Search Places</h1>
              <div className="relative flex w-full gap-2 md:w-max">
                <Input
                  type="search"
                  label="Your Destination...."
                  className="pr-20"
                  containerProps={{
                    className: "min-w-[288px]",
                  }}
                />
                <Button size="sm" className="!absolute right-1 top-1 rounded">
                  Search
                </Button>
              </div>
              
            </div>


            <div>
              <h1  className='text-3xl font-bold pb-5 pt-[5%] '>Filter By Place</h1>


                <div className="flex w-full flex-col gap-6">

                  <Select size="lg" label="Select Place">
                    <Option>Kathmandu</Option>
                    <Option>Pokhara</Option>
                  </Select>
                </div>
            </div>



            <div>
              <h1  className='text-3xl font-bold pb-5 pt-[5%] '>Filter By Province</h1>


                <div className="flex w-full flex-col gap-6">

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
            </div>


      </div>


    

            
        <div>

            <div className='py-[5%]'>





                {/* Destination List */}

                    <div className='grid grid-cols-3 gap-7'>

                          <div className='hover:cursor-pointer py-8'>
                            <div className='overflow-hidden h-full rounded-3xl'>
                                <img className='w-full h-full rounded-3xl hover:scale-125 duration-300' src={destination1} alt="" />
                            </div>
                            <h1 className='font-extrabold text-2xl pt-4 '>Destination 1</h1>
                          </div>



                          <div className='hover:cursor-pointer py-8'>
                            <div className='overflow-hidden h-full rounded-3xl'>
                                <img className='w-full h-full rounded-3xl hover:scale-125 duration-300' src={destination2} alt="" />
                            </div>
                            <h1 className='font-extrabold text-2xl pt-4'>Destination 2</h1>
                          </div>



                          <div className='hover:cursor-pointer py-8'>
                            <div className='overflow-hidden h-full rounded-3xl'>
                                <img className='w-full h-full rounded-3xl hover:scale-125 duration-300' src={destination3} alt="" />
                            </div>
                              <h1 className='font-extrabold text-2xl pt-4'>Destination 3</h1>
                          </div>



                          <div className='hover:cursor-pointer py-8'>
                            <div className='overflow-hidden h-full rounded-3xl'>
                                <img className='w-full h-full rounded-3xl hover:scale-125 duration-300' src={destination1} alt="" />
                            </div>
                            <h1 className='font-extrabold text-2xl pt-4 '>Destination 4</h1>
                          </div>



                          <div className='hover:cursor-pointer py-8'>
                            <div className='overflow-hidden h-full rounded-3xl'>
                                <img className='w-full h-full rounded-3xl hover:scale-125 duration-300' src={destination2} alt="" />
                            </div>
                            <h1 className='font-extrabold text-2xl pt-4'>Destination 5</h1>
                          </div>



                          <div className='hover:cursor-pointer py-8'>
                            <div className='overflow-hidden h-full rounded-3xl'>
                                <img className='w-full h-full rounded-3xl hover:scale-125 duration-300' src={destination3} alt="" />
                            </div>
                              <h1 className='font-extrabold text-2xl pt-4'>Destination 6</h1>
                          </div>



                    </div>




              {/* Destination List over */}


            </div>

        </div>


      </div>




{/* Our Services End */}

    
    
    
    <Footer />
    </>
  )
}

export default DestinationPage