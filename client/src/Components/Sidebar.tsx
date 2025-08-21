// import React from 'react'
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import { IoBarChart } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa";
import { useState } from "react";
// import { FaChartLine } from "react-icons/fa";
// import { FaStopwatch } from "react-icons/fa6";
// import { FaBitcoin } from "react-icons/fa";
// import { IoTicketOutline } from "react-icons/io5";

const Sidebar = () => {
  const navigate = useNavigate();

  const [isopen , setisopen] = useState<boolean>(false)

    const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '100%' },
  };

  const buttons = (
    <div className=" lg:border-r-[1.2px]  w-full h-full flex flex-col justify-evenly  pb-10 ">
      <div className="adminbuttoncom  w-full px-7 py-2 ">
        <h4 className="text-start w-full font-semibold">Main</h4>

        <div className="buttongroup  ">
          <motion.button
            onClick={() => {
              navigate("/admin/dashboard");
            }}
            // initial={{ x: -100, opacity: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            className={`flex items-center gap-3 font-semibold  border-[1.4px] rounded-xl mt-2 py-2 px-4 w-full  ${
              location.pathname.includes("/admin/dashboard")
                ? "bg-neutral-200"
                : "dashbutton"
            }`}
          >
            <MdDashboard />
            Dasboard
          </motion.button>
        </div>
      </div>


       <div className="adminbuttoncom  w-full px-7 py-2 ">
        <h4 className="text-start w-full font-semibold">Manage</h4>

        <div className="buttongroup  ">
          <motion.button
            onClick={() => {
              navigate("/admin/orders");
            }}
            // initial={{ x: -100, opacity: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            className={`flex items-center gap-3 font-semibold  border-[1.4px] rounded-xl mt-2 py-2 px-4 w-full  ${
              location.pathname.includes("/admin/orders")
                ? "box"
                : "dashbutton"
            }`}
          >
            <GrTransaction />
            Orders
          </motion.button>
        </div>

         <div className="buttongroup  ">
          <motion.button
            onClick={() => {
              navigate("/admin/products");
            }}
            // initial={{ x: -100, opacity: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            className={`flex items-center gap-3 font-semibold  border-[1.4px] rounded-xl mt-2 py-2 px-4 w-full  ${
              location.pathname.includes("/admin/products")
                ? "box"
                : "dashbutton"
            }`}
          >
            <AiOutlineProduct />
            Product
          </motion.button>
        </div>


         <div className="buttongroup  ">
          <motion.button
            onClick={() => {
              navigate("/admin/customers");
            }}
            // initial={{ x: -100, opacity: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            className={`flex items-center gap-3  font-semibold border-[1.4px] rounded-xl mt-2 py-2 px-4 w-full  ${
              location.pathname.includes("/admin/customers")
                ? "box"
                : "dashbutton"
            }`}
          >
            <FaUser />
            Customer
          </motion.button>
        </div>




      </div>


       <div className="adminbuttoncom  w-full px-7 py-2 ">
        <h4 className="text-start w-full font-semibold">Charts</h4>

        <div className="buttongroup  ">
          <motion.button
            onClick={() => {
              navigate("/admin/bar");
            }}
            // initial={{ x: -100, opacity: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            className={`flex items-center gap-3 font-semibold border-[1.4px] rounded-xl mt-2 py-2 px-4 w-full  ${
              location.pathname.includes("/admin/bar")
                ? "box"
                : "dashbutton"
            }`}
          >
            <IoBarChart />
            Bar Charts
          </motion.button>
        </div>

             <div className="buttongroup  ">
          <motion.button
            onClick={() => {
              navigate("/admin/pie");
            }}
            // initial={{ x: -100, opacity: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            className={`flex items-center gap-3 font-semibold  border-[1.4px] rounded-xl mt-2 py-2 px-4 w-full  ${
              location.pathname.includes("/admin/pie")
                ? "box"
                : "dashbutton"
            }`}
          >
            <FaChartPie />
            Pie Charts
          </motion.button>
        </div>


      </div>

        </div>
    
  );

  return (
    <div className=" relative h-13 w-full  lg:h-[calc(100vh-4rem)] lg:w-70">
      <span className="flex justify-between lg:hidden text-4xl h-full border-b items-center px-4" onClick={()=>{setisopen(true)}}>
        <IoMenu /> 
        <p className="text-xl">Dashboard</p>
      </span>



      <div className="hidden lg:block h-full">
        {buttons}
        </div>



         {/* <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className='adminchatrt'>
          
          

          {data?<DualLineChart  data={data}/>:<div>"Please Wait.."</div>}

        </motion.div> */}


         {isopen ?
         <div className=" absolute z-[10] border-0 top-0 right-0 h-[calc(100vh-8rem)] w-full  bg-neutral-200">
          
          <div className="w-full  flex items-center justify-between px-4 py-4 border-b">
            <p className="text-xl font-semibold">Admin Dashboard</p>
            <button className="text-4xl font-bold"
              onClick={() => setisopen(false)}>
             ✕
            </button>
          </div>

<div className="px-5 h-[80vh] bg-neutral-300">
          {buttons}
</div>
         </div>:""}

    </div>
  );
};

export default Sidebar;


