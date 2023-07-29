import React from 'react'
import Swiper from '../Components/Swiper';
import Footer from '../Components/Footer';

import { Button, Card, CardBody, CardFooter, CardHeader, Input, Typography } from '@material-tailwind/react';
import { NavLink, useNavigate } from 'react-router-dom';


import product1 from '../Images/product1.png';
import product2 from '../Images/product2.png';
import product3 from '../Images/product3.png';





import delivery from '../Images/delivery.png';
import quality from '../Images/quality.png';
import cashback from '../Images/cashback.png';
import support from '../Images/support.png';

const Home = () => {

  const nav=useNavigate();
  return (
    <>
    
    

    <Swiper />







{/* Service */}


<div className='mt-10'>

<h1 className='text-3xl md:text-2xl font-bold text-center'>Our Services</h1>

  <div className='px-[10%] py-10'>
      <div className='grid grid-cols-3 gap-3 md:grid-cols-2 sm:grid-cols-1'>

        <div className='text-center shadow-xl  p-4 hover:cursor-pointer' onClick={()=>nav('/drivers')}>

          <img src={delivery} alt="Delivery" className='pt-10 pb-4 pl-[40%] items-center'/>

          <h3 className='text-2xl pb-4 font-bold'>Drivers Rental</h3>
          <p className='pb-10 text-blue-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate est nobis incidunt ratione iure</p>



        </div>

        <div className='text-center shadow-xl  p-4 hover:cursor-pointer' onClick={()=>nav('/cars')}>

          <img src={cashback} alt="Delivery" className='pt-10 pb-4 pl-[40%] items-center'/>

          <h3 className='text-2xl pb-4 font-bold'>Car Rentals</h3>
          <p className='pb-10 text-blue-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate est nobis incidunt ratione iure</p>



        </div>

        <div className='text-center shadow-xl  p-4 hover:cursor-pointer' onClick={()=>nav('/bikes')}>

          <img src={quality} alt="Delivery" className='pt-10 pb-4 pl-[40%] items-center'/>

          <h3 className='text-2xl pb-4 font-bold'>Bike Rentals</h3>
          <p className='pb-10 text-blue-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate est nobis incidunt ratione iure</p>



        </div>


      </div>
    </div>
</div>



{/* Services End */}




        {/* Subscribe */}


        <div className='bg-red-50'>

            <div className='text-center p-[6%]'>
              <h1 className='text-6xl md:text-3xl font-semibold'>Best & Reliable Service</h1>
              <h1 className='text-6xl md:text-3xl font-semibold pt-3'>to your inbox</h1>

              <div className=''>

              <p className='text-3xl md:text-2xl py-[1%] '>Enjoy weekly update on Services and recommendations</p>

              <div className='flex justify-center py-[1%]'>
              <div className='w-[30%]' >
                  <form action="#" className='bg-white rounded-l-sm'>
                    <Input className='border-none' type='email' label="Email Address"/>
                    
                  </form>
                  
                </div>
                <Button className=''>Subscribe</Button>
                </div>


            </div>




                  
            </div>

        </div>




{/* Offers */}


<div className='mt-10'>

<h1 className='text-3xl md:text-2xl font-bold text-center'>What We Offer? ? ?</h1>

  <div className='px-[10%] py-10'>
      <div className='grid grid-cols-4 gap-3 md:grid-cols-2 sm:grid-cols-1'>

        <div className='text-center shadow-xl  p-4'>

          <img src={delivery} alt="Delivery" className='pt-10 pb-4 pl-[40%] items-center'/>

          <h3 className='text-2xl pb-4 font-bold'>Free Session</h3>
          <p className='pb-10 text-blue-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate est nobis incidunt ratione iure</p>



        </div>

        <div className='text-center shadow-xl  p-4'>

          <img src={cashback} alt="Delivery" className='pt-10 pb-4 pl-[40%] items-center'/>

          <h3 className='text-2xl pb-4 font-bold'>Several Offers</h3>
          <p className='pb-10 text-blue-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate est nobis incidunt ratione iure</p>



        </div>

        <div className='text-center shadow-xl  p-4'>

          <img src={quality} alt="Delivery" className='pt-10 pb-4 pl-[40%] items-center'/>

          <h3 className='text-2xl pb-4 font-bold'>Quality Services</h3>
          <p className='pb-10 text-blue-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate est nobis incidunt ratione iure</p>



        </div>

        <div className='text-center shadow-xl  p-4'>

          <img src={support} alt="Delivery" className='pt-10 pb-4 pl-[40%] items-center'/>

          <h3 className='text-2xl pb-4 font-bold'>24/7 Support</h3>
          <p className='pb-10 text-blue-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate est nobis incidunt ratione iure</p>



        </div>

      </div>
    </div>
</div>



{/* Offers End */}









  {/* Blogs */}


  <div className='px-[10%]  py-[1%]'>

<h1  className='text-3xl font-bold pb-[5%] text-center'>Our Blogs</h1>

<div className='grid gap-4 grid-cols-3  md:grid md:grid-cols-2'>



  <div className='my-10'>


    <Card className='overflow-hidden'>

        <CardHeader floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none">
          
        <img src={product1} alt='Blog pic'    className="w-full h-full object-cover" />

        </CardHeader>


        <CardBody className='pt-8'>

          <Typography variant="h4" color="blue-gray">
            Blog Title 1
          </Typography>

          <Typography variant="lead" color="gray" className="mt-3 pt-4 font-normal">
            Because it&apos;s about motivating the doers. Because I&apos;m here to
            follow my dreams and inspire others.
          </Typography>


        </CardBody>

        <CardFooter>
          
          <NavLink className="hover:text-orange-600 duration-500 text-lg" to='/single_blog' >Read More</NavLink>

        </CardFooter>




    </Card>

  </div>




  <div className='my-10'>


    <Card className='overflow-hidden'>

        <CardHeader floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none">
          
        <img src={product2} alt='Blog pic'    className="w-full h-full object-cover" />

        </CardHeader>


        <CardBody className='pt-8'>

          <Typography variant="h4" color="blue-gray">
            Blog Title 2
          </Typography>

          <Typography variant="lead" color="gray" className="mt-3 pt-4 font-normal">
            Because it&apos;s about motivating the doers. Because I&apos;m here to
            follow my dreams and inspire others.
          </Typography>


        </CardBody>

        <CardFooter>
          
          <NavLink className="hover:text-orange-600 duration-500 text-lg" to='/single_blog' >Read More</NavLink>

        </CardFooter>




    </Card>

  </div>




  <div className='my-10'>


    <Card className='overflow-hidden'>

        <CardHeader floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none">
          
        <img src={product3} alt='Blog pic'    className="w-full h-full object-cover" />

        </CardHeader>


        <CardBody className='pt-8'>

          <Typography variant="h4" color="blue-gray">
            Blog Title 3
          </Typography>

          <Typography variant="lead" color="gray" className="mt-3 pt-4 font-normal">
            Because it&apos;s about motivating the doers. Because I&apos;m here to
            follow my dreams and inspire others.
          </Typography>


        </CardBody>

        <CardFooter>
          
          <NavLink className="hover:text-orange-600 duration-500 text-lg" to='/single_blog' >Read More</NavLink>

        </CardFooter>




    </Card>

  </div>






</div>
</div>



{/* Blogs End */}


    <Footer />

    
    </>
  )
}

export default Home