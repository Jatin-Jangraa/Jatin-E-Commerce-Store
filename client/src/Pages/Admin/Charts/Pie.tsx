import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Sidebar from '../../../Components/Sidebar'
import PieComponent from '../../../Components/Charts/PieChart'
// import PieChart from '../../../../components/Chart/PieChart'
// import PieComponent from '../../../../components/Chart/PieChart'

const Pie = () => {



    
const sampleData = [
  { name: 'Electronics', number: 30 },
  { name: 'Clothing', number: 25 },
  { name: 'Groceries', number: 20 },
  { name: 'Books', number: 15 },
  { name: 'Others', number: 10 },
]


// const [apidata ,setapidata] = useState(null)

// console.log(apidata);


// const getdata =async() =>{
//  try {
  
//   const res = await dashapi.post("pie",{userid:user._id})

//   setapidata(res.data.charts)

//  } catch (error) {
  
//  }
// }


// useEffect(() => {
// getdata()
// }, [])

  

  return (
    <div className='w-full h-[calc(100vh-4rem)] lg:flex  overflow-y-scroll no-scrollbar'>
        <Sidebar/>
   




        <div className='adminbox  lg:px-10 lg:py-10 px-3 flex flex-col gap-10 pb-10 w-full bg-amber-200  lg:w-[calc(100vw-17.5rem)] h-full   overflow-y-scroll no-scrollbar  py-4  '>


  {/* {apidata? */}
   <div className='lg:my-5 h-auto py-8 '> 
      <h2 className='piechartheading text-center font-semibold text-xl'>Orders Status</h2>
     
      <PieComponent  apidata={sampleData}/>
    </div>
    {/* :""} */}



   {/* {apidata? */}
   <div className='lg:my-5 h-auto py-8'> 
      <h2 className='piechartheading text-center font-semibold text-xl'>Orders Status</h2>
     
      <PieComponent  apidata={sampleData}/>
    </div>
    {/* :""} */}


     {/* {apidata? */}
   <div className='lg:my-5 h-auto py-8'> 
      <h2 className='piechartheading text-center font-semibold text-xl'>Orders Status</h2>
     
      <PieComponent  apidata={sampleData}/>
    </div>
    {/* :""} */}


     {/* {apidata? */}
   <div className='lg:my-5 h-auto py-8'> 
      <h2 className='piechartheading text-center font-semibold text-xl'>Orders Status</h2>
     
      <PieComponent  apidata={sampleData}/>
    </div>
    {/* :""} */}
       


        </div>


      </div>
  )
}

export default Pie