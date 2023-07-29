import React from 'react';
import Footer from '../Components/Footer';


import { Breadcrumbs, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import product1 from '../Images/product1.png';
import product2 from '../Images/product2.png';
import product3 from '../Images/product3.png';
import product4 from '../Images/product4.png';
import { NavLink } from 'react-router-dom';


const Car = () => {
  return (
    <>



<div className='bg-gray-100'>


<div className=' py-[6%] pl-[12%]'>

  <h1 className='text-3xl font-bold pb-5'>Rental Cars</h1>
  
  
  
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
    <NavLink href="#">All Cars</NavLink>
  </Breadcrumbs>

</div>


</div>


    {/* Our Services */}




<div>
      <h1  className='text-3xl font-bold pb-5 pt-[5%] text-center'>Car Service</h1>


    

            
        <div>

            <div className='px-[10%] py-[5%]'>





                {/* Product List */}


                  <div>




                    <div className='grid gap-4 grid-cols-3  md:grid md:grid-cols-2'>



                    <div className='my-10'>
                        <Card>
                          
                          <CardHeader>
                          <img src={product1} alt='Product 1' className="w-full h-full object-cover"
                              />
                          </CardHeader>

                          <CardBody>
                              <div className="flex items-center justify-between mb-2">
                                <Typography color="blue-gray" className="font-medium">
                                  Car 1
                                </Typography>
                                <Typography color="blue-gray" className="font-medium">
                                  Rs. 5000
                                </Typography>
                              </div>
                              <Typography variant="small" color="gray" className="font-normal opacity-75">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat nemo porro tempore explicabo corporis nisi veritatis! Quidem iure, rem in perferendis quibusdam doloribus mollitia, non impedit voluptatem accusantium beatae cumque?
                              </Typography>
                          </CardBody>


                              <CardFooter className='bg-blue-gray-100 text-center text-xl'>

                                <NavLink className=' rounded-full hover:bg-white duration-500 p-4 mx-4 ' onClick={()=> alert("Service Adding later")}>
                              <i className="fa-solid fa-shopping-cart text-blue-900"></i>
                              </NavLink>

                                <NavLink to='/service_details' className='rounded-full p-4 mx-4 hover:bg-white duration-500 text-green-700 hover:text-orange-700'>
                                  <i className="fa-solid fa-magnifying-glass "></i>
                                  </NavLink>

                                <NavLink onClick={()=> alert("Service Adding later")}className='rounded-full p-4 mx-4 hover:bg-white duration-500'>
                                  <i className="fa-solid fa-heart text-red-700"></i>
                                  </NavLink>
                                  
                              </CardFooter>


                        </Card>
                    </div>



                    <div className='my-10'>
                        <Card>
                          
                          <CardHeader>
                          <img src={product2} alt='Product 2' className="w-full h-full object-cover"
                              />
                          </CardHeader>

                          <CardBody>
                              <div className="flex items-center justify-between mb-2">
                                <Typography color="blue-gray" className="font-medium">
                                  Car 2
                                </Typography>
                                <Typography color="blue-gray" className="font-medium">
                                  Rs. 5000
                                </Typography>
                              </div>
                              <Typography variant="small" color="gray" className="font-normal opacity-75">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat nemo porro tempore explicabo corporis nisi veritatis! Quidem iure, rem in perferendis quibusdam doloribus mollitia, non impedit voluptatem accusantium beatae cumque?
                              </Typography>
                          </CardBody>


                              <CardFooter className='bg-blue-gray-100 text-center text-xl'>

                                <NavLink onClick={()=> alert("Service Adding later")} className=' rounded-full hover:bg-white duration-500 p-4 mx-4 '>
                              <i className="fa-solid fa-shopping-cart text-blue-900"></i>
                              </NavLink>

                                <NavLink to='/service_details' className='rounded-full p-4 mx-4 hover:bg-white duration-500 text-green-700 hover:text-orange-700'>
                                  <i className="fa-solid fa-magnifying-glass "></i>
                                  </NavLink>

                                <NavLink onClick={()=> alert("Service Adding later")} className='rounded-full p-4 mx-4 hover:bg-white duration-500'>
                                  <i className="fa-solid fa-heart text-red-700"></i>
                                  </NavLink>
                                  
                              </CardFooter>


                        </Card>
                    </div>



                    <div className='my-10'>
                        <Card>
                          
                          <CardHeader>
                          <img src={product3} alt='Product 3' className="w-full h-full object-cover"
                              />
                          </CardHeader>

                          <CardBody>
                              <div className="flex items-center justify-between mb-2">
                                <Typography color="blue-gray" className="font-medium">
                                  Car 3
                                </Typography>
                                <Typography color="blue-gray" className="font-medium">
                                  Rs. 5000
                                </Typography>
                              </div>
                              <Typography variant="small" color="gray" className="font-normal opacity-75">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat nemo porro tempore explicabo corporis nisi veritatis! Quidem iure, rem in perferendis quibusdam doloribus mollitia, non impedit voluptatem accusantium beatae cumque?
                              </Typography>
                          </CardBody>


                              <CardFooter className='bg-blue-gray-100 text-center text-xl'>

                                <NavLink onClick={()=> alert("Service Adding later")} className=' rounded-full hover:bg-white duration-500 p-4 mx-4 '>
                              <i className="fa-solid fa-shopping-cart text-blue-900"></i>
                              </NavLink>

                                <NavLink to='/service_details' className='rounded-full p-4 mx-4 hover:bg-white duration-500 text-green-700 hover:text-orange-700'>
                                  <i className="fa-solid fa-magnifying-glass "></i>
                                  </NavLink>

                                <NavLink onClick={()=> alert("Service Adding later")} className='rounded-full p-4 mx-4 hover:bg-white duration-500'>
                                  <i className="fa-solid fa-heart text-red-700"></i>
                                  </NavLink>
                                  
                              </CardFooter>


                        </Card>
                    </div>



                    <div className='my-10'>
                        <Card>
                          
                          <CardHeader>
                          <img src={product4} alt='Product 4' className="w-full h-full object-cover"
                              />
                          </CardHeader>

                          <CardBody>
                              <div className="flex items-center justify-between mb-2">
                                <Typography color="blue-gray" className="font-medium">
                                  Car 4
                                </Typography>
                                <Typography color="blue-gray" className="font-medium">
                                  Rs. 5000
                                </Typography>
                              </div>
                              <Typography variant="small" color="gray" className="font-normal opacity-75">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat nemo porro tempore explicabo corporis nisi veritatis! Quidem iure, rem in perferendis quibusdam doloribus mollitia, non impedit voluptatem accusantium beatae cumque?
                              </Typography>
                          </CardBody>


                          <CardFooter className='bg-blue-gray-100 text-center text-xl'>

                                <NavLink onClick={()=> alert("Service Adding later")} className=' rounded-full hover:bg-white duration-500 p-4 mx-4 '>
                                <i className="fa-solid fa-shopping-cart text-blue-900"></i>
                                </NavLink>

                                <NavLink to='/service_details' className='rounded-full p-4 mx-4 hover:bg-white duration-500 text-green-700 hover:text-orange-700'>
                                  <i className="fa-solid fa-magnifying-glass "></i>
                                  </NavLink>

                                <NavLink onClick={()=> alert("Service Adding later")} className='rounded-full p-4 mx-4 hover:bg-white duration-500'>
                                  <i className="fa-solid fa-heart text-red-700"></i>
                                  </NavLink>
                            
                          </CardFooter>


                        </Card>
                    </div>




                    </div>



                  </div>


              {/* Product List over */}


            </div>

        </div>


      </div>




{/* Our Services End */}

    
    
    
    <Footer />
    </>
  )
}

export default Car