import React from 'react'
import { Route, Routes } from 'react-router'
import RouteLayouts from './Pages/RouteLayouts'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Car from './Pages/Car'
import Riders from './Pages/Riders'
import Blogs from './Pages/Blogs'
import Two from './Pages/Two'
import BlogSingle from './Pages/BlogSingle'
import ServiceDetails from './Pages/ServiceDetails'
import DriverDetails from './Pages/DriverDetails'
import Login from './Pages/Login'

const App = () => {
  return (
    <>
    
        <Routes>

          <Route path='/' element={<RouteLayouts />}>

            <Route path='/' element={<Home />}/>
            <Route path='/cars' element={<Car />}/>
            <Route path='/bikes' element={<Two />}/>
            <Route path='/drivers' element={<Riders />}/>
            
            
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