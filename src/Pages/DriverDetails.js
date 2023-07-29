import React from 'react';

import { NavLink } from 'react-router-dom';
import { Breadcrumbs, Button, Textarea} from '@material-tailwind/react';
import Footer from '../Components/Footer';
import product1 from '../Images/product1.png';
import product2 from '../Images/product2.png';
import product3 from '../Images/product3.png';
import product4 from '../Images/product4.png';

const DriverDetails = () => {
  return (
    <>
    


    <>


     
    <div className='bg-gray-100'>


        <div className=' py-[6%] pl-[12%]'>

          <h1 className='text-3xl font-bold pb-5'>Driver Details</h1>
          
          
          
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
            <NavLink href="#">Driver Details</NavLink>
          </Breadcrumbs>

        </div>


    </div>



    <div className='px-[10%] py-[5%]'>




      <div className='p-5 grid grid-cols-5 gap-2  shadow-lg'>

          <div>

            <img className='py-1' src={product1} alt="Product 1" />
            <img className='py-1'src={product2} alt="Product 2" />
            <img className='py-1' src={product3} alt="Product 3" />

          </div>

          <div  className='row-span-3 col-span-2' >
            <img src={product4} className='h-[100%]' alt="Product 4" />
          </div>


          <div  className='row-span-3 col-span-2 py-[15%] px-[5%]' >
            <h1 className='text-3xl font-bold pb-5'> Name</h1>


            <p className='pt-[10%]'>Rs. 10,000</p>

            <p className='pt-[10%] text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur tempora ex eum aut corporis saepe quam a, quo porro quibusdam enim necessitatibus consequuntur perspiciatis quod</p>



            <div className='flex py-5'>
              <p className='font-bold'>Categories :- </p>

              <p> Vehicle Category</p>

            </div>


            <div className='pt-[10%]'>
                <NavLink to="/cart" className='bg-orange-300  rounded-full hover:bg-orange-700 duration-500 p-4 mx-4 '>
                  <i className="fa-solid fa-shopping-cart text-white"></i>
                </NavLink>


                <NavLink className='rounded-full p-4 mx-4 hover:bg-red-900 duration-500 bg-red-400'>
                  <i className="fa-solid fa-heart text-white"></i>
                </NavLink>

            </div>

          </div>

      </div>




    </div>


    {/* Reviews */}

    <div className='bg-gray-100'>

      <div className='px-[10%] py-[2%]'>


        <h1 className='text-3xl font-bold pb-5'>Description</h1>


        <p className='text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur tempora ex eum aut corporis saepe quam a, quo porro quibusdam enim necessitatibus consequuntur perspiciatis quod</p>


      </div>

    </div>



    {/* Reviews */}

    <div>

      <div className='px-[10%] py-[2%] grid grid-cols-2'>
        
            <div>
              <h1 className='text-5xl font-bold pt-5'>Ratings : 5.0/5</h1>
              <i class="fa-sharp fa-solid fa-star py-5 px-2 text-yellow-500 text-3xl"></i>

              <i class="fa-sharp fa-solid fa-star py-5 px-2 text-yellow-500 text-3xl"></i>

              <i class="fa-sharp fa-solid fa-star py-5 px-2 text-yellow-500 text-3xl"></i>

              <i class="fa-sharp fa-solid fa-star py-5 px-2 text-yellow-500 text-3xl"></i>

              <i class="fa-sharp fa-solid fa-star py-5 px-2 text-yellow-500 text-3xl"></i>

            </div>


            <div>

              
              
                <h1 className='text-3xl font-bold'>Your Review</h1>

             
              <div className="w-[100%] py-5">
                <Textarea label="Message" className='text-xl'/>

                <Button className='mt-4'>Post</Button>
              </div>



            </div>

      </div>



      {/* All Reviews */}



      <div className='px-[10%] py-[2%]'>

      <hr  className=' w-[100%] pb-[1%] border-blue-gray-200' />


      <h1  className='text-3xl pb-[1%] font-bold'>All Reviews</h1>

      <hr  className='py-[1%] w-[100%] border-blue-gray-200' />


        <div>
          <h1  className='text-xl font-bold py-4'>UserName:</h1>
          <p className='text-lg'>Reviews Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis molestiae eligendi, deleniti magnam corrupti aliquam. A ipsam nemo earum maxime pariatur nam, tempore voluptas magni quod obcaecati, dolores quis asperiores!</p>
        </div>

      </div>

    </div>
 

<Footer />
    </>
    
    
    
    
    </>
  )
}

export default DriverDetails