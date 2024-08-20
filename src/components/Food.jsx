import React from 'react'
import {data} from '../data/Data'
import {useState} from 'react'

const Food = () => {



    const [food,setfood]=useState(data)

    const filtertype=(category)=>{
        setfood(
            data.filter((item)=>{
                return item.category===category
            })
        )
    }
    

    const filterprice=(price)=>{
            setfood(
                data.filter((item)=>{
                    return item.price===price
                })
            )
    }
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12 '>
        <h1 className='text-orange-500 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        <div className='flex flex-col lg:flex-row justify-between'>
            <div >
            <p className='font-bold text-gray-700'>Filter Type</p>
            <div className='flex justify-between flex-wrap'>
                <button onClick={()=>setfood(data)}className='hover:bg-orange-500 hover:text-white text-orange-500 border-orange-200 m-1'>All</button>
                <button onClick={()=>filtertype('burger')} className='hover:bg-orange-500 hover:text-white text-orange-500 border-orange-200 m-1'> burgers</button>
                <button onClick={()=>filtertype('pizza')} className='hover:bg-orange-500 hover:text-white text-orange-500 border-orange-200 m-1'>pizza</button>
                <button onClick={()=>filtertype('salad')}className='hover:bg-orange-500 hover:text-white text-orange-500 border-orange-200 m-1'>salads</button>
                <button onClick={()=>filtertype('chicken')} className='hover:bg-orange-500 hover:text-white text-orange-500 border-orange-200 m-1'>chicken</button>
            </div>
            </div>
            <div>
                <p className='font-bold text-gray-700'>filter price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button>$</button>
                    <button>$$</button>
                    <button>$$$</button>
                    <button>$$$$</button>
                </div>
            </div>
        </div>

        {/* display foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {
           food.map((item,index)=>(
                <div className='border shadow-lg hover:scale-105 duration-300 rounded-lg ' key={index}>
                    <img className='w-full h-[200px] object-cover rounded-t-lg'  src={item.image} alt="" />
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p>
                            <span className='bg-orange-500 text-white rounded-full p-2'>{item.price}</span>
                        </p>
                    </div>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Food