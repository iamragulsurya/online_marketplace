import React, { useState } from 'react'
import {gigs} from '../../data'
import GigCard from '../../components/gigCard/GigCard'
import { sort_score } from '../../algorithm.js'

const Gigs = () => {

  const [open, setOpen] = useState(false)
  const [sort, setSort] = useState("sales")

  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }

  const sorted_score=sort_score(gigs)

  console.log(sort_score)

  return (
    <div className=' flex justify-center'>
      <div className=" w-[1400px] py-7 flex flex-col gap-4">
        <span className=' text-sm font-light text-[#555]'>GRAPHICS & DESIGN</span>
        <h1 className=' text-xl font-bold'>AI Artists</h1>
        <p className=' text-[#999] font-light text-sm'>
          Explore the boundaries of art and technology with AI artists
        </p>
        <div className=" flex items-center justify-between">
          <div className=" flex items-center gap-[10px] text-[#555] font-light">
            <span>Budged</span>
            <input className=' p-1 border-[1px] border-solid border-gray-300 outline-none' type="text" placeholder='min'/>
            <input className=' p-1 border-[1px] border-solid border-gray-300 outline-none' type="text" placeholder='max'/>
            <button className=' bg-[#1dbf73] text-white font-medium py-[5px] px-[15px] rounded'>Apply</button>
          </div>
          <div className=" flex items-center gap-[10px] relative">
            <span className=' text-[#555] font-light'>SortBy</span>
            <span className=' font-medium text-sm'>{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <img className='w-[15px] cursor-pointer' src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
            <div className=" p-5 bg-white rounded border-[.5px] border-solid border-gray-400 absolute top-7 right-0 flex flex-col gap-[20px] text-[#555]">
              {sort === "sales" ? (<span className=' cursor-pointer text-sm' onClick={() => reSort("createdAt")}>Newest</span>
              ) : (
              <span className=' cursor-pointer text-sm' onClick={() => reSort("sales")}>Best Selling</span>)}
            </div>
          )}
          </div>
        </div>
        <div className=" flex flex-wrap justify-between  gap-3 my-6">
          {sorted_score.map(gig=>(
            <GigCard key={gig.id} item={gig}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs