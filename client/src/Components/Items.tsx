// import React from 'react'

interface itemtype {
    name:string,
    image:string,
    price:number
}

interface itemdatatype {
    itemdata :Array<itemtype>
}

const Items = ({itemdata}:itemdatatype) => {
  return (
    <div className='bg-neutral-100 mx-3 mb-4 py-3  flex justify-center lg:px-4 lg:justify-between md:justify-between md:px-4 flex-wrap'>
        {itemdata.map((itm,index)=>(
            <div key={index} className='  w-3/7 lg:w-[200px] md:w-[150px] flex flex-col items-center  my-2 bg-white rounded mx-2 py-2  '>
                <img src={itm.image} alt="" className='w-5/6 lg:w-[180px] ' />
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