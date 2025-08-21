// import React from 'react'

interface itm {
    name:string,
    image :string,
}

interface bestdatatype {
    name:string,
    items:itm[]
}

interface data {
    bestdata :bestdatatype
}


const Bestcateitems = ({bestdata}:data) => {
  return (
    <div className=' bg-neutral-100  my-7  mx-3 px-0 py-2 lg:py-3  lg:mx-4'>
        <h1 className="text-xl mx-3 py-2 font-bold lg:pb-2 ">{bestdata.name}</h1>
        <div className='flex gap-4 lg:gap-10 bg-neutrsl-300   w-full overflow-auto no-scrollbar'>
            {bestdata.items.map((cate,index)=>(
                <div key={index} className="min-w-[120px] rounded bg-white  lg:min-w-[180px]">
                    <img src={cate.image} alt="" className="pb-2 rounded" />
                    <p className="text-center font-semibold">{cate.name}</p>
                </div>
                ))}


        </div>

    </div>
  )
}

export default Bestcateitems