import React from 'react'
import { IoArrowForwardCircleSharp } from "react-icons/io5";


const Section8 = () => {
    return (
        <>
            <div className='w-full pt-[163px] pb-[411px] px-[50px] flex flex-col justify-center items-center'
                style={{
                    backgroundImage: `url("https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/purchase.png")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: "bottom center",
                    backgroundColor: "rgba(0,0,0,0.6)",
                }}
            >
                <div className="flex justify-center items-center mb-10">
                    <div className="bg-[#3DC262] flex items-center gap-2 py-2 px-4 rounded-full text-white text-sm md:text-base">
                        <img className="w-5 h-5" src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/leaf.png" alt="Leaf" />
                        Created by Envato Power Elite Author
                    </div>
                </div>
                <h1 className="text-white mb-[20px] font-bold text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight font-[sans, serif]">
                Get Started With Travila NextJS <br /> React Template
                </h1>
                <p className='text-[18px] mb-[30px] text-center text-[#FFFFFF] font-bold'>
                Awesome design, powerful features, and easy customization
                </p>
                <button className=' bg-[#FEFA17] cursor-pointer  hover:bg-gray-300 border-[#FFFFFF] border-solid border-[2px] px-6 py-3 rounded-2xl  flex items-center text-center gap-2 mt-3'>
                    <span className='font-bold'>
                    Purchase Travila
                    </span>
                   
                    <IoArrowForwardCircleSharp className='text-3xl ' />
                </button>

            </div>


        </>
    )
}

export default Section8
