import  { useState, type ChangeEvent } from "react";
import { FaArrowLeft } from "react-icons/fa";
import phone from "../../assets/phone.png";
import { FaStar } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { RiTruckLine } from "react-icons/ri";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { AnimatePresence } from "framer-motion";
import {motion} from 'framer-motion'


interface address {
   flat: string,
    area:  string,
    Contactno:number,
    city: string,
    pincode:number,
    state:  string,
    country:  string,
}

const Cart = () => {

  
  const [isopen ,setopen] = useState<boolean>(false);
  const [loading,setloading] =useState<boolean>(false)
    const [paymentMethod, setPaymentMethod] = useState<"Online Payment" | "Cash on Delivery">("Online Payment");
//   const [loadingorder ,setloadingorder]= useState(false)

   const [address, setAddress] = useState<address>({
    flat: "",
    area:  "",
    Contactno:0,
    city: "",
    pincode:0,
    state:  "",
    country:  "",
  });


   const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleLocation = async () => {
    setloading(true)
  };



  return(
<div className=" w-full h-[calc(100vh-4rem)]  overflow-y-scroll no-scrollbar">

      {/* <div className='px-3 py-1'>

      <div className='flex items-center justify-between border-b-[1.2px] py-2'>
        <button className=' px-3 py-2'>
        <FaArrowLeft />
        </button>

        <div className='w-4/5 text-xl font-bold'>
          My Cart
        </div>
      </div>
      <div className='w-full flex flex-col items-center gap-10 my-10'>
      <img src={Carting} alt="" className='w-2/3'/>  

      <p className='font-bold text-2xl pt-5'>Your Cart is Empty !</p>    

      <button className='bg-blue-500 text-white font-semibold text-xl px-4 py-3 rounded-xl'>
        Shop Now
        </button>  

      </div>
    </div> */}


    


      <div className="px-3 pb-25 ">

        {/* top */}
        <div className="flex items-center justify-between border-b-[1.2px] py-2">
          <button className=" px-3 py-2">
            <FaArrowLeft />
          </button>

          <div className="w-4/5 text-xl font-bold">My Cart</div>
        </div>

        {/* set delivery */}
        <div className=" sm:px-30 flex justify-between items-center py-2 px-2 bg-neutral-200 my-2">
          <p className="font-semibold">Set Delivery Addrress</p>
          <button className="bg-blue-500 rounded text-white font-semibold  px-2 py-2"  onClick={ ()=>setopen(prev =>!prev)}>
            Enter Address
          </button>
        </div>


             <AnimatePresence>
            {isopen && (
              <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <motion.div className="modal-content" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                 
                 


                  <motion.div className="max-w-150 mx-auto my-[40px] p-[30px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 className="text-center mb-[20px] text-2xl">Shipping Information</h2>

      <form className="flex flex-col gap-[10px]" >
        <button type="button" onClick={handleLocation} className="bg-blue-500 text-white p-3 border-0 rounded-xl font-bold cursor-pointer  " disabled={loading}>
          {loading ? "Fetching..." : "Use Current Location"}
        </button>

        <label className="labelclass">Flat / Home / Building</label>
        <input className="inputclass" type="text" name="flat" value={address.flat} onChange={handleChange} />

        <label className="labelclass">Area / Locality</label>
        <input className="inputclass" type="text" name="area" value={address.area} onChange={handleChange} />

         <label className="labelclass">Contact No.</label>
        <input className="inputclass" type="number" name="Contactno" value={address.Contactno} onChange={handleChange} />


        <label className="labelclass">City</label>
        <input className="inputclass" type="text" name="city" value={address.city} onChange={handleChange} />

        <label className="labelclass">State</label>
        <input className="inputclass" type="text" name="state" value={address.state} onChange={handleChange} />

        <label className="labelclass">Country</label>
        <input className="inputclass" type="text" name="country" value={address.country} onChange={handleChange} />

        <label className="labelclass">Payment Method</label>
        <div className="flex gap-10">

          {300 >600 ?"": <label className="">
            <input
              type="radio"
              name="payment"
              value="Cash on Delivery"
              checked={paymentMethod === "Cash on Delivery"}
              onChange={() => setPaymentMethod("Cash on Delivery")}
            />
            Cash on Delivery
          </label>}

         
          <label>
            <input
              type="radio"
              name="payment"
              value="Online Payment"
              checked={paymentMethod === "Online Payment"}
              onChange={() => setPaymentMethod("Online Payment")}
            />
            Online Payment
          </label>
        </div>

        {/* {paymentMethod === "Online Payment" ? 
          // <RazorpayButton  amount={paymentamount} >  </RazorpayButton> 
""
          :
         <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} className="submit-btn" disabled={loadingorder}>
        {loadingorder ?"Please Wait ..." :`Confirm Order  ₹ ${"90"}`}
        </motion.button>} */}



       
      </form>
    </motion.div>

                 
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>


          {/* cartitem */}
        <div className="md:px-3   md:flex-row md:gap-5 md:mx-20 flex flex-col border rounded-xl px-4 py-2 my-4">

          <div className="md:w-3/3 md:py-3 ">
            <div className="flex gap-3">

          <div className=" flex flex-col items-center justify-center md:flex-row">
            <img
              src={phone}
              alt=""
              className="w-18 border md:w-30 border-neutral-400"
            />
            <div className="flex items-center  border rounded my-4 pl-1 md:ml-10">
              <span className="font-semibold">Qty:</span>
              <select
                name=""
                id=""
                className="0 font-semibold outline-0 border-0"
              >
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
              </select>
            </div>
          </div>

         <div className="pl-4">
            <div>
              <p className="font-bold">Phone </p>
              <p>One Plus</p>
              <div className="flex items-center gap-3">
                <div className="flex">
                  {" "}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`${
                        i < 4 ? "text-green-600" : "text-gray-300"
                      }  `}
                    >
                      <FaStar />
                    </span>
                  ))}{" "}
                </div>
                <p></p>
                <div className="flex items-center">
                  <FaShieldAlt />
                  <p className="text-blue-900 font-semibold italic">Assured</p>
                </div>
              </div>
            </div>

            <div className="flex items-center my-0 gap-3">
              <div className="flex items-center text-green-600">
                {/* {itm.dropingprice > 0 ? (
                  <> */}
                <span>
                  <FaArrowDown />
                </span>
                <span>{10} %</span>
                {/* </>
                ) : (
                  ""
                )} */}
              </div>

              {/* {itm.dropingprice > 0 ?  */}
              <span className="line-through text-gray-600 font-semibold">
                ₹{1000}
              </span>
              {/* ) : (
                ""
              )} */}

              <span className="font-bold">
                ₹{Math.floor(1000 - (1000 * 10) / 100)}
              </span>
            </div>
          </div>

          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <RiTruckLine className="text-xl " />
              <p className="font-bold">Express</p>
            </div>
            <p className="font-semibold text-neutral-500 text-sm">
              Delivery in 2 days
            </p>
          </div>
          </div>

          <div className="w-full md:w-1/3  flex justify-evenly mt-2 md:flex-col">
              <button className=" md:w-full flex items-center gap-1 justify-center border-[1.3px] border-neutral-500 rounded-xl w-[calc(50%-10px)] py-2  font-semibold"> <IoIosHeartEmpty />Save to Wishlist</button ><button  className="sm:w-full flex items-center gap-1 justify-center border-[1.3px] border-neutral-500 rounded-xl w-[calc(50%-10px)] py-2 font-semibold"><MdOutlineDeleteOutline/>Remove</button>
          </div>

        </div>



    {/* cartitem */}
        <div className="md:px-3   md:flex-row md:gap-5 md:mx-20 flex flex-col border rounded-xl px-4 py-2 my-4">

          <div className="md:w-3/3 md:py-3 ">
            <div className="flex gap-3">

          <div className=" flex flex-col items-center justify-center md:flex-row">
            <img
              src={phone}
              alt=""
              className="w-18 border md:w-30 border-neutral-400"
            />
            <div className="flex items-center  border rounded my-4 pl-1 md:ml-10">
              <span className="font-semibold">Qty:</span>
              <select
                name=""
                id=""
                className="0 font-semibold outline-0 border-0"
              >
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
              </select>
            </div>
          </div>

         <div className="pl-4">
            <div>
              <p className="font-bold">Phone </p>
              <p>One Plus</p>
              <div className="flex items-center gap-3">
                <div className="flex">
                  {" "}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`${
                        i < 4 ? "text-green-600" : "text-gray-300"
                      }  `}
                    >
                      <FaStar />
                    </span>
                  ))}{" "}
                </div>
                <p></p>
                <div className="flex items-center">
                  <FaShieldAlt />
                  <p className="text-blue-900 font-semibold italic">Assured</p>
                </div>
              </div>
            </div>

            <div className="flex items-center my-0 gap-3">
              <div className="flex items-center text-green-600">
                {/* {itm.dropingprice > 0 ? (
                  <> */}
                <span>
                  <FaArrowDown />
                </span>
                <span>{10} %</span>
                {/* </>
                ) : (
                  ""
                )} */}
              </div>

              {/* {itm.dropingprice > 0 ?  */}
              <span className="line-through text-gray-600 font-semibold">
                ₹{1000}
              </span>
              {/* ) : (
                ""
              )} */}

              <span className="font-bold">
                ₹{Math.floor(1000 - (1000 * 10) / 100)}
              </span>
            </div>
          </div>

          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <RiTruckLine className="text-xl " />
              <p className="font-bold">Express</p>
            </div>
            <p className="font-semibold text-neutral-500 text-sm">
              Delivery in 2 days
            </p>
          </div>
          </div>

          <div className="w-full md:w-1/3  flex justify-evenly mt-2 md:flex-col">
              <button className=" md:w-full flex items-center gap-1 justify-center border-[1.3px] border-neutral-500 rounded-xl w-[calc(50%-10px)] py-2  font-semibold"> <IoIosHeartEmpty />Save to Wishlist</button ><button  className="sm:w-full flex items-center gap-1 justify-center border-[1.3px] border-neutral-500 rounded-xl w-[calc(50%-10px)] py-2 font-semibold"><MdOutlineDeleteOutline/>Remove</button>
          </div>

        </div>

     
        

