import React from 'react'

import blogpic from '../Images/blog.png';
import Footer from '../Components/Footer';
import { NavLink } from 'react-router-dom';


const BlogSingle = () => {
  return (
    <>


             <div>

          <div className='px-[10%] pt-[5%]'>


            <div className='grid grid-cols-3 pb-12'>
              <div className='col-span-2'>
                
                

                  <img src={blogpic} alt="Blog" className='py-5' />

                  <div className='grid grid-cols-2 text-lg'>
                      <div className='flex gap-4'>

                        <i className="fa-solid fa-pen-nib pt-2"></i>

                        <p>Author Name</p>


                      </div>

                      <div className='flex gap-4'>
                        <i className="fa-regular fa-calendar-days pt-1"></i>
                        <p>June 15. 2023</p>
                      </div>

                  </div>


                  
                  <div className='py-[2%]'>

                      <h1 className='text-3xl font-bold py-5'>Blog Title</h1>

                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda minima non nemo, odit officiis tempore saepe atque eum alias ipsam neque culpa unde delectus animi corporis maxime a ex.</p>

                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, reprehenderit nisi temporibus perferendis fugit quasi cumque laborum similique porro optio sed hic in itaque quas molestias tempora ducimus eaque at.</p>

                  </div>


              </div>

              <div className='px-10'>

                <h1 className='text-xl font-bold py-5'>Recent Post</h1>

                <div>

                    <div className='flex gap-3 py-3'>
                      <img src={blogpic} className='w-[40%]' alt="blogs" />
                      <div>
                        <NavLink to='/blog' className='text-md font-bold'>Blog Title 1</NavLink>
                        <p className='text-gray-700'>15 June, 2023</p>
                      </div>
                      

                    </div>



                    <div className='flex gap-3'>
                      <img src={blogpic} className='w-[40%]' alt="blogs" />
                      <div>
                        <NavLink to='/blog' className='text-md font-bold'>Blog Title 2</NavLink>
                        <p className='text-gray-700'>15 June, 2023</p>
                      </div>
                      

                    </div>


                </div>


                
              </div>


            </div>

            


          </div>





        </div>

 
<Footer/>

    </>
  )
}

export default BlogSingle