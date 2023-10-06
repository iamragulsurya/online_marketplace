import React from 'react'
import { Link } from 'react-router-dom'

const GigCard = ({item}) => {
  return (
    <Link to="/gig/123">
    <div className='w-[324px] h-[350px] border-solid border-[1px] border-gray-400'>
        <img className=' w-full h-2/4 object-cover' src={item.img} alt="" />
        <div className=' py-[5px] px-[20px] flex flex-col gap-4'>
            <div className=" flex items-center gap-[10px]">
                <img className='w-[26px] h-[26px] rounded-full' src={item.pp} alt="" />
                <span>{item.user}</span>
            </div>
            <p className=' text-black'>{item.desc}</p>
            <div className=" flex items-center gap-[5px]">
                <img className='w-[14px] h-[14px]' src="https://png.pngtree.com/png-vector/20210407/ourmid/pngtree-black-star-vector-icon-clipart-png-image_3204301.jpg" alt="" />
                <span className=' font-bold text-sm text-[black]'>
                    <span>{item.ratings}</span>
                    <span className=' text-gray-500 font-normal'>  {'('+item.sales_volume+')'}</span>
                </span>
            </div>
        </div>
        <hr className=' h-0 border-[0.5px] border-solid text-gray-400' />
        <div className='px-[20px] flex items-center justify-between mt-1'>
            <img className=' w-[16px] h-[16px]' src="./img/heart.png" alt="" />
            <div className="price">
                <span className='text-normal font-semibold'>From ₹{item.price}</span>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default GigCard