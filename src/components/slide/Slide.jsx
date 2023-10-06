import React from 'react'
import Slider from 'infinite-react-carousel'


const Slide = ({children,slidesToShow,arrowsScroll}) => {
  return (
    <div className='flex flex-col pb-16'>
    <div className=' flex justify-center py-[20px] px-0'>
        <div className=" w-[90%]">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
            {children}
        </Slider>
        </div>
    </div>
    </div>
  )
}

export default Slide