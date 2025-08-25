import phone from '../assets/phone.png'

interface item {
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

interface props {
  items:Array<item>
}

const Category = ({items}:props) => {

  console.log(items);
  

  return (
    <div className="overflow-x-scroll   no-scrollbar px-2 mx-2 py-3 bg-white ">
      <div className="flex gap-4 lg:gap-12">
        {items.map((itm, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center min-w-[100px] cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              src={phone}
              // alt={category.name}
              className=" lg:h-30  object-cover rounded-[12px] border border-gray-300"
            />
            <span className="mt-1 text-xs text-center">{itm.subcategory}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category




