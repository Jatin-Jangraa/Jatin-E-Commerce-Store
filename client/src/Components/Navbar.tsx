// import React from 'react'
import jatin from '../assets/jatin.png'
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import {  Link } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {

    const status:boolean = true ;

  return (
    <div className=" w-full h-16  flex items-center justify-between px-6 py-1 border-b-[1.3px] border-neutral-600  bg-white sticky top-0 z-10 ">

        
        <div className='flex  gap-1  lg:gap-2 items-center'>
           
            <Link to="/" className='size-max flex items-center'><img  src={jatin}alt="" className='h-12  lg:h15'/>
            <p className='  tracking-tight font-bold'>OnlineStore</p></Link>
        </div>


        <div className='w-1/3'> 
          <Link to={"/search"} className=' md:flex sm:flex lg:flex cursor-pointer justify-between  border-[1.5px]  border-black rounded-[8px] px-2 w-full py-1 hidden ' >
            <span> Search Product Here. </span> <IoMdSearch className="text-2xl" />
            </Link>
        </div>


        <div className='flex items-center gap-7'>


          {
            status===true?
            <Link to="/profile" className='  flex items-center gap-2 '>
             <FaRegUserCircle className='text-3xl'/>   
             <p>Profile</p>
            </Link>
            :
            <Link to="/login" className='  flex items-center gap-2 '>
             <FaRegUserCircle className='text-3xl'/>   
             <p>Login</p>
            </Link>
          }

            

            


            <Link to="/cart" className=' flex gap-3 items-center'>
               <div className='relative '> 
                 <MdOutlineShoppingCart className='text-4xl'/> 
                 <span className='absolute bottom-4 left-8 '>1</span> 
                 </div> 
             <p className='hidden sm:block'>Cart</p>
            </Link>

        </div>

    </div>
  )
}

export default Navbar