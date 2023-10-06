import React from 'react'

const Featured = () => {
  return (
    <div className=' h-[600px] flex justify-center bg-[#50535A] text-white'>
        <div className='w-[1400px] flex items-center justify-center'>
            <div className=' flex flex-col gap-7'>
                <h1 className='text-4xl font-bold'>Find the perfect <i className=' font-light'>freelance</i> services for your business</h1>
                <div className=' flex items-center justify-between bg-white rounded'>
                    <div className=' flex items-center gap-2'>
                        <img className=' w-5 h-5 m-2.5' src="./img/search.png" alt="" />
                        <input className=' text-black p-3 w-[700px] outline-none' type="text" placeholder='Try "building mobile app"' />
                    </div>
                    <button className=' w-[120px] h-[50px] bg-gray-900 text-white'>Search</button>
                </div>
                <div className=' flex items-center gap-2'>
                    <span >Popular:</span>
                    <button className=' text-white bg-transparent border-[1px] border-solid border-white px-2 py-1 rounded-2xl text-sm'>Web Design</button>
                    <button className=' text-white bg-transparent border-[1px] border-solid border-white px-2 py-1 rounded-2xl text-sm'>Wordpress</button>
                    <button className=' text-white bg-transparent border-[1px] border-solid border-white px-2 py-1 rounded-2xl text-sm'>Logo Design</button>
                    <button className=' text-white bg-transparent border-[1px] border-solid border-white px-2 py-1 rounded-2xl text-sm'>AI Services</button>
                </div>
            </div>
            {/* <div className='right'>
                <img src="./img/man.png" alt="" />
            </div> */}
        </div>
    </div>
  )
}

export default Featured