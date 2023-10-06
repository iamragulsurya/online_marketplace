import React from 'react'
import { Link } from 'react-router-dom'

const CatCard = ({item}) => {
  return (
    <Link to="/gigs?cat=design">
    <div className=' w-[252px] h-[344px] text-white rounded relative'>
        <img className=' w-full h-full object-cover' src={item.img} alt="" />
        <span className=' font-light absolute top-3 left-3'>{item.desc}</span>
        <span className=' font-medium text-xl absolute left-3 top-10'>{item.title}</span>
    </div>
    </Link>
  )
}

export default CatCard