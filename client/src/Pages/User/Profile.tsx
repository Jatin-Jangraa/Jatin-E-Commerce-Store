
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import jatin from '../../assets/jatin.png'
import { FaBoxOpen } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { RiCustomerServiceLine } from "react-icons/ri";
// import { useDispatch, useSelector } from "react-redux";
// import { signOut } from "firebase/auth";
// import { auth } from "../../../Firebase.js";
// import { setUserinfo } from "../../../Redux/UserFeature";
// import { orderapi } from "../../../Api.js";
// import { FaInfoCircle } from "react-icons/fa";

function Profile() {

    const role:string ="admin" ; 

//   const { user } = useSelector((state) => state.user);
//   const [orders, setOrders] = useState([]);
//   const [selectedOrderId, setSelectedOrderId] = useState(null);
//   const dispatch = useDispatch();
  const navigate = useNavigate();

//   const apidata = async () => {
//     try {
//       const res = await orderapi.get(`/orders/${user ? user.user.uid : ""}`);
//       setOrders(res.data);
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//     }
//   };

//   useEffect(() => {
//     apidata();
//   }, []);

//   const handleLogout = () => {
//     const confirm = window.confirm("Confirm Logout");
//     if (confirm) {
//       signOut(auth);
//       dispatch(setUserinfo(null));
//       navigate("/login");
//     }
//   };

//   const userdata = {
//     role: `${user ? `${user.user.role}` : "user"}`,
//     name: `${user ?` ${user.user.name}` : "User"}`,
//     email: `${user ?` ${user.user.email}` : ""}`,
//     profilePic: `${
//       user ?` ${user.user.photo}` : "././src/assets/USer_Icon.png"
//     }`,
//   };

  return (
    <div className=" w-full h-[calc(100vh-4rem)] overflow-y-scroll no-scrollbar flex  justify-center ">
      <motion.div
        className=" max-w-[600px] h-auto m-5 mx-3 p-[20px] bg-neutral-200 rounded-xl "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Profile Header */}
        <motion.div
          className=" flex flex-col md:flex-row items-start md:items-center justify-evenly gap-[20px] border-b pb-[20px]"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {/* <img
            src={userdata.profilePic}
            alt="Profile"
            onError={(e) => {
              e.target.onError = null;
              e.target.src =
                "http://res.cloudinary.com/dhte80xl2/image/upload/v1751449436/ryske7khyuovbrrer6jf.png";
            }}
            className="profile-pic"
          /> */}
          <img src={jatin} className="w-20 h-auto rounded-full bg-cover" alt="" />
          <div className="flex md:w-[calc(100%-80px)] w-full items-center justify-between pr-8">
            <div>
              <h2 className="font-bold text-xl">jatin</h2>
              <p className="font-semibold">jatin12@gmail.com</p>
            </div>

            {role === "admin" ? (
              <motion.button
              className="py-2 px-3 bg-blue-500 cursor-pointer text-white font-semibold rounded-xl"
                onClick={() => {
                  navigate("/admin/dashboard");
                }}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1, backgroundColor: "#3498db" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h3>Admin</h3>
              </motion.button>
            ) : (
              ""
            )}
          </div>
        </motion.div>



              


        {/* Orders Section */}

         <div className=" flex  mt-8 flex-wrap gap-4 justify-center  py-3">

        <Link to="/orders" className="rounded w-4/5 flex items-center gap-3 justify-center border-[1.5px] py-2 text-xl"><FaBoxOpen/> Orders</Link>
        <Link to='/wishlist' className="rounded w-4/5 flex items-center gap-3 justify-center border-[1.5px] py-2 text-xl"><IoIosHeartEmpty/> Wishlist</Link>
        <Link to='/contact'  className="rounded w-4/5 flex items-center gap-3 justify-center border-[1.5px] py-2 text-xl"><RiCustomerServiceLine/> Contact Us</Link>
        {/* <div className="rounded w-4/5 flex items-center gap-3 justify-center border-[1.5px] py-2 text-xl"><RiCustomerServiceLine/> Issue </div> */}

        </div>
       

        {/* Logout Button */}
        <motion.button
          className="w-[100%] p-3 mt-7 border-0 bg-[#e5230d] text-white font-bold rounded-xl cursor-pointer "
          onClick={()=>{}}
          whileTap={{ scale: 0.99 }}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1, backgroundColor: "#e5230d" }}
          transition={{ type: "spring", stiffness: 400, damping: 5 }}
        >
          Logout
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Profile;