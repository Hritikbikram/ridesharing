import React from 'react';

import Footer from '../Components/Footer'
import { Breadcrumbs, Button, Input } from '@material-tailwind/react'
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <>
    
    


    <div className='bg-gray-100'>
    
    
    <div className=' py-[6%] pl-[12%]'>
    
      <h1 className='text-3xl font-bold pb-5'>My Account</h1>
      
      
      
      <Breadcrumbs>
        <NavLink href="#" className="opacity-60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </NavLink>
        <NavLink href="#" className="opacity-60">
          <span>Pages</span>
        </NavLink>
        <NavLink href="#">My Account</NavLink>
      </Breadcrumbs>
    
    </div>
    
    
    </div>



<div className=''>

<div className='px-[10%] py-[5%]'>

<div>

  <div className='px-[30%] p-10'>
    <h1 className='text-center text-3xl font-bold pb-5'>Login</h1>
    <p className='text-center text-gray-500 pb-10'>Please login using account detail below</p>

    <form>

      <div className='py-4 text-lg'>
        <Input label='Email Address' className='rounded-lg' 
        type='email' name='email' />
      </div>

      <div className='py-4'>
        <Input label='Password' className='rounded-lg' type='password' name='password'/>
      </div>

      
      <p className=' text-gray-500'>Forgot Your Password?</p>

      <Button className='p-4 mt-4 rounded-lg w-[100%]'>Login</Button>


    </form>

  </div>

</div>

</div>
</div>











<Footer />
    
    </>
  )
}

export default Login