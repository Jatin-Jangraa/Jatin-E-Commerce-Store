// import React from 'react'
import { useEffect, useState, type ChangeEvent } from 'react';
import phone from '../../assets/phone.png'
import Searchitem from '../../Components/Searchitem';
import { GoSortDesc } from "react-icons/go";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import {motion,AnimatePresence, number} from 'framer-motion'
import { productapi } from '../../Api';

const Search = () => {


    interface Product {
    _id : String , 
    name : String ,
    price :number ,
    discount :number ,
    quantity :number ,
    available : Boolean ,
    image : String[] ,
    colors :String[],
    rating : Number[] ,
    category :String ,
    subcategory : string ,
    createdAt :String ,
    updatedAt :String ,

  }

  interface objecttype {
    search:string ,
    maxprice :number ,
    category:string,
    subcategory :string ,
    sort :string
  }

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

   const [openSheet,setOpenSheet] = useState<'sort'|"filter"|null>(null)

  const closeSheet = () => setOpenSheet(null);

  const [data , setdata ] = useState<null | Product[]>(null)
  const [searchfilter, setsearchfilter] =  useState< objecttype >({
    search:"" ,
    maxprice : Infinity ,
    category:"",
    subcategory :"" ,
    sort :"" ,
  }) 

  const  getdata = async () =>{

    try {
      
       const res = await productapi.get(`/search/?${searchfilter.category ? `category=${searchfilter.category}&` : ""}${searchfilter.search ? `name=${searchfilter.search}&` : ""}${searchfilter.maxprice ? `price=${searchfilter.maxprice}&` : ""}${searchfilter.sort ? `sort=${searchfilter.sort}&` : ""}`)

       setdata(res.data)

    } catch (error) {
      
    }

  }


  useEffect(() => {
  getdata()
  }, [searchfilter])
  


  return (
    <div className='w-full flex flex-col lg:flex-row h-[calc(100vh-4rem)]'>

        {/* {info} */}
            <div className='lg:w-2/8 pt-10 border-r bg-white px-5 flex flex-col items-center justify-center'>

                  <input
        type="text"
        placeholder="Search items..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none mb-4"
        onChange={(e)=>setsearchfilter({...searchfilter , search :e.target.value})}
      />

      {/* Sort and Filter Buttons */}
      <div className="w-full flex gap-4 mb-4  lg:hidden">
        <button
          onClick={() => setOpenSheet('sort')}
          className="flex-1 gap-2 flex items-center justify-center  bg-white border border-gray-300 rounded-md py-2 text-center shadow-sm"
        >
         <GoSortDesc/>Sort
        </button>
        <button
          onClick={() => setOpenSheet('filter')}
          className="flex-1 flex gap-2 items-center justify-center  bg-white border border-gray-300 rounded-md py-2 text-center shadow-sm"
        >
          <HiAdjustmentsHorizontal/>Filter
        </button>
      </div>

      <div className="hidden lg:flex flex-col">
        <div>
          <p className="mb-4">
            Sort By :
          </p>
           <div className="space-y-3">
                  <button className="w-full text-center   border-b-[1.2px]  pb-2 border-neutral-400" onClick={()=>{setsearchfilter({...searchfilter , sort :""})}}>Newest First</button>
                  <button className="w-full text-center  border-b-[1.2px]  pb-2 border-neutral-400" onClick={() =>{setsearchfilter({...searchfilter,sort :"asc"})}}>Price: Low to High</button>
                  <button className="w-full text-center  border-b-[1.2px]  pb-2 border-neutral-400" onClick={() =>{setsearchfilter({...searchfilter,sort :"dcs"})}}> Price: High to Low</button>
                </div>

        </div>

        <div className=" my-10">
          <p className="mb-1">
            Filter By :
          </p>
           <div className="space-y-3   w-full flex flex-col items-center">

                  <input type="range" name="" id=""  min={100} max={100000}  onChange={(e) =>setsearchfilter({...searchfilter , maxprice :Number(e.target.value)})}  className="w-3/4 my-2"/>
                 <p>{searchfilter.maxprice ==Infinity ? "":searchfilter.maxprice}</p>

                 <select name="" id="" className="w-full border-neutral-400 outline-1 rounded px-2 py-1">
                  <option value="">Main Category</option>
                  <option value="">Electronics</option>
                  <option value="">Furniture</option>
                 </select>

                  <select name="" id="" className="w-full border-neutral-400 outline-1 rounded px-2 py-1">
                  <option value="">Sub Category</option>
                  <option value="">Electronics</option>
                  <option value="">Furniture</option>
                 </select>

                 
                </div>

        </div>
      </div>


     </div>



         {/* Search Results */}
      <div className="space-y-3 lg:w-6/8  lg:overflow-y-scroll no-scrollbar  lg:h-full">
        
        {data ?
         <Searchitem searchdata={data}/>
      :"" }
       
      </div>



      
      {/* Bottom Sheet */}
      <AnimatePresence>
        {openSheet && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-transparent bg-opacity-40 backdrop-blur z-40"
              onClick={closeSheet}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Sliding Panel */}
            <motion.div
              className="fixed bottom-0 left-0 right-0 bg-neutral-300 rounded-t-xl p-5 z-50 shadow-lg"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold capitalize">
                  {openSheet} Options
                </h3>
                <button onClick={closeSheet} className="text-gray-500 text-xl">
                  ✕
                </button>
              </div>

              {/* Sheet Content */}
              {openSheet === 'sort' ? (
                <div className="space-y-3">
                  <button className="w-full text-right pr-10 border-b-[1.2px]  pb-2 border-neutral-400">Newest First</button>
                  <button className="w-full text-right pr-10 border-b-[1.2px]  pb-2 border-neutral-400">Price: Low to High</button>
                  <button className="w-full text-right pr-10 border-b-[1.2px]  pb-2 border-neutral-400">Price: High to Low</button>
                </div>
              ) : (
                <div className="space-y-3   w-full flex flex-col items-center">

                  <input type="range" name="" id=""  className="w-3/4 my-2"/>
                 <p>10000</p>

                 <select name="" id="" className="w-full border-neutral-400 outline-1 rounded px-2 py-1">
                  <option value="">Main Category</option>
                  <option value="">Electronics</option>
                  <option value="">Furniture</option>
                 </select>

                  <select name="" id="" className="w-full border-neutral-400 outline-1 rounded px-2 py-1">
                  <option value="">Sub Category</option>
                  <option value="">Electronics</option>
                  <option value="">Furniture</option>
                 </select>

                 
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>



            </div>


     

  
  )
}

export default Search