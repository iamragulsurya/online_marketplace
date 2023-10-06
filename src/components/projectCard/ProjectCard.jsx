import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({item}) => {
  return (
    <Link to="/">
    <div className=' w-[300px] h-[300px] text-white rounded-md shadow-2xl overflow-hidden'>
        <img className=' w-full h-3/4 object-cover' src={item.img} alt="" />
        <div className=" flex items-center p-4">
            <img className=' w-[40px] h-[40px] rounded-full object-cover' src={item.pp} alt="" />
            <div className="texts">
                <h2 className=' text-xs font-semibold text-black px-3'>{item.cat}</h2>
                <span className=' text-xs font-medium text-black px-3'>{item.username}</span>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default ProjectCard