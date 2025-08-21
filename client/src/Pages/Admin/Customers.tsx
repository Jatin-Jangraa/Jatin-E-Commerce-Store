import React from 'react'
import { motion } from 'framer-motion'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from '../../Components/Sidebar';

const Customer = () => {







//   const [users,setusers] = useState(null);

// console.log(users);

//   const alluser = async ()=>{
//   try {
//       const res = await userapi.post("/alluser",{userid:user._id})


//       setusers(res.data.alluser)

//   } catch (error) {
    
//   }


//   }



//   useEffect(() => {
//     alluser()
  
   
//   }, [])
  


//   const deletehandler = async (uid) =>{
    
//     try {
//       const confirm = window.confirm("Are You Sure to Delete User Permanentally")


//     if(confirm){
//       const res = await userapi.delete(`/delete/${uid}`,{data:{userid:user._id}})

//       alluser()

//     }
//     } catch (error) {
//      console.log(error);
      
//     }

//   }




  return (
    <div className='w-full h-[calc(100vh-4rem)] lg:flex  overflow-y-scroll no-scrollbar'>
        <Sidebar/>
   
        <div className='adminbox  w-full bg-amber-200  lg:w-[calc(100vw-17.5rem)] h-full flex  overflow-y-scroll no-scrollbar  py-4 px-2 '>







    <div className="table-container w-[90%] max-w-[900px] m-auto mt-[40px] bg-[#fff] pt-5 px-7 rounded-xl  ">
      <h2 className="title text-center mb-5 font-bold">Customer List</h2>
      <div className="table-header  grid  grid-cols-2 lg:grid-cols-4  items-center text-center  justify-center py-2 border-b">
        <span>Photo</span>
        <span>Name</span>
        <span>Role</span>
        <span>Action</span>
      </div>

      
        <motion.div
          key={1}
          className="grid  grid-cols-2 lg:grid-cols-4  items-center  text-center  justify-center py-2 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 * 0.1 }}
        >
            <img className='w-10 h-[40px] rounded-full bg-cover justify-self-center' src="http://res.cloudinary.com/dhte80xl2/image/upload/v1751449436/ryske7khyuovbrrer6jf.png" alt="" />
          {/* <img src={user.photo} alt="profile" onError={(e)=>{e.target.onError = null; e.target.src ="http://res.cloudinary.com/dhte80xl2/image/upload/v1751449436/ryske7khyuovbrrer6jf.png"}} className="profile-pic" /> */}
          <span className='font-bold justify-self-center' >{"jatin12@gmail.com"}</span>
          <span className='justify-self-center'>{"Admin"}</span>
         <div className='justify-self-center'>
           <motion.button
            whileTap={{ scale: 0.9 }}
            className=" justify-self-center  userdelete-btn bg-[#ff4d4d]  text-white border-0 h-[45px] w-[45px] rounded-full flex items-center justify-center text-2xl "
            // onClick={()=>deletehandler(user.uid)  }
           onClick={()=>{}  }

            style={{justifySelf:"end"}}
          >
            <MdOutlineDeleteOutline/>
          </motion.button>
         </div>


        </motion.div>
      
    </div>
  



       
        </div>


      </div>
  )
}

export default Customer