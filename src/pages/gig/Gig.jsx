import React from 'react'
import Slider from 'infinite-react-carousel'

const Gig = () => {
  return (
    <div className="gig flex justify-center">
      <div className="container w-[1400px] py-[30px] flex gap-12">
        <div className="left flex-[2_2_0%] flex flex-col gap-5">
          <span className='breadCrumbs font-light text-[13px] text-[#555]'></span>
          <h1 className=' text-xl font-bold'>I will create ai generated art at you</h1>
          <div className="user flex items-center gap-[10px]">
            <img className='pp w-[32px] h-[32px] rounded-full' src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/66cdc8b51689c17d7f2ae647e6529f40-1680208574592/8bf32cda-b894-44b9-a627-5e1da33747c3.JPG" alt="" />
            <span className=' text-[14px] font-medium'>Aizen</span>
            <div className="stars flex items-center gap-[5px]">
              <img className=' w-[14px] h-[14px]' src="/img/star.png" alt="" />
              <img className=' w-[14px] h-[14px]' src="/img/star.png" alt="" />
              <img className=' w-[14px] h-[14px]' src="/img/star.png" alt="" />
              <img className=' w-[14px] h-[14px]' src="/img/star.png" alt="" />
              <img className=' w-[14px] h-[14px]' src="/img/star.png" alt="" />
              <span className='text-[14px] font-bold text-[#ffc108]'>5</span>
            </div>
          </div>
          <Slider slidesT0Show={1} arrowsScroll={1} className='slider'>
            <img className=' max-h-[500px] object-contain' src="https://images.pexels.com/photos/6039245/pexels-photo-6039245.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <img src="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <img src="https://images.pexels.com/photos/5708069/pexels-photo-5708069.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          </Slider>
          <h2 className=' text-xl font-normal'>About This Gig</h2>
          <p className=' font-light text-[#555] leading-6'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea deserunt, 
            quia magnam dignissimos veniam excepturi corrupti enim. Porro iure aliquid 
            asperiores. Maiores vel harum molestiae temporibus hic ex ipsa quae.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea deserunt, 
            quia magnam dignissimos veniam excepturi corrupti enim. Porro iure aliquid 
            asperiores. Maiores vel harum molestiae temporibus hic ex ipsa quae.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea deserunt, 
            quia magnam dignissimos veniam excepturi corrupti enim. Porro iure aliquid 
            asperiores. Maiores vel harum molestiae temporibus hic ex ipsa quae.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea deserunt, 
            quia magnam dignissimos veniam excepturi corrupti enim. Porro iure aliquid 
            asperiores. Maiores vel harum molestiae temporibus hic ex ipsa quae.
          </p>
          <div className="seller mt-[20px] flex flex-col gap-5">
            <h2>About the Seller</h2>
            <div className="user flex items-center gap-5">
              <img className=' w-[100px] h-[100px] rounded-full object-cover' src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/66cdc8b51689c17d7f2ae647e6529f40-1680208574592/8bf32cda-b894-44b9-a627-5e1da33747c3.JPG" alt="" />
              <div className="info flex flex-col gap-3 ">
                <span>John Doe</span>
                <div className="stars flex items-center gap-[5px]">
                  <img className=' w-[14px] h-[14px]' src="/img/star.png" alt="" />
                  <img className=' w-[14px] h-[14px]' src="/img/star.png" alt="" />
                  <img className=' w-[14px] h-[14px]' src="/img/star.png" alt="" />
                  <img className=' w-[14px] h-[14px]' src="/img/star.png" alt="" />
                  <img className=' w-[14px] h-[14px]' src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button className=' bg-white rounded border-[1px] border-solid border-gray-700 px-[10px] py-[5px]'>Contact Me</button>
              </div>
            </div>
            <div className="box border-[1px] border-solid border-gray-500 rounded-md p-[20px] mt-[20px]">
              <div className="items flex flex-wrap justify-between">
                <div className="item w-[300px] flex flex-col gap-[10px] mb-5">
                  <span className='title font-light'>From</span>
                  <span className='desc'>India</span>
                </div>
                <div className="item w-[300px] flex flex-col gap-[10px] mb-5">
                  <span className='title font-light'>Member since</span>
                  <span className='desc'>Aug 2022</span>
                </div>
                <div className="item w-[300px] flex flex-col gap-[10px] mb-5">
                  <span className='title font-light'>Avg, response time</span>
                  <span className='desc'>4 hours</span>
                </div>
                <div className="item w-[300px] flex flex-col gap-[10px] mb-5">
                  <span className='title font-light'>Last delivery</span>
                  <span className='desc'>1 day</span>
                </div>
                <div className="item w-[300px] flex flex-col gap-[10px] mb-5">
                  <span className='title font-light'>Languages</span>
                  <span className='desc'>English</span>
                </div>
              </div>
              <hr />
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis ex sunt, delectus iusto in deserunt quae quia 
                  enim totam quo cupiditate hic eveniet veniam! Enim quam
                  sit praesentium dolorem laboriosam.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img src="" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="data:image/png;base64,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" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className=" flex">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
              </div>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis ex sunt, delectus iusto in deserunt quae quia 
                  enim totam quo cupiditate hic eveniet veniam! Enim quam
                  sit praesentium dolorem laboriosam.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img src="" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="data:image/png;base64,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" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className=" flex">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
              </div>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis ex sunt, delectus iusto in deserunt quae quia 
                  enim totam quo cupiditate hic eveniet veniam! Enim quam
                  sit praesentium dolorem laboriosam.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img src="" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="data:image/png;base64,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" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className=" flex">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
              </div>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis ex sunt, delectus iusto in deserunt quae quia 
                  enim totam quo cupiditate hic eveniet veniam! Enim quam
                  sit praesentium dolorem laboriosam.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right flex-[1_1_0%]"></div>
      </div>
    </div>
  )
}

export default Gig