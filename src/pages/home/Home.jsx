import React from 'react'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slide/Slide'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import { cards } from '../../data'
import CatCard from '../../components/catCard/CatCard'
import ProjectCard from '../../components/projectCard/ProjectCard'
import { projects } from '../../data'

const Home = () => {
  return (
    <div className='home'>
      <Featured />  
      <h1 className=' text-3xl text-gray-800 font-bold pl-20 mt-14'>Popular services</h1>
      <Slide slidesToShow={5} arrowsScroll={4}>
        {cards.map(card=>(
          <CatCard key={card.id} item={card}/>
        ))}
      </Slide>
      <div className=" bg-[#f1fdf7] flex justify-center py-24 ">
        <div className=" flex w-[1100px] items-center gap-8 justify-around">
          <div className=" flex flex-col gap-3">
            <h1 className=' font-bold text-3xl mb-2'>A whole world of freelance talents</h1>
            <div className=' flex items-center gap-2 text-gray-700 font-medium text-lg'>
              <img className=' inline w-6 h-6' src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p className=' font-light text-base text-gray-600'>
              Find the right service for every price point. No hourly rates, 
              just project-based pricing.
            </p>
            <div className=' flex items-center gap-2 text-gray-700 font-medium text-lg'>
              <img className=' inline w-6 h-6' src="./img/check.png" alt="" />
              Get quality work done quickly
            </div>
            <p className=' font-light text-base text-gray-600'>
            Hand your project over to a talented freelancer in minutes, get long-lasting results.
            </p>
            <div className=' flex items-center gap-2 text-gray-700 font-medium text-lg'>
              <img className=' inline w-6 h-6' src="./img/check.png" alt="" />
              Pay when you're happy
            </div>
            <p className=' font-light text-base text-gray-600'>
            Upfront quotes mean no surprises. Payments only get released when you approve.
            </p>
            <div className=' flex items-center gap-2 text-gray-700 font-medium text-lg'>
              <img className=' inline w-6 h-6' src="./img/check.png" alt="" />
              Count on 24/7 support
            </div>
            <p className=' font-light text-base text-gray-600'>
            Our round-the-clock support team is available to help anytime, anywhere
            </p>
          </div>
          <div className='flex flex-col gap-3'>
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>
      <div className=" bg-gray-900 flex justify-center py-24 text-white">
        <div className=" flex justify-around w-[1400px] items-center">
          <div className=" flex flex-col gap-3">
            <h1 className=' font-bold text-3xl mb-2'>Our <i>business</i></h1>
            <h1 className=' font-bold text-3xl mb-2'>A business solution designed for teams</h1>
            <p className=' font-light text-base text-white'>
              Upgrade to a curated experience packed with tools and benifits,
              dedicated to business
            </p>
            <div className=' flex items-center gap-2 text-white font-medium text-lg'>
              <img className=' inline w-6 h-6' src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>
            <div className=' flex items-center gap-2 text-white font-medium text-lg'>
              <img className=' inline w-6 h-6' src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className=' flex items-center gap-2 text-white font-medium text-lg'>
              <img className=' inline w-6 h-6' src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button className=' bg-[#1dbf73] py-2 px-5 rounded-md w-max'>Explore Business</button>
          </div>
          <div>
            <img className=' h-96' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png" alt="" />
          </div>
        </div>
      </div>
      <h1 className=' text-3xl text-gray-800 font-bold pl-20 mt-16'>Inspiring works</h1>
      <Slide slidesToShow={4} arrowsScroll={3}>
        {projects.map(card=>(
          <ProjectCard key={card.id} item={card}/>
        ))}
      </Slide>
    </div>
    
  )
}

export default Home