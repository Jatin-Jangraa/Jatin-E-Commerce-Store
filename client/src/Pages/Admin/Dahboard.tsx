import React, { useEffect, useState } from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";

import { motion } from 'framer-motion';
// import { dashapi } from '../../../Api';
// import DualLineChart from '../../../components/Chart/Chart';
// import { useSelector } from 'react-redux';

import Sidebar from '../../Components/Sidebar'
import DualLineChart from '../../Components/Charts/Chart';

const Dashboard = () => {


  const sampledata = [
        { month: "jan" ,revenue: 10 , transactions: 20 },
        { month: "ja" ,revenue: 12 , transactions: 10 },
        { month: "jn" ,revenue: 16 , transactions: 22 },
        { month: "an" ,revenue: 11 , transactions: 24 },
        { month: "jaan" ,revenue:30 , transactions: 21 },
        { month: "jasn" ,revenue: 60 , transactions: 30 },
      ]

  

  // const {user} = useSelector((state)=>state.user.user) 




  // const [apidata, setapidata] = useState(null)
  // console.log(apidata);




  // const [data,setdata] = useState(null)



  // console.log(data);
  
  // const datafun = async () => {

  //   try {

  //     const res = dashapi.post("/stats",{userid:user._id})


  //     setapidata((await res).data.stats)

  //     setdata((await res).data.stats.chart)


  //   } catch (error) {

  //   }
  // }


  // useEffect(() => {

  //   datafun()



  // }, [])


  interface data {
    heading :string ,
    amount :number ,
    percent :number ,
  
    color :string ,
  }


  const Widget = ({ heading, amount, percent,  color }:data) => {
    return (
      <>
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}

          className="flex mb-2 justify-between items-center  lg:w-[12.5rem]  w-[18rem] py-3 h-auto  px-5 border rounded-xl bg-neutral-200">
          <div className="left-item">
            <p className="heading font-bold text-xl">{heading}</p>
            <div className="amount">
              <p className='font-semibold text-[1.2rem]'>{amount}</p>
            </div>

            {percent > 0 ? (
              <div className="percent flex items-center gap-1">
                <p className="color  text-green-500">
                  <FaArrowTrendUp />
                </p>
                <p className="color text-green-500">{percent}%</p>
              </div>
            ) : (
              <div className="flex">
                <p className="red text-red-500  ">
                  <FaArrowTrendDown />
                </p>
                <p className="red text-red-500">{percent}%</p>
              </div>
            )}
          </div>

          <div className="right-item  h-full flex items-center pr-5">
            {percent > 0 ? (
              <div
                className="outer h-[4.5rem] w-[4.5rem] bg-white rounded-full flex items-center justify-center"
                style={{
                  background: `conic-gradient(
                  ${color} ${(Math.abs(percent) / 100) * 360}deg,
                  rgb(255,255,255)0

                )`,
                }}
              >
                <div className="graph">{percent}%</div>
              </div>
            ) : (
              <div className="outer">
                <div className="graph">
                  <p>{percent}%</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </>
    );
  };







  return (
    <div className='w-full h-[calc(100vh-4rem)] lg:flex  overflow-y-scroll no-scrollbar'>

        <Sidebar/>

         <div className='adminbox w-full bg-amber-200  lg:w-[calc(100vw-17.5rem)] h-full flex flex-col overflow-y-scroll no-scrollbar  py-4 px-2 '>

        <div className='adminstats flex justify-evenly py-3 px-4 items-center h-auto gap-5 flex-wrap   '>

          

            <Widget heading="Revenue"
              amount={10}
              percent={20}
              color={'#FF6384'}
            />
            
             <Widget heading="Revenue"
              amount={10}
              percent={20}
              color={'#FF6384'}
            />

             <Widget heading="Revenue"
              amount={10}
              percent={20}
              color={'#FF6384'}
            />


             <Widget heading="Revenue"
              amount={10}
              percent={20}
              color={'#FF6384'}
            />





        </div>



        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className='h-auto w-full  justify-center bg-neutral-200 p-[1rem]  my-4 rounded-xl'>
          
          

          {/* {data? */}
          <DualLineChart  data={sampledata}/>
          {/* :<div>"Please Wait.."</div>} */}

        </motion.div>



      </div>

    </div>
  )
}

export default Dashboard













