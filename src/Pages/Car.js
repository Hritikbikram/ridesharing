import React from 'react';
import Footer from '../Components/Footer';


import { Breadcrumbs, Button, Card, CardBody, CardFooter, CardHeader, Input, Option, Select, Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';


const Car = () => {
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

                <div className="flex w-72 flex-col gap-6">

                  <Select size="lg" label="Select Version">
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                  </Select>
                </div>
            </div>


      </div>


    

            
        <div>

            <div className='px-[10%] py-[5%]'>





                {/* Destination List */}




              {/* Destination List over */}


            </div>

        </div>


      </div>




{/* Our Services End */}

    
    
    
    <Footer />
    </>
  )
}

export default Car