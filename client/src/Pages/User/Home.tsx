// import type React from "react"
import phone from '../../assets/phone.png'
import phone1 from '../../assets/phone1.png'
import air from '../../assets/air.png'
import imgphone from '../../assets/imgphone.png'
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom"
import Bestcateitems from '../../Components/Bestcateitems';
import Category from '../../Components/Category';
import ImageSlider from '../../Components/ImageSlider';
import Items from '../../Components/Items';
import { productapi } from '../../Api';
import { useEffect, useState } from 'react';


const Home = () => {


  interface Product {
    _id : String , 
    name : String ,
    price :number ,
    discount :number ,
    quantity :Number ,
    available : Boolean ,
    image : String[] ,
    colors :String[],
    rating : Number[] ,
    category :String ,
    subcategory : string ,
    createdAt :String ,
    updatedAt :String ,

  }


  interface itemcate {
    name :string ,
    items :Product[]
  }







  const slides = [
  { id: 1, image: air },
  { id: 2, image: imgphone },
  { id: 3, image:air },
];




const [itemdata , setdata] = useState< null | Product[]>(null);
const [catedat , setcatedat] = useState <null | itemcate[]>(null) 
const [subcate ,setsubcate] = useState <null | Product[]>(null)

console.log(subcate);



const catedata = async () =>{

  try {
    
    const res = await productapi.get('/allsubcate')

    setsubcate(res.data)

  } catch (error) {
    
  }

}


const fetchdata = async ()=>{
  try {  
  const res = await productapi.get("/all")
    setdata(res.data)
  } catch (error) {
    
  }
}





const getdata = async () =>{

  try {
    
    const res = await productapi.get("/itemcate")

    setcatedat(res.data)

  } catch (error) {
    
  }



}


useEffect(() => {

  fetchdata() ;
  getdata();
  catedata()

}, [])


  return (
    <div className="w=full h-[calc(100vh-4rem)] bg-neutral-200 overflow-y-scroll no-scrollbar">
      
<Link to="/search"  className=" bg-white flex cursor-pointer border-[1.3px] border-black outline-0 rounded-[8px] my-3 py-2 px-6 mx-3 w-[93%]  justify-self-center items-center justify-between sm:hidden ">
 <span> Search Product Here. </span> <IoMdSearch className="text-2xl" />
</Link>
        


{subcate ? 
<Category  items={subcate} />
:""}


<ImageSlider slides={slides}/>



{catedat ? 
 
 <>
 {catedat.map((bestdata)=>{
    return (
      <Bestcateitems bestdata={bestdata}/>
    )
 })}
 </>

:""}


{/* <Bestcateitems bestdata={bestdata}/> */}

{/* <Bestcateitems bestdata={catedata}/> */}

{/* <Bestcateitems bestdata={sportsdata}/> */}


{itemdata ? 
<Items itemdata = {itemdata}/>
:""}

    </div>

  )
}

export default Home