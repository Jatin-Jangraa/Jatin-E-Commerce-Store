// import React from 'react'
// import { motion } from 'framer-motion'

// import { useState } from 'react'
// import { useEffect } from 'react'
// import { dashapi } from '../../../../Api'
// import { useSelector } from 'react-redux'
import Sidebar from '../../../Components/Sidebar'
import BarChart from '../../../Components/Charts/BarChart'


const Bar = () => {

//     const {user} = useSelector((state)=>state.user.user) 
  


//   const [apidata ,setapidata] = useState(null)
// console.log(apidata);


const chartdata = {
  label: ['Food', 'Rent', 'Travel', 'Shopping', 'Others',"etc"],
  number:[3000, 12000, 50, 7000, 2000,1000],
  color : [ '#36A2EB', '#FFCE56','#FFCE56','#4BC0C0','#9966FF','#FF6384']
}




  // const datafun = async () => {
  
  //     try {
  
  //       const res = dashapi.post("/bar",{userid:user._id})
  
  
  //       setapidata((await res).data.charts)
  
  
  
  //     } catch (error) {
  
  //     }
  //   }
  
  
  //   useEffect(() => {
  
  //     datafun()
  
  
  
  //   }, [])





  return (
    <div className='w-full h-[calc(100vh-4rem)] lg:flex  overflow-y-scroll no-scrollbar'>
        <Sidebar/>
   
         <div className='adminbox  lg:px-10 lg:py-10 px-3 flex flex-col gap-10 pb-10 w-full bg-amber-200  lg:w-[calc(100vw-17.5rem)] h-full   overflow-y-scroll no-scrollbar  py-4  '>

  {/* {apidata ? */}
     <div className='barbox' style={{background: '#f9f9f9'}}>
      <h2 style={{ textAlign: 'center' }}>Orders</h2>
      <BarChart chartdata={chartdata} />
    </div>
    {/* :""} */}


  {/* {apidata ? */}
     <div className='barbox' style={{background: '#f9f9f9'}}>
      <h2 style={{ textAlign: 'center' }}>Orders</h2>
      <BarChart chartdata={chartdata} />
    </div>
    {/* :""} */}


   {/* {apidata ? */}
     <div className='barbox' style={{background: '#f9f9f9'}}>
      <h2 style={{ textAlign: 'center' }}>Orders</h2>
      <BarChart chartdata={chartdata} />
    </div>
    {/* :""} */}

  



        </div>

      </div>
  )
}

export default Bar;




// chartdata={
//   {label:[jan ,feb ,mar] ,number :[1,2,3] , colors:[a,s,d]}
// }