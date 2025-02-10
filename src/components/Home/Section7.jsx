import React from 'react'
import { IoArrowForwardCircleSharp } from "react-icons/io5";

const Section7 = () => {
    return (
        <>
            <hr className='w-full border-[#E4E6E8] border-solid border-10px' />
            <div className=' mx-[0px] md:mx-[80px] mt-[120px] mb-[10px] overflow-hidden'>
                <div className='w-full px-[5px] md:px-[30px] lg:flex'>
                    <div className='w-[100%] lg:w-[50%] mb-8 lg:mb-0'>
                        <img src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/img-welcome.png" alt="" />
                    </div>
                    <div className='w-[100%] lg:w-[50%] md:mx-[10px]'>
                        <button className='border-[#E4E6E8] border-[2px] border-solid bg-[#FEFA17] px-2 py-1  md:px-5 md:py-2 flex gap-2 rounded-4xl'>
                            <span className='flex'>
                                <img src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/testimonial.png" alt="iconbutton" />
                                <img src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/testimonial2.png" alt="" />
                                <img src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/testimonial3.png" alt="" />
                            </span>
                            <h2 className='font-semibold'>
                                Awesome Support Team
                            </h2>
                        </button>
                        <h1 className='text-[55px] mt-4 leading-16'>
                            Welcome to the <br />
                            <strong>Help Center</strong>
                        </h1>
                        <p className='mt-5 text-[#8E8E8E]'>
                            We have a dedicated <strong className='text-black'>Support Center</strong>  for all of your support needs. It includes our  <strong className='text-black'>Documentation </strong>and <strong className='text-black'>Ticket System</strong>   for any questions you have. We usually get back to you within 2-4 business days.
                        </p>
                        <button className='mt-12 bg-black cursor-pointer hover:border-solid hover:border-1 hover:border-black  hover:bg-gray-300 text-white hover:text-black px-6 py-5 rounded-2xl gap-2 flex items-center'>
                            Our Support Center
                            <IoArrowForwardCircleSharp className='text-3xl' />
                        </button>
                    </div>
                </div>

            </div>

            <div class="w-full overflow-hidden mb-24">
                <div class="animate-marquee inline-block text-9xl font-bold text-[#E6E8E9]">
                    TRAVEL TOUR HOTEL BOOKING
                </div>
            </div>



        </>
    )
}

export default Section7
