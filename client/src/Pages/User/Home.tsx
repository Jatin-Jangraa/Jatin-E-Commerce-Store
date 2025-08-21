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


const Home = () => {

   const bestdata ={
    name:"Best of Electronics",
    items:[
      {name:"Earbuds",
       image:phone,
      },
      {name:"Earbuds",
       image:phone,
      },
      {name:"Earbuds",
       image:phone,
      },
      {name:"Earbuds",
       image:phone,
      },
        {name:"Earbuds",
       image:phone,
      },
      {name:"Earbuds",
       image:phone,
      },
      {name:"Earbuds",
       image:phone,
      },
      {name:"Earbuds",
       image:phone,
      }
    ]
  }

   const catedata ={
    name:"Beauty,Food,Toys ",
    items:[
      {name:"Earbuds",
       image:phone1,
      },
      {name:"Earbuds",
       image:phone1,
      },
      {name:"Earbuds",
       image:phone1,
      },
      {name:"Earbuds",
       image:phone1,
      },
        {name:"Earbuds",
       image:phone1,
      },
      {name:"Earbuds",
       image:phone1,
      },
      {name:"Earbuds",
       image:phone1,
      },
      {name:"Earbuds",
       image:phone1,
      }
    ]
  }

   const sportsdata ={
    name:"Sports , Health Care & More ",
    items:[
      {name:"Earbuds",
       image:phone1,
      },
      {name:"Earbuds",
       image:phone1,
      },
      {name:"Earbuds",
       image:phone1,
      },
      {name:"Earbuds",
       image:phone1,
      },
        {name:"Earbuds",
       image:phone1,
      },
      {name:"Earbuds",
       image:phone1,
      },
      {name:"Earbuds",
       image:phone1,
      },
      {name:"Earbuds",
       image:phone1,
      }
    ]
  }


  const myitems =[
    {name:"jatin" , image: phone },
    {name:"abc" ,image:phone1},
    {name:"jatin" , image: phone },
    {name:"abc" ,image:phone1},
     {name:"jatin" , image: phone },
    {name:"abc" ,image:phone1},
    {name:"jatin" , image: phone },
    {name:"abc" ,image:phone1},
  ]

  const slides = [
  { id: 1, image: air },
  { id: 2, image: imgphone },
  { id: 3, image:air },
];

const itemdata =[

   {
    name:"phone",
    image:phone,
    price:10000,
  },
   {
    name:"phone",
    image:phone,
    price:10000,

  },
   {
    name:"phone",
    image:phone,
    price:10000,

  },
   {
    name:"phone",
    image:phone,
    price:10000,

  },
   {
    name:"phone",
    image:phone,
    price:10000,

  },
   {
    name:"phone",
    image:phone,
    price:10000,

  },
   {
    name:"phone",
    image:phone,
    price:10000,

  },
   {
    name:"phone",
    image:phone,
    price:10000,

  },
   {
    name:"phone",
    image:phone,
    price:10000,

  },
   {
    name:"phone",
    image:phone,
    price:10000,

  },

]


  return (
    <div className="w=full h-[calc(100vh-4rem)] bg-neutral-200 overflow-y-scroll no-scrollbar">
      
<Link to="/search"  className=" bg-white flex cursor-pointer border-[1.3px] border-black outline-0 rounded-[8px] my-3 py-2 px-6 mx-3 w-[93%]  justify-self-center items-center justify-between sm:hidden ">
 <span> Search Product Here. </span> <IoMdSearch className="text-2xl" />
</Link>
        

<Category  items={myitems} />

<ImageSlider slides={slides}/>


<Bestcateitems bestdata={bestdata}/>

<Bestcateitems bestdata={catedata}/>

<Bestcateitems bestdata={sportsdata}/>


<Items itemdata = {itemdata}/>

    </div>

  )
}

export default Home