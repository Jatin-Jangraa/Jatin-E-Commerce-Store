// import React from 'react'
import phone from '../../assets/phone.png'
import Searchitem from '../../Components/Searchitem'

const Wishlist = () => {

        const searchdata = [
    {
      id:"1",
      name:"Motorola 5G",
      image:phone,
      rating:2,
      price:9889,
      dropingprice:10,
      assured:true,
    },
     {
      id:"1",
      name:"Motorola 5G",
      image:phone,
      rating:1,
      price:9889,
      dropingprice:10,
      assured:false,
    },
     {
      id:"1",
      name:"Motorola 5G",
      image:phone,
      rating:4,
      price:9889,
      dropingprice:0,
      assured:true,
    },
     {
      id:"1",
      name:"Motorola 5G",
      image:phone,
      rating:2,
      price:9889,
      dropingprice:10,
      assured:true,
    },
     {
      id:"1",
      name:"Motorola 5G",
      image:phone,
      rating:2,
      price:9889,
      dropingprice:10,
      assured:true,
    },
     {
      id:"1",
      name:"Motorola 5G",
      image:phone,
      rating:1,
      price:9889,
      dropingprice:10,
      assured:true,
    },
     {
      id:"1",
      name:"Motorola 5G",
      image:phone,
      rating:2,
      price:9889,
      dropingprice:10,
      assured:true,
    },
     {
      id:"1",
      name:"Motorola 5G",
      image:phone,
      rating:2,
      price:9889,
      dropingprice:10,
      assured:true,
    },
     {
      id:"1",
      name:"Motorola 5G",
      image:phone,
      rating:1,
      price:9889,
      dropingprice:10,
      assured:true,
    },
  ]

  return (
    <div className="w-full h-[calc(100vh-4rem)] overflow-y-scroll no-scrollbar">
              <div className="border-b-[1.5px] py-3 border-neutral-500">
            <p className="text-xl font-semibold text-center">My Wishlist (20)</p>
        </div>

        <div>
            <Searchitem searchdata={searchdata}/>
        </div>
    </div>
  )
}

export default Wishlist