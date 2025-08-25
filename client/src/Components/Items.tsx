// import React from 'react'
import { useNavigate } from 'react-router-dom'
import phone from '../assets/phone.png'

interface itemtype {
    _id : String , 
    name : String ,
    price :number ,
    discount :Number ,
    quantity :Number ,
    available : Boolean ,
    image : String[],
    colors :String[],
    rating : Number[] ,
    category :String ,
    subcategory : string ,
    createdAt :String ,
    updatedAt :String ,
}

interface itemdatatype {
    itemdata : itemtype[]
}

const Items = ({itemdata}:itemdatatype) => {

    const navigate = useNavigate()

  return (
    <div className='bg-neutral-100 mx-3 mb-4 py-3  flex justify-center lg:px-4 lg:justify-evenly md:justify-between md:px-4 flex-wrap'>
        {itemdata.map((itm,index)=>(
            <div key={index} className=' cursor-pointer w-3/7 lg:w-[200px] md:w-[150px] flex flex-col items-center  my-2 bg-white rounded mx-2 py-2  ' 
            onClick={()=>navigate(`/product/${itm._id}`)}>   
                <img src={phone} alt="" className='w-5/6 lg:w-[180px] ' />
                <div className=" my-1 w-full flex flex-col justify-between px-2">
                    <p className=' break-words tracking-tight text-wrap h-auto font-semibold '>{itm.name}</p>
                    <p className=" break-words text-wrap h-auto font-semibold "> Rs.{itm.price}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Items