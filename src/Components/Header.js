import React, { useState } from 'react';
import logo from '../Images/brand.svg';
import { NavLink } from 'react-router-dom';


const Header = () => {

  
  const [isShow,setShow]=useState(false);

  return (
    
    
    <header >
    
    <div className='py-1 px-[10%] bg-gray-200 flex text-xl justify-end'>



      {/* {getEmail && getPassword?
      <div className='p-3'>
        <NavLink to="login" className='p-3 font-bold'>{getUsername}</NavLink>
        <NavLink to="/" onClick={()=> removeLogin()}
        
         >
          <i className="fa-solid fa-right-from-bracket text-red-800 hover:bg-red-500 hover:text-white hover:rounded-full p-3"></i>
        </NavLink>
        </div>
      :
        <NavLink to="login" className='p-3 pt-6'>Login</NavLink>
      } */}

      <NavLink to="login" className='p-3 pt-6'>Login</NavLink>



      


    </div>

  <div className='flex space-x-10 justify-evenly px-5 py-4 top-0 z-10'>

<div className='pl-9 py-4'>
<NavLink to='/' className="text-xl">
<img src={logo} alt="LOGO" />
</NavLink>

</div>










<div className='space-x-7 py-5 text-xl lg:hidden'>

<NavLink className="hover:text-orange-300 duration-200" to='/'>Home</NavLink>


<NavLink className="hover:text-orange-300 duration-200" to='/cars'>Car</NavLink>

<NavLink className="hover:text-orange-300 duration-200" to='/bikes'>Bikes</NavLink>



<NavLink className="hover:text-orange-300 duration-200" to='/drivers'>Drivers</NavLink>

<NavLink className="hover:text-orange-300 duration-200" to='/blog'>Blogs</NavLink>


<NavLink className="hover:text-orange-300 duration-200" to='/about'>About</NavLink>

<NavLink className="hover:text-orange-300 duration-200" to='/contact'>Contact</NavLink>



</div> 




<div className=' py-5 text-xl'>


</div>      


<div className='hidden lg:flex'>
<button onClick={()=>setShow(!isShow)}>

{isShow ? <i className="fa-regular fa-circle-xmark"></i> : <i className='fa-solid fa-bars'></i> } 

</button>
</div>

</div>

{isShow &&<div className='lg:flex lg:flex-col space-y-1 mt-1 hidden text-center' onClick={()=>setShow(false)}  >

<ul>

<li className='py-1 hover:text-orange-300 duration-200'>
<NavLink className="hover:text-orange-300 duration-200" to='/'>Home</NavLink>
</li>

<li className='py-1'>      
<NavLink className="hover:text-orange-300 duration-200" to='/car'>Cars</NavLink>
</li>


<li className='py-1'>
<NavLink className="hover:text-orange-300 duration-200" to='/bike'>Bikes</NavLink>
</li>



<NavLink className="hover:text-orange-300 duration-200" to='/driver'>Drivers</NavLink>

<li className='py-1'>      
<NavLink className="hover:text-orange-300 duration-200" to='/about'>About</NavLink>
</li>

<li className='py-1'>
<NavLink className="hover:text-orange-300 duration-200" to='/contact'>Contact</NavLink>
</li>

</ul>


</div> }
</header>
  
    
  )
}

export default Header