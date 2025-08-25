// import React from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import phone from '../assets/phone.png'

  interface Product {
    _id : String , 
    name : String ,
    price :number ,
    discount :number ,
    quantity: number ,
    available : Boolean ,
    image : String[] ,
    colors :String[],
    rating : Number[] ,
    category :String ,
    subcategory : string ,
    createdAt :String ,
    updatedAt :String ,

  }

interface itemtype{
    searchdata :Product[]
}







const Searchitem = ({searchdata}:itemtype) => {
  return (
    <div className=" md:h-[calc(98vh-4rem)] overflow-y-scroll no-scrollbar md:px-6">
        {searchdata.map((itm,index)=>(
            <div key={index} className="relative flex items-center border-b-[1.1px] border-neutral-400 justify-between">

                <img src={phone} alt="" className="h-37 py-2 " />


                <div className="w-4/7 flex flex-col justify-center pb-5  pl-1 ">
                    <p className="break-words tracking-tight text-wrap font-semibold text-xl">{itm.name}</p>
                    
                    
                    <div className="flex gap-3 items-center">
                        <div className="flex"> {Array.from({length:5}).map((_,i)=>(<span key={i} className={`${i<5?"text-green-600" :"text-gray-300"}  ` }><FaStar/></span>))}  </div>
                        {itm.quantity > 1   ?<div className="flex items-center"><FaShieldAlt/><p className="text-blue-900 font-semibold italic" >Assured</p></div>:""}
                    </div>


                   <div className="flex items-center my-0 gap-3">
                    <div className="flex items-center text-green-600">
                        {itm.discount >0?<><span><FaArrowDown/></span>
                        <span>{itm.discount} %</span></>
                        :""}
                    </div>

                    {itm.discount>0?<span className="line-through text-gray-600 font-semibold">₹{itm.price}</span>:''}

                    <span className="font-bold">₹{Math.floor((itm.price - (itm.price * itm.discount /100 ))) }</span>
                    
                    </div>
                </div>


                <button className=" text-[1.6rem]  pr-4 "><IoIosHeartEmpty/></button>
            </div>
        ))}
    </div>
  )
}

export default Searchitem