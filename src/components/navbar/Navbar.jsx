import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)

  const {pathname} = useLocation()

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return ()=>{
      window.removeEventListener("scroll", isActive);
    }
  }, []);

  const currentUser = {
    id:1,
    username:"Ichigo",
    isSeller:true
  }

  return (

    <div className={active || pathname!=="/" ? 
      'flex flex-col items-center bg-white text-black transition-all duration-[0.5s] ease-in-out sticky top-0 z-[999]' : 
      'flex flex-col items-center bg-[#50535A] text-white transition-all duration-[0.5s] sticky top-0 z-[999]'}>
      <div className='w-[1400px] flex justify-between py-4'>
        <div className='font-bold text-2xl'>
          <Link to="/">
          <span className='text'>Marketplace</span>
          </Link>
          <span className='text-[#1dbf73]'>.</span>
        </div>
        <div className="flex gap-6 items-center font-semibold">
          <span>Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span >}
          {!currentUser && <button className='text-white px-4 py-1 border-white border-solid border-2 bg-transparent rounded-md hover:bg-[#1dbf73] hover:border-[#1dbf73]'>Join</button>}
          {currentUser && (   
            <div className=' flex items-center gap-3 cursor-pointer relative' onClick={()=>setOpen(!open)}>
              <img className=' w-8 h-8 rounded-full' src="https://i.pinimg.com/736x/86/4b/c7/864bc7750e6ea5d4650b54bcf5885d47.jpg" alt="" />
              <span>{currentUser?.username}</span>
              {open && <div className=' absolute top-10 right-0 p-5 bg-white border-solid border-gray-400 border-[1px] rounded-lg flex flex-col gap-2 text-gray-700 w-48 font-light'>
                {
                  currentUser?.isSeller &&  (
                    <>
                    <Link to="/mygigs">Gigs</Link>
                    <Link to="/add">Add New Gig</Link>
                    </>
                  )}
                <Link to="/orders">Orders</Link>
                <Link to="/messages">Messages</Link>
                <Link to="/logout">Logout</Link>
              </div>}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !=="/") && (
        <>
          <hr className=' w-full h-0 border-solid border-gray-400'/>
          <div className='w-[1400px] py-3 px-0 flex justify-between font-light text-gray-600 text-sm'>
          <Link className="" to="/">
              Graphics & Design
            </Link>
            <Link className="" to="/">
              Video & Animation
            </Link>
            <Link className="" to="/">
              Writing & Translation
            </Link>
            <Link className="" to="/">
              AI Services
            </Link>
            <Link className="" to="/">
              Digital Marketing
            </Link>
            <Link className="" to="/">
              Music & Audio
            </Link>
            <Link className="" to="/">
              Programming & Tech
            </Link>
            <Link className="" to="/">
              Business
            </Link>
            <Link className="" to="/">
              Lifestyle
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default Navbar