{/* Price details */}
        <div className=" sm:mx-20 border rounded-xl px-4 py-3">
          <p className="border-b border-dashed border-neutral-500 py-2 text-[1.2rem] font-bold">Price Details</p>
          <div className="flex justify-between py-1 font-semibold text-neutral-600 "><p >Price (1 item)</p> <p>₹9090</p></div>
          <div className="flex justify-between py-1 font-semibold text-neutral-600 "><p >Discount</p> <p>₹90</p></div>
          <div className="flex justify-between py-1 font-semibold text-neutral-600 "><p>Platform Fee (1 item)</p> <p>₹9090</p></div>

          <div className="border-t border-dashed border-neutral-500 flex justify-between py-1 font-bold text-[1.1rem] "><p >Total</p> <p>₹9090</p></div>

          
        </div>

{/* place order */}
        <div  className="fixed bottom-0 left-0 py-3 bg-white border-t-[1.4px] border-neutral-500 w-full flex justify-between px-7">
              <div>
                <p className="line-through text-neutral-500 font-semibold text-xs">9090</p>
                <p className="font-bold text-xl">₹9899</p>
              </div>

              <button className="bg-yellow-400 font-bold px-5  rounded-xl ">
                Place Order
              </button>
        </div>
       
      </div>
    

</div>
  ) 
  
};

export default Cart;
