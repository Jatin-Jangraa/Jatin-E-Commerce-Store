// import React from 'react'
import { RxCross2 } from "react-icons/rx";
import jatin from "../../assets/jatin.png";
import { useState } from "react";
import shop from '../../assets/shop.png'

const Login = () => {

     const [isMail, setismail] = useState<boolean>(false);
     const[first,setfirst] =  useState<boolean>(false)

  return (
    <div className="w-full h-[calc(100vh-4rem)] overflow-y-scroll no-scrollbar pb-30">

          {/* top */}
      <div className="sm:hidden flex w-full justify-between border-b border-dashed py-3">
        <div className="flex items-center w-2/3 justify-end">
          <img src={jatin} alt="" className="w-10" />
          <p className="font-bold text-xl">Online Store</p>
        </div>

        <button className="  px-4">
          <RxCross2 className="text-xl stroke-1" />
        </button>
      </div>

      <div className="h-auto sm:flex sm:gap-0  justify-center sm:my-5">

      <div className=" box-border sm:py-0 sm:px-8 hidden sm:flex sm:justify-center flex-col sm:w-2/6 bg-blue-500">
      <p className="text-2xl font-semibold text-white pb-3">Login</p>
      <p className="font-semibold text-white ">Get Access to your Orders and Wishlist</p>

      <img src={shop} alt="" className="mt-10" />
      </div>

      <div className="px-7 sm:py-10 my-4 sm:my-0 sm:w-2/5 sm:border-2 border-blue-500 rounded-tr-2xl rounded-br-2xl sm: sm:h-full">
        <div className="py-2">
          <p className="text-xl font-semibold">
            Log in for the best experience
          </p>
          <p className="font-semibold text-sm text-neutral-600">
            {isMail ===true ? "Enter your Email ID to continue" :"Enter your Phone number to continue"}
          </p>
        </div>

        {isMail === false ? (
          <>
          <div>

           

            <div className="sm:text-[1rem] flex border px-3 py-3 text-xl   rounded-xl my-4 ">
              <p>+91</p>
              <input
                type="number"
                placeholder="Enter Phone No "
                className=" px-3 sm:w-5/5  border-0 outline-0 appearance-none phoneinput"
              />
            </div>

             {first ? 
            <div className="flex flex-col">
                <label className="font-semibold" > Name </label>
                <input type="text"  className=" border rounded-xl py-2 px-3"/>
            </div> :""}


            
          </div>

            <div className="flex flex-col pt-3">
                <label className="font-semibold" > Date of Birth </label>
                <input type="date"  className=" border rounded-xl py-2 px-3"/>
            </div>

            <div className="flex justify-end py-2">
              <button className=" text-end px-3 text-blue-600 font-bold"  onClick={()=>{setismail(true)}}>
                Use Email-ID
              </button>
            </div>

             <div className="flex justify-end">
              <button className=" text-end px-3 text-blue-600 font-bold"  onClick={()=>{setfirst(prev => !prev)}}>
                {first ? "Sign in" :" New User"}
              </button>
            </div>

          </>
        ) : (
          <div>
            <div className="flex border px-3 py-3 text-xl   rounded-xl my-4 ">
              <input
                type="text"
                placeholder="Enter Email Address"
                className=" px-3 border-0 outline-0"
              />
            </div>

            <div className="flex justify-end">
              <button className="text-end px-3 text-blue-600 font-bold"  onClick={()=>{setismail(false)}}>
                Use Phone Number
              </button>
            </div>
          </div>
        )}


       

        <p className=" my-10 font-semibold text-sm text-neutral-500">
        By continuing,you confirm that you are above 19 years of age , and you agree to the <span className="text-blue-500">Terms of Use</span> and <span className="text-blue-500">Privacy Policy</span>
        </p>

         <div className="sm:flex sm:justify-center bg-white fixed bottom-0 border-t-[1.2px] border-dashed left-0 w-full py-4 px-4">
         <button className= " sm:w-3/4 bg-blue-500 text-white text-xl w-full py-3 font-bold rounded-xl ">
         Continue
         </button>
         </div>




      </div>

      </div>
    

    </div>
  )
}

export default Login