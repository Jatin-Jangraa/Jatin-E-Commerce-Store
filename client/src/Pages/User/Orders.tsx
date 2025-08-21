// import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa";
import phone from '../../assets/phone.png'
import { FaStar } from "react-icons/fa";

const Orders = () => {
  return (
    <div className="w-full h-[calc(100vh-4rem)]">
        
        <div className='flex justify-between items-center bg-neutral-100 px-5 py-3 border-b-[1.4px] border-dashed '>
            <div className=''>
                <FaArrowLeftLong className='text-xl '/>
            </div>

            <p className='text-xl font-bold'>My Orders</p>

            <div>
            <FaUserCheck className='text-xl'/>
            </div>
        </div>


        <div>

            <div className='flex justify-between md:justify-start md:gap-10 md:px-15  w-full px-5  border-b-[1.5px] border-neutral-400 py-3  '>
                
                <img src={phone} alt=""  className='h-30'/>

                <div className='w-4/6 px-2 md:flex md:items-center md:justify-between md:px-10'>
                    
                   <div className='md:h-full '>
                     <div className='py-2'>
                        <p className='text-[1.1rem] font-semibold'>Delived on 12/12/2025</p>
                        <p className='text-neutral-600 font-semibold'>Phone </p>
                    </div>



                     <div className="flex"> {Array.from({length:5}).map((_,i)=>(<span key={i} className={`${i<3?"text-green-600" :"text-gray-300"}  ` }><FaStar/></span>))}  </div>
                   </div>
                        
                    
                    <p className='py-2 pt-3'>Raise an issue ?</p>


                </div>



            </div>


            {/*  */}
             <div className='flex justify-between md:justify-start md:gap-10 md:px-15  w-full px-5  border-b-[1.5px] border-neutral-400 py-3  '>
                
                <img src={phone} alt=""  className='h-30'/>

                <div className='w-4/6 px-2 md:flex md:items-center md:justify-between md:px-10'>
                    
                   <div className='md:h-full '>
                     <div className='py-2'>
                        <p className='text-[1.1rem] font-semibold'>Delived on 12/12/2025</p>
                        <p className='text-neutral-600 font-semibold'>Phone </p>
                    </div>



                     <div className="flex"> {Array.from({length:5}).map((_,i)=>(<span key={i} className={`${i<3?"text-green-600" :"text-gray-300"}  ` }><FaStar/></span>))}  </div>
                   </div>
                        
                    
                    <p className='py-2 pt-3'>Raise an issue ?</p>


                </div>



            </div>




        </div>
    </div>
  )
}

export default Orders