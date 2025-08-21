




import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { useSelector } from 'react-redux';
import Sidebar from '../../Components/Sidebar';

const Transaction = () => {


    // const {user} = useSelector((state)=>state.user.user) 
  


  const statusOptions = ["Delivered", "Shipped", "Processing"];


 
  


  

//   const [data, setData] = useState(null);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [expandedRow, setExpandedRow] = useState(null);

//   const updateStatus = async (_id, newStatus) => {
//     const updated = data.map(item =>
//       item._id === _id ? { ...item, status: newStatus } : item
//     );
//     setData(updated);
//     setActiveDropdown(null);

//     try {
      
//       const res = await orderapi.put(`/${_id}`,{status :newStatus,userid:user._id})

//     } catch (error) {
      
//     }

//   };

//   const toggleExpand = (_id) => {
//     setExpandedRow(prev => (prev === _id ? null : _id));
//   };


//   const getdata = async () =>{

//     const res = await orderapi.post("/all",{userid:user._id})

// setData(res.data.allorder)
// // setData(initialData)


//   }



//   useEffect(() => {
//    getdata()



//   }, [])




// console.log(data);







  return (
      <div className='w-full h-[calc(100vh-4rem)] lg:flex  overflow-y-scroll no-scrollbar'>
      <Sidebar />

      <div className='adminbox  w-full bg-amber-200  lg:w-[calc(100vw-17.5rem)] h-full flex  overflow-y-scroll no-scrollbar  py-4 px-2 '>
        <div className="transaction-grid-container  w-full h-auto p-4">
          <h2 className="table-title text-xl text-center font-bold mb-5">Transactions</h2>

          <div className="grid-table flex flex-col  ">
            <div className="grid-header bg-[#f0f0f0]  font-semibold  grid grid-cols-4 lg:grid-cols-4 text-center p-[10px] border-b items-center">
              <div>Customer</div>
              <div>Amount</div>
              <div>Status</div>
              <div>Actions</div>
            </div>

            {/* {data?data.map((item, index) => ( */}
              <motion.div
                className="grid-row   grid grid-cols-4 lg:grid-cols-4 text-center p-[10px] border-b items-center justify-center "
                key={1}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 * 0.1 }}
              >
                <div className='transactionname font-semibold'>{"Jatin"}</div>
                <div>₹{1000}</div>
                <div className={`status-tag ${"Processing".toLowerCase()}`}>
                  {"Processing"}
                </div>
                <div className="action-cell  flex flex-col justify-center items-center lg:flex-row gap-3 justify-self-center ">
                  <button className="buttonclass manage  bg-[#dc3545] w-full flex justify-center items-center text-2xl " onClick={async() => {

                    //     const confirm = window.confirm("Confirm Delete Order")


                    //     if(confirm){

                    //    await orderapi.delete(`/${item._id}`,{data:{userid:user._id}});
                    //      getdata();
                        // }
                      }}>
                    <MdOutlineDeleteOutline />
                  </button>
                  <button className="buttonclass update  bg-[#ffc107] font-semibold px-2 w-full" onClick={() =>{}
                    // setActiveDropdown(prev =>
                    //   prev === item._id ? null : item._id
                    // )
                  }>
                    Update
                  </button>
                  {/* <button className="btn info" onClick={() => toggleExpand(item._id)}> */}
                  <button className="buttonclass info bg-[#007bff] text-white w-full flex items-center justify-center" onClick={() => {}}>

                    <FaInfoCircle />
                  </button>

                  {/* <AnimatePresence>
                    {activeDropdown === item._id && (
                      <motion.div
                        className="dropdown"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        {statusOptions.map(status => (
                          <div
                            key={status}
                            className="dropdown-item"
                            onClick={() => updateStatus(item._id, status)}
                          >
                            {status}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence> */}
                </div>

                {/* Expanded Info Section */}
                {/* <AnimatePresence>
                  {expandedRow === item._id && (
                    <motion.div
                      className="transaction-details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4>Order Info</h4>
                      <div><strong>Order ID:</strong> {item._id}</div>
                      <div><strong>Payment Mode:</strong> {item.paymentmode}</div>
                      <div><strong>Shipping Charges:</strong> ₹{item.shippingcharges}</div>
                      <div><strong>Subtotal:</strong> ₹{item.subtotal}</div>
                      <div><strong>Tax:</strong> ₹{item.tax}</div>
                      <div><strong>Total:</strong> ₹{item.total}</div>
                      <div><strong>Date & Time :</strong> {new Date(item.createdAt).toLocaleString()}</div>

                      <h4 style={{ marginTop: "10px" }}>Shipping Info</h4>
                      <div><strong>Contact No:</strong> {item.shippinginfo?.Contactno}</div>
                      <div><strong>Flat:</strong> {item.shippinginfo?.flat}</div>
                      <div><strong>Address:</strong> {item.shippingInfo?.address}</div>
                      <div><strong>City:</strong> {item.shippinginfo?.city}</div>
                      <div><strong>State:</strong> {item.shippinginfo?.state}</div>
                      <div><strong>Country:</strong> {item.shippinginfo?.country}</div>

                      <h4 style={{ marginTop: "10px" }}>Ordered Items</h4>
                      {item.orderitems?.map((product, idx) => (
                        <div key={idx} className="ordered-product">
                          <img src={product.image} alt={product.name} className="product-img" />
                          <div><strong>Name:</strong> {product.name}</div>
                          <div><strong>Size:</strong> {product.size}</div>
                          <div><strong>Quantity:</strong> {product.quantity}</div>
                          <div><strong>Price:</strong> ₹{product.price}</div>

                          {product.additional?.length > 0 && (
                            <div className="additional-section">
                              <strong>Additional Items:</strong>
                              <ul>
                                {product.additional.map((add, i) => (
                                  <li key={i}>
                                   {add.name}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence> */}
              </motion.div>
            {/* )):""} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;