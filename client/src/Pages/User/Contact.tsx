

import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { motion } from 'framer-motion';
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
// import { contactapi } from '../../../Api';
// import { useSelector } from 'react-redux';
import { FaSnapchat } from "react-icons/fa";
// import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

//   const {user} = useSelector((state)=>state.user) 
  const [loading,setloading] = useState<boolean>(false)

//   const [formData, setFormData] = useState({ name: user?user.user.name:"", email: user? user.user.email:"", message: '' });

  const navigate = useNavigate()

//   useEffect(() => {
   

//     // setFormData({...formData,name: user?user.user.name:"", email: user? user.user.email:""})

//   }, [user])
  

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setloading(true)

//       if(!user){
//          navigate("/login")
//         toast.error("Please Login Before Contact .")
//         }

//     try {
//       await contactapi.post("/", formData);

//       toast.success('Message sent successfully!');
//       setFormData({ ...formData, message: '' });
//       setloading(false)
//     } catch {
//       alert('Failed to send message.');
//       setloading(false)

//     }
//   };

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col items-center  w-full overflow-y-scroll no-scrollbar">
     
        <div  className="border-[1.5px] md:my-18 contact-container bg-white p-10 w-[400px] rounded-xl relative my-3 "
        >
          <h2  className=' text-center mb-5 text-[#000] font-bold text-xl '>CONTACT US</h2>
          <form className="contact-form" onSubmit={()=>{"handlesubmit"}}> 
            {/* <input type="text" name="name"  placeholder="Name" required value={formData.name} onChange={handleChange} />  
            <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
            <textarea name="message" placeholder="Message..." rows="3" required value={formData.message} onChange={handleChange} /> */}
            

              <input className='contactclass' type="text" name="name"  placeholder="Name"  />  
            <input className='contactclass' type="email" name="email" placeholder="Email"  />
            <textarea className='contactclass' name="message" placeholder="Message..."   /> 
             
            <button className='w-full p-3 bg-[#9b0034] text-white border-0 rounded-xl font-bold cursor-pointer' type="submit" disabled={loading}> {loading?"Sending ...":"Send"}</button>
          </form>
        </div>
      
 <footer
     
       className="footer bg-[#0000005b] w-full text-white py-2 px-2">
      <div className="  h-auto  flex flex-col text-xl md:flex-row md:justify-between md:flex-wrap max-w-[100vw] m-auto w-full  text-center ">
        <div className="footer-left  my-4 mx-auto ">
          <h2 className=' text-[#ff0066] mb-2 font-semibold'>Jatin Ecommerce Store</h2>
          <p>We are trying to give you the all Best Products .</p>
          <p><em>We give attention to genuine feedback.</em></p>
          <p className="rights">All rights received @jatin_EcommerceStore</p>
        </div>

        <div className="footer-right  flex-1 max-w-40  self-center justify-center  my-4 mx-auto ">
          <h3 className='mb-2'>Follow Me .</h3>
          <div className="social-icons flex justify-center gap-4 ">
            <a  href="https://www.instagram.com/jatin_jangr.a?igsh=MTE5enczdnZzeGVnNw%3D%3D&utm_source=qr"><FaInstagram /></a>
            <a href="https://snapchat.com/t/N6lsQfWe"><FaSnapchat /></a>
            <a href="https://github.com/Jatin-Jangraa?tab=repositories"><FaGithub /></a>
          </div>
        </div>
      </div>
    </footer>
   
    </div>
  );
};

export default Contact;