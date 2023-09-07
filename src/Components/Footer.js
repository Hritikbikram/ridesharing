import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../Images/brand.svg';
// import { Button, Input } from '@material-tailwind/react';
import brand from '../Images/brands.png'

const Footer = () => {
  return (
    
    <>


      <div className='flex justify-center'>
        <img src={brand} alt="Brands" />
      </div>



        <div className='bg-gray-50'>
        

          <div className='grid grid-cols-5 md:grid-cols-2 p-[4%] gap-6'>

            <div className='col-span-2'>
              <img src={logo} alt="Logo" />


              <form>
                <div className='flex py-7 w-[70%]'>
                {/* <Input 
                className='rounded-r-none w-[100%]' 
                type='text'
                label='Your Email'
                name='email'
                /> */}

{/* 
                <Button className='text-lg px-5 py-1 rounded-l-none'>Submit</Button> */}
                </div>
              </form>

              <p className='text-lg pt-2 text-blue-gray-600'>Contact Info</p>
              <p className='text-lg pt-2 text-blue-gray-600'>Surkhet, Nepal</p>
            </div>

            <div className='text-left text-lg '>
              <ul className='text-blue-gray-600'>


                  <li className='font-bold text-2xl text-black pb-5'>
                    <NavLink to="/"  className="hover:text-orange-300 duration-200" >Top Destinations</NavLink>
                  </li>
                    
                  <li className='pb-2'>
                    <NavLink to="/"  className="hover:text-orange-300 duration-200" >Kathmandu</NavLink>
                  </li>

                  
                  <li className='pb-2'>
                    <NavLink to="/"  className="hover:text-orange-300 duration-200" >Pokhara</NavLink>
                  </li>
                  
                  
                  <li className='pb-2'>
                    <NavLink to="/"  className="hover:text-orange-300 duration-200" >Chitwan</NavLink>
                  </li>
                  
              </ul>
            </div>


            <div className='text-left text-lg'>
              <ul className='text-blue-gray-600'>


                <li className='font-bold text-2xl text-black pb-5'>
                  <NavLink to="/"  className="hover:text-orange-300 duration-200" >Customer Care</NavLink>
                </li>

                <li className='pb-2'>
                  <NavLink to="/"  className="hover:text-orange-300 duration-200" >My Account</NavLink>
                </li>


                <li className='pb-2'>
                  <NavLink to="/"  className="hover:text-orange-300 duration-200" >Offers</NavLink>
                </li>


                <li className='pb-2'>
                  <NavLink to="/"  className="hover:text-orange-300 duration-200" >Ride History</NavLink>
                </li>


              </ul>
            </div>


            <div className='text-left text-lg'>
              <ul className='text-blue-gray-600'>
                
                <li className='font-bold text-2xl text-black pb-5'>
                  <NavLink to="/"  className="hover:text-orange-300 duration-200" >About Us</NavLink>
                </li>

                <li className='pb-2'>
                  <NavLink to="/"  className="hover:text-orange-300 duration-200" >Blog</NavLink>
                </li>

                <li className='pb-2'>
                  <NavLink to="/"  className="hover:text-orange-300 duration-200" >About Us</NavLink>
                </li>

                <li className='pb-2'>
                  <NavLink to="/"  className="hover:text-orange-300 duration-200" >Contact Us</NavLink>
                </li>


              </ul>
            </div>


      

          </div>

            <div className='pb-6'>
                <hr  className='p-5 w-[90%] mx-[5%] border-blue-gray-200' />

                <div className='flex justify-between'>

                    <p className='px-[5%] pb-6'>© 2023 Your Ride-Shatring - All rights reserved</p>

                    <div className='pr-12'>
                        <i className="fa-brands fa-square-facebook pr-10 text-2xl hover:text-4xl duration-500"></i>
                        <i className="fa-brands fa-instagram pr-10 text-2xl hover:text-4xl duration-500"></i>
                        <i className="fa-brands fa-twitter pr-10 text-2xl hover:text-4xl duration-500"></i>
                      
                    </div>

                </div>
            </div>


        </div>
    </>
  )
}

export default Footer