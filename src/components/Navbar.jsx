import React from "react";
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillBackspaceReverseFill, BsFillCartFill } from "react-icons/bs";
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends,FaWallet} from 'react-icons/fa'
import {MdHelp,MdFavorite} from 'react-icons/md'
import {useState} from 'react'

const Navbar = () => {

const [nav,setnav]= useState(false)

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left side */}
      <div className="flex items-center">
        <div onClick={()=>setnav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">pickup</p>
        </div>
      </div>

      <div
        className="bg-gray-200 rounded-full flex items-center px-2 w-[200px]
        sm:w-[400px] lg:w-[500px]"
      >
        <AiOutlineSearch size={20} />
        <input
          className=" bg-transparent p-2 focus:outline-none w-full"
          type="text"
          placeholder="search foods"
        />
      </div>
      {/* cart */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full ">
        <BsFillCartFill className="mr-2" size={20} />
        Cart
      </button>
      {/* mobile menu */}
      {
        nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0">

        </div> : ''
      }
      

      {/* side drawer menu */}
      <div className={nav ? 'w-[300px] fixed left-0 top-0 bg-white z-10 duration-300 h-screen' : 'w-[300px] fixed left-[-100%] top-0 bg-white z-10 duration-300 h-screen'}>
        <AiOutlineClose size={30} onClick={()=>setnav(false)} className='absolute right-4 top-4 cursor-pointer'/>
        <h2 className="text-2xl p-4">Best <span className="font-bold">Eats</span></h2>

        <nav>
            <ul className="flex flex-col p-4 text-gray-800">
                <li className="text-xl py-4 flex">
            <TbTruckDelivery size={25} color="#000" className="mr-4"/> Orders
                </li>
                <li className="text-xl py-4  flex">
            <MdFavorite size={25} className="mr-4"/> Favorites
                </li>
                <li className="text-xl py-4 flex">
            <FaWallet size={25} className="mr-4"/> wallet
                </li>
                <li className="text-xl py-4 flex">
            <MdHelp size={25} className="mr-4"/> Help
                </li>
                <li className="text-xl py-4 flex">
            <AiFillTag size={25} className="mr-4"/> Promotions
                </li>
                <li className="text-xl py-4 flex">
            <BsFillBackspaceReverseFill size={25} className="mr-4"/> Best Ones
                </li>
                <li className="text-xl py-4 flex">
            <FaUserFriends size={25} className="mr-4"/> Invite Friends
                </li>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
