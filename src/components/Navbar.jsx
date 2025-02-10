import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { HiDocumentMinus } from "react-icons/hi2";
import { HiMenu, HiX } from "react-icons/hi";



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className='w-full bg-black fixed z-10 pt-3'>
        <div className='m-auto bg-black w-full h-[60px] flex justify-around items-center'>
          <div className=''>
            <div className='logosvg'>
              <img className='' src="https://travila-nextjs-landing.vercel.app/assets/imgs/template/logo-w.svg" alt="" />
            </div>
          </div>
          <div className='hidden lg:flex text-white gap-3'>
            <div className='flex  cursor-pointer hover:text-amber-400' >
              <div>Home</div>
              <div className='mt-1.5'><RiArrowDropDownLine /></div>
            </div>
            <div className='flex cursor-pointer hover:text-amber-400' >
              <div>Tours</div>
              <div className='mt-1.5'><RiArrowDropDownLine /></div>
            </div>
            <div className='flex cursor-pointer hover:text-amber-400' >
              <div>Destinations</div>
              <div className='mt-1.5'><RiArrowDropDownLine /></div>
            </div>
            <div className='flex cursor-pointer hover:text-amber-400' >
              <div>Activities</div>
              <div className='mt-[5px]'><RiArrowDropDownLine /></div>
            </div>
            <div className='flex cursor-pointer hover:text-amber-400' >
              <div>Home</div>
              <div className='mt-[5px]'><RiArrowDropDownLine /></div>
            </div>
            <div className='flex cursor-pointer hover:text-amber-400' >
              <div>Hotel</div>
              <div className='mt-[5px]'><RiArrowDropDownLine /></div>
            </div>
            <div className='flex cursor-pointer hover:text-amber-400' >
              <div>Rental</div>
              <div className='mt-[5px]'><RiArrowDropDownLine /></div>
            </div>
            <div className='flex cursor-pointer hover:text-amber-400' >
              <div>Tickets</div>
              <div className='mt-[5px]'><RiArrowDropDownLine /></div>
            </div>
            <div className='flex cursor-pointer hover:text-amber-400' >
              <div>Pages</div>
              <div className='mt-[5px]'><RiArrowDropDownLine /></div>
            </div>
          </div>
          <div className=' hidden lg:flex text-white '>
            <div className='flex items-center' >
              <div className='text-xl text-green-500'><BiSupport /></div>
              <div>Support</div>
            </div>
            <div className='flex items-center mx-3' >
              <div className='text-xl text-[#E79614]'><HiDocumentMinus /></div>
              <div>Document</div>
            </div>
            <div>
              <button className='bg-[#313131] text-white rounded-4xl px-4 py-1'>Purchase Now </button>
            </div>
          </div>
          <button className=" lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

          {menuOpen && (
         <div className=" text-center  bg-black text-white py-3 px-5 lg:hidden">
            <div className='flex text-2xl ' >
              <div>Home</div>
              <div className='mt-1.5'><RiArrowDropDownLine /></div>
            </div>
            <div className='flex text-2xl' >
              <div>Tours</div>
              <div className='mt-1.5'><RiArrowDropDownLine /></div>
            </div>
            <div className='flex text-2xl' >
              <div>Destinations</div>
              <div className='mt-1.5'><RiArrowDropDownLine /></div>
            </div>
            <div className='flex text-2xl' >
              <div>Activities</div>
              <div className='mt-[5px]'><RiArrowDropDownLine /></div>
            </div>
            <div className='flex text-2xl' >
              <div>Home</div>
              <div className='mt-[5px]'><RiArrowDropDownLine /></div>
            </div>
            <div className='flex text-2xl' >
              <div>Hotel</div>
              <div className='mt-[5px]'><RiArrowDropDownLine /></div>
            </div>
            <div className='flex text-2xl' >
              <div>Rental</div>
              <div className='mt-[5px]'><RiArrowDropDownLine /></div>
            </div>
            <div className='flex text-2xl' >
              <div>Tickets</div>
              <div className='mt-[5px]'><RiArrowDropDownLine /></div>
            </div>
            <div className='flex text-2xl' >
              <div>Pages</div>
              <div className='mt-[5px]'><RiArrowDropDownLine /></div>
            </div>


          </div>

        )}
      </nav>


    </>
  )
}

export default Navbar
