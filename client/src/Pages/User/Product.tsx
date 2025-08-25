// import React from 'react'
import phone from "../../assets/phone.png";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdShareAlt } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { RiTruckLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { productapi } from "../../Api";
import { useEffect, useState } from "react";

const Product = () => {

    interface Product {
    _id : String , 
    name : String ,
    price :number ,
    discount :number ,
    quantity :Number ,
    available : Boolean ,
    image : String[] ,
    colors :String[],
    rating : Number[] ,
    category :String ,
    subcategory : string ,
    createdAt :String ,
    updatedAt :String ,

  }

  const { id } = useParams()

  const [data , setdata] = useState<null | Product>(null)

  const fetchdata = async ()=>{
    try {
      
      const res =await productapi.get(`/${id}`)

      setdata(res.data)

    } catch (error) {
      
    }
  }


  useEffect(() => {
  fetchdata()
  }, [])
  

  return (<>
   {data ? 
     <div className="w-full h-[calc(100vh-4rem)]  px-0 py-4 overflow-y-scroll no-scrollbar">
         <div className=" h-auto md:flex-row md:justify-evenly md:px-15  w-full py-2 bg-white  flex flex-col  items-center">
        <img src={phone} alt="" className=" w-4/5 md:w-80 justify-self-center" />

        <div className="flex gap-2 my-5 py-0 flex-wrap w-full px-10 justify-center">

          {data.colors.map((itm)=>{
            return  <button className={` w-8 h-8 rounded-full`} style={{backgroundColor:`${itm}`}} ></button>
          })}

         
        
        </div>

        <div className="flex px-5  md:flex-col py-1 gap-2 w-full md:w-1/3   text-xl ">
          <button className="border-[2px] rounded w-1/2 md:w-full flex justify-center py-3 ">
            <IoIosHeartEmpty className="" />
          </button>
          <button className="border-[2px] rounded w-1/2 md:w-full flex justify-center py-3 ">
            <IoMdShareAlt className="" />
          </button>
        </div>
      </div>

      <div className="bg-white my-3 px-5 py-2">
        <p className="text-xl font-semibold  py-3">
        {data.name}
        </p>

        <div className="flex items-center gap-4 px-3 py-2">
          <div className="flex">
            {" "}
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`${i < 4 ? "text-green-600" : "text-gray-300"}  `}
              >
                <FaStar />
              </span>
            ))}{" "}
          </div>

          <p className="text-blue-700 font-semibold">Good</p>

          {data.rating.length>0 ? <p className="text-blue-500">{data.rating.length}ratings</p> :""}
        </div>




        <div className="flex items-center my-0 gap-3 px-3">
        <div className="flex items-center text-green-600">
          {data.discount > 0 ? (
            <>
              <span>
                <FaArrowDown />
              </span>
              <span>{data.discount} %</span>
            </>
          ) : (
            ""
          )}
        </div>

        {data.discount > 0 ? (
          <span className="line-through text-gray-600 font-semibold">
            ₹{data.price}
          </span>
        ) : (
          ""
        )}

        <span className="font-bold text-xl">
          ₹{Math.floor(data.price - (data.price * data.discount) / 100)}
        </span>
      </div>


      </div>


      <div className="bg-white px-6 py-1 pb-20">
        <div className="flex items-center gap-2  py-1">
          <RiTruckLine  className="stroke-1 text-xl"/>
          <p className="font-bold">Express Delivery</p>
        </div>

        <p className="font-bold py-1">Delivery within 2days</p>
      </div>


      <div className="fixed flex w-full justify-between border-t-[1.5px] border-neutral-300  bottom-0 left-0 ">
        <button className="w-1/2 flex justify-center py-4 text-[1.1rem] font-bold bg-white">
          Go to Cart
        </button>
        <button  className=" w-1/2 flex justify-center py-4 text-[1.1rem] font-bold bg-yellow-400">
          Add to Cart
        </button>
      </div>
    </div>
    :""}
  </>)
}

export default Product