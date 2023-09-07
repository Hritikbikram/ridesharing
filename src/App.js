import React from 'react'
import { Route, Routes } from 'react-router'
import RouteLayouts from './Pages/RouteLayouts'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Blogs from './Pages/Blogs'
import Two from './Pages/Two'
import BlogSingle from './Pages/BlogSingle'
import ServiceDetails from './Pages/ServiceDetails'
import DriverDetails from './Pages/DriverDetails'
import Login from './Pages/Login'
import Partner from './Pages/Partner'
import DestinationPage from './Pages/DestinationPage'
import TravelGuide from './Pages/TravelGuide'
import Dashboard from './Admin/Admin-Pages/Dashboard'
import Destination from './Admin/Admin-Pages/Destination'
import Packages from './Admin/Admin-Pages/Packages'
import Guide from './Admin/Admin-Pages/Guide'
import Blogadmin from './Admin/Admin-Pages/Blog'
import Aboutadmin from './Admin/Admin-Pages/About'
import Contactadmin from './Admin/Admin-Pages/Contact'

const App = () => {
  return (
    <>
    
        <Routes>

        <Route path='/admin/dashboard' element={<Dashboard />}></Route>
        
        <Route path='/admin/destination' element={<Destination />}></Route>
        
        <Route path='/admin/package' element={<Packages />}></Route>
        
        <Route path='/admin/guide' element={<Guide />}></Route>
        
        <Route path='/admin/blogs' element={<Blogadmin />}></Route>
        
        <Route path='/admin/About' element={<Aboutadmin />}></Route>
        
        <Route path='/admin/contacts' element={<Contactadmin />}></Route>
        
          

          <Route path='/' element={<RouteLayouts />}>

            <Route path='/' element={<Home />}/>
            <Route path='/destination' element={<DestinationPage />}/>
            <Route path='/package' element={<Two />}/>
            <Route path='/guide' element={<TravelGuide />}/>
            <Route path='/partners' element={<Partner />}/>
            
            
            <Route path='/driver_details' element={<DriverDetails />}/>
            <Route path='/service_details' element={<ServiceDetails />}/>


            <Route path='/blog' element={<Blogs />}/>
           <Route path='/single_blog' element={<BlogSingle />} />

            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />}/>
            <Route path='/login' element={<Login />}/>


            

          </Route>




        </Routes>
    
    </>
  )
}

export default App