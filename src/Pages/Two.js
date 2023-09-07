import React from 'react';
import Footer from '../Components/Footer';



import { Breadcrumbs, Card, CardBody, CardFooter, CardHeader, Typography,Button, Select, Option } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';


const Two = () => {
  return (
    <>
    

    

    <div className='trip'>


    <div className=' py-[6%] pl-[12%]'>

      <h1 className='text-4xl text-white font-extrabold  pb-5'>Our Travel Packages</h1>
      
      <div className='pt-[10%]'>  
      
          <Breadcrumbs>
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
            <NavLink href="#" className="font-bold">Offers</NavLink>
          </Breadcrumbs>

      </div>

    </div>


    </div>


    {/* Our Pakages */}

<div className='px-[10%] py-12'>







<div className='pb-[5%]'>
  <h1  className='text-3xl font-bold pb-5  '>Package Filter By Province</h1>


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






    <div className='grid grid-cols-3 gap-7'>

          <div>



              <Card className="w-full max-w-[26rem] shadow-lg">
                  <CardHeader floated={false} color="blue-gray">
                    <img
                      src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt="ui/ux review check"
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    
                  </CardHeader>
                  <CardBody>
                    <div className="mb-3 flex items-center justify-between">
                      <Typography variant="h5" color="blue-gray" className="font-extrabold">
                        Pokhara Tour Package
                      </Typography>
                      <Typography
                        color="blue-gray"
                        className="flex items-center gap-1.5 font-normal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="-mt-0.5 h-5 w-5 text-yellow-700"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                        5.0
                      </Typography>
                    </div>
                    <Typography color="gray">
                        <i className="fa-solid fa-clock "></i><span className='pl-3 text-sm font-medium'> 5 NIGHTS / 6 DAYS </span>

                        <ul className='py-5 list-disc'>
                          <li>  KTM - Pokhara - KTM</li>
                          <li> Beautiful Sunrise & Sunset with mountain view</li>
                          <li> Private Tour & can be customized</li>
                        </ul>

                    </Typography>

                    
                    <Typography color="gray">

                    <i class="fa-solid fa-hand-holding-dollar"></i> <span className='pl-3 font-bold'>Rs. 10,000</span>

                    </Typography>
                    
                  </CardBody>
                  <CardFooter className="pt-3">
                    <Button size="lg" fullWidth={true}>
                    Book Package
                    </Button>
                  </CardFooter>
              </Card>




          </div>


          <div>



              <Card className="w-full max-w-[26rem] shadow-lg">
                  <CardHeader floated={false} color="blue-gray">
                    <img
                      src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt="ui/ux review check"
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    
                  </CardHeader>
                  <CardBody>
                    <div className="mb-3 flex items-center justify-between">
                      <Typography variant="h5" color="blue-gray" className="font-extrabold">
                        Kathmandu Tour Package
                      </Typography>
                      <Typography
                        color="blue-gray"
                        className="flex items-center gap-1.5 font-normal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="-mt-0.5 h-5 w-5 text-yellow-700"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                        5.0
                      </Typography>
                    </div>
                    <Typography color="gray">
                      <i className="fa-solid fa-clock "></i><span className='pl-3 text-sm font-medium'> 6 NIGHTS / 7 DAYS </span>

                      <ul className='py-5 list-disc'>
                        <li>  Kathmandu - Nagarkot - Kathmandu</li>
                        <li> Beautiful Sunrise & Sunset with mountain view</li>
                        <li> Private Tour & can be customized</li>
                      </ul>
                    </Typography>
                    
                    
                    <Typography color="gray">

                    <i class="fa-solid fa-hand-holding-dollar"></i> <span className='pl-3 font-bold'>Rs. 10,000</span>

                    </Typography>

                  </CardBody>
                  <CardFooter className="pt-3">
                    <Button size="lg" fullWidth={true}>
                      Book Package
                    </Button>
                  </CardFooter>
              </Card>




          </div>


          <div>



              <Card className="w-full max-w-[26rem] shadow-lg">
                  <CardHeader floated={false} color="blue-gray">
                    <img
                      src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt="ui/ux review check"
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    
                  </CardHeader>
                  <CardBody>
                    <div className="mb-3 flex items-center justify-between">
                      <Typography variant="h5" color="blue-gray" className="font-extrabold">
                        Muktinath Tour Package
                      </Typography>
                      <Typography
                        color="blue-gray"
                        className="flex items-center gap-1.5 font-normal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="-mt-0.5 h-5 w-5 text-yellow-700"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                        5.0
                      </Typography>
                    </div>
                    <Typography color="gray">
                        <i className="fa-solid fa-clock "></i><span className='pl-3 text-sm font-medium'> 5 NIGHTS / 6 DAYS </span>

                        <ul className='py-5 list-disc'>
                          <li>  Muktinath Darshan & Pooja</li>
                          <li>Kathmandu Sightseeing</li>
                          <li> Pokhara Sightseeing: View mountains</li>
                        </ul>
                    </Typography>

                    
                    <Typography color="gray">

                    <i class="fa-solid fa-hand-holding-dollar"></i> <span className='pl-3 font-bold'>Rs. 10,000</span>

                    </Typography>
                    
                  </CardBody>
                  <CardFooter className="pt-3">
                    <Button size="lg" fullWidth={true}>
                    Book Package
                    </Button>
                  </CardFooter>
              </Card>




          </div>

      

          <div>



              <Card className="w-full max-w-[26rem] shadow-lg">
                  <CardHeader floated={false} color="blue-gray">
                    <img
                      src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt="ui/ux review check"
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    
                  </CardHeader>
                  <CardBody>
                    <div className="mb-3 flex items-center justify-between">
                      <Typography variant="h5" color="blue-gray" className="font-extrabold">
                        Lumbini Tour Package
                      </Typography>
                      <Typography
                        color="blue-gray"
                        className="flex items-center gap-1.5 font-normal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="-mt-0.5 h-5 w-5 text-yellow-700"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                        5.0
                      </Typography>
                    </div>
                    <Typography color="gray">
                        <i className="fa-solid fa-clock "></i><span className='pl-3 text-sm font-medium'> 5 NIGHTS / 6 DAYS </span>

                        <ul className='py-5 list-disc'>
                          <li>  KTM - Lumbini - KTM</li>
                          <li>  Visit birthplace of Lord Buddha</li>
                          <li> Private Tour & can be customized</li>
                        </ul>

                    </Typography>


                    
                    <Typography color="gray">

                    <i class="fa-solid fa-hand-holding-dollar"></i> <span className='pl-3 font-bold'>Rs. 10,000</span>

                    </Typography>
                    
                  </CardBody>
                  <CardFooter className="pt-3">
                    <Button size="lg" fullWidth={true}>
                    Book Package
                    </Button>
                  </CardFooter>
              </Card>




          </div>


          <div>



              <Card className="w-full max-w-[26rem] shadow-lg">
                  <CardHeader floated={false} color="blue-gray">
                    <img
                      src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt="ui/ux review check"
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    
                  </CardHeader>
                  <CardBody>
                    <div className="mb-3 flex items-center justify-between">
                      <Typography variant="h5" color="blue-gray" className="font-extrabold">
                        Everest Mountain Flight
                      </Typography>
                      <Typography
                        color="blue-gray"
                        className="flex items-center gap-1.5 font-normal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="-mt-0.5 h-5 w-5 text-yellow-700"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                        5.0
                      </Typography>
                    </div>
                    <Typography color="gray">
                      <i className="fa-solid fa-clock "></i><span className='pl-3 text-sm font-medium'> 1 Hour</span>

                      <ul className='py-5 list-disc'>
                        <li>  Close view of Mount Everest from the air</li>
                        <li>  Breath-taking views of World's Top Mountains</li>
                        <li>  Passenger is guaranteed w/ windows seat</li>
                      </ul>
                    </Typography>

                    <Typography color="gray">

                    <i class="fa-solid fa-hand-holding-dollar"></i> <span className='pl-3 font-bold'>Rs. 10,000</span>

                    </Typography>
                    
                  </CardBody>
                  <CardFooter className="pt-3">
                    <Button size="lg" fullWidth={true}>
                      Book Package
                    </Button>
                  </CardFooter>
              </Card>




          </div>


          <div>



              <Card className="w-full max-w-[26rem] shadow-lg">
                  <CardHeader floated={false} color="blue-gray">
                    <img
                      src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt="ui/ux review check"
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    
                  </CardHeader>
                  <CardBody>
                    <div className="mb-3 flex items-center justify-between">
                      <Typography variant="h5" color="blue-gray" className="font-extrabold">
                        Best of Nepal Tour Package
                      </Typography>
                      <Typography
                        color="blue-gray"
                        className="flex items-center gap-1.5 font-normal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="-mt-0.5 h-5 w-5 text-yellow-700"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                        5.0
                      </Typography>
                    </div>
                    <Typography color="gray">
                        <i className="fa-solid fa-clock "></i><span className='pl-3 text-sm font-medium'> 5 NIGHTS / 6 DAYS </span>

                        <ul className='py-5 list-disc'>
                          <li>KTM - Nagarkot - Pokhara - Chitwan - KTM</li>
                          <li>Jungle Safari at Chitwan</li>
                          <li>Private Tour & can be customized</li>
                        </ul>
                    </Typography>


                    
                    <Typography color="gray">

                    <i class="fa-solid fa-hand-holding-dollar"></i> <span className='pl-3 font-bold'>Rs. 10,000</span>

                    </Typography>
                    
                  </CardBody>
                  <CardFooter className="pt-3">
                    <Button size="lg" fullWidth={true}>
                    Book Package
                    </Button>
                  </CardFooter>
              </Card>




          </div>

      
    </div>




{/* 
    <div>

        <Card className="w-full flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            
            <Typography variant="h4" color="blue-gray" className="mb-2 font-extrabold">
            Kathmandu Tour Package
            </Typography>


            <Typography variant="h6" color="gray" className="mb-4  font-medium">
              Kathmandu
            </Typography>



            <Typography color="gray" className="mb-8 font-normal">
              Like so many organizations these days, Autodesk is a company in
              transition. It was until recently a traditional boxed software company
              selling licenses. Yet its own business model disruption is only part
              of the story
            </Typography>
            <a href="#" className="inline-block">
              <Button variant="text" className="flex items-center gap-2">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardBody>
        </Card>

    </div> */}



</div>



    {/* Our Pakages End */}

    
    
    

    
    

    <Footer />
    
    </>
  )
}

export default Two