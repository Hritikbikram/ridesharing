import React from 'react';
import dashlogo from '../Images/nepal.png'


const Header = () => {
  return (
    <>
    

        
      <img src={dashlogo} alt="Logo" />


        <div className=' px-1 py-10'>


          <a href="/admin/dashboard" className="font-semibold text-xl items-center rounded-lg text-gray-900 px-4 py-3 block
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                        <i className="fa-solid fa-table-columns"></i>
            <span className='px-3'>Dashboard</span>
          </a>
          


          <a href="/admin/destination" className="font-semibold text-xl items-center rounded-lg text-gray-900 px-4 py-3 block
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                        <i className="fa-solid fa-book-open"></i>
            <span className='px-3'>Destination</span>
          </a>
          

          


          <a href="/admin/package" className="font-semibold text-xl items-center rounded-lg text-gray-900 px-4 py-3 block
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                        <i className="fa-solid fa-graduation-cap"></i>
            <span className='px-3'>Package</span>
          </a>
          

          


          <a href="/admin/guide" className="font-semibold text-xl items-center rounded-lg text-gray-900 px-4 py-3 block
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                        <i className="fa-solid fa-chalkboard-user"></i>
            <span className='px-3'>Guide</span>
          </a>
          

          


          <a href="/admin/blogs" className="font-semibold text-xl items-center rounded-lg text-gray-900 px-4 py-3 block
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                        <i className="fa-solid fa-landmark"></i>
            <span className='px-3'>Blogs</span>
          </a>
          

          


          <a href="/admin/about" className="font-semibold text-xl items-center rounded-lg text-gray-900 px-4 py-3 block
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                        <i className="fa-solid fa-calendar"></i>
            <span className='px-3'>About</span>
          </a>
          
          


          <a href="/admin/contacts" className="font-semibold text-xl items-center rounded-lg text-gray-900 px-4 py-3 block
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                        <i className="fa-solid fa-table"></i>
            <span className='px-3'>Contacts</span>
          </a>
          
          


          <a href="/" className="font-semibold text-xl items-center rounded-lg text-gray-900 px-4 py-3 block
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                        <i className="fa-solid fa-square-poll-vertical"></i>
            <span className='px-3'>Logout</span>
          </a>
          


        </div>
    
    
    </>
  )
}

export default Header