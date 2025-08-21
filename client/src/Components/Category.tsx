

interface item {
  name:string,
  image:string
}

interface props {
  items:Array<item>
}

const Category = ({items}:props) => {
  return (
    <div className="overflow-x-scroll   no-scrollbar px-2 mx-2 py-3 bg-white ">
      <div className="flex gap-4 lg:gap-12">
        {items.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center min-w-[100px] cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              src={category.image}
              alt={category.name}
              className=" lg:h-30  object-cover rounded-[12px] border border-gray-300"
            />
            <span className="mt-1 text-xs text-center">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category




