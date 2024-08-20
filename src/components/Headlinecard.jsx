import React from 'react'

const Headlinecard = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-3'>Sun's out, <br />BOGO'S out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='w-full object-cover max-h-[160px] md:max-h-[200px] rounded-xl' src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" />
        </div>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-3'>Sun's out, <br />BOGO'S out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='w-full object-cover max-h-[160px] md:max-h-[200px] rounded-xl' src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" />
        </div>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-3'>Sun's out, <br />BOGO'S out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='w-full object-cover max-h-[160px] md:max-h-[200px] rounded-xl' src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" />
        </div>
    </div>
  )
}

export default Headlinecard