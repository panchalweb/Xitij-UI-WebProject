import React from 'react'
import { FaArrowRight } from "react-icons/fa6"
import bootstrap from "../../public/bootstrap.png"
import easy from "../../public/easy.png"
import figma from "../../public/figma.png"
import multi from "../../public/multi.png"
import Owlcarousel from './Extracomponents/Owlcarousel';




const Section2 = () => {

    const card = [
        {
            title: "NextJS 14, Bootstrap 5.3",
            description: "The worlds most popular front-end open source toolkit for building responsive websites",
            image: bootstrap
        },
        {
            title: "Multi-Purposes",
            description: "Everything for a travel booking system: Tour, Destination, Activities Hotels, Rental, Ticket...",
            image: easy
        },
        {
            title: "Easy to Customize",
            description: "Modern automation technologies like Typescript, Sass, Swiper Slider... make customization very easy",
            image: figma
        },
        {
            title: "Figma design is included",
            description: "Save up to $19. Figma design file makes design customization simple. A value that cannot be missed.",
            image: multi
        },
    ]

    return (
        <>
            <section className='w-full h-full overflow-hidden '>

                <div className=' w-full bg-cover bg-center '
                    style={{
                        backgroundImage: `url("https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/bg-best-booking.png")`,
                    }}
                >
                    <div className=' pt-[150px] flex flex-col md:flex-row items-center justify-between'>
                        <div className='w-full md:w-[50%] lg:w-[70%] px-4 flex flex-col xl:flex-row '>
                            <div className='pl-4 md:pl-10'>
                                <button className='flex items-center font-semibold gap-3 border-2 border-solid border-[#F3AF49] bg-[#FCFCF3] rounded-4xl px-5 py-1.5'>
                                    <img className='w-[30px] h-[30px]' src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/best-booking.png" alt="flight image" />
                                    The Best Booking System
                                </button>
                                <h1 className='text-black my-4 font-semibold text-[30px] sm:text-[36px] md:text-[44px] font-[Manrope, serif]'>
                                    Kickstart Your Travel Project
                                </h1>
                                <p className='mt-2 text-[#8E8E8E] text-left'>
                                    Get the inspiration you need with our curated collections and boost your creativity
                                </p>
                            </div>

                            <div className='pt-4 md:pt-6 lg:mt-[24px]'>
                                <img className='h-[85px] w-[230px] mx-auto md:mx-0' src="http://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/flight.png" alt="" />
                            </div>
                        </div>

                        <div className='w-full md:w-[50%] lg:w-[30%] pt-6 md:pt-12 flex justify-center px-4'>
                            <button className='bg-black cursor-pointer text-white text-lg px-8 py-2 rounded-3xl flex gap-3 items-center hover:border-2 hover:border-black hover:border-solid hover:bg-gray-300 hover:text-black'>
                                Browse Demos
                                <FaArrowRight className='text-xl' />
                            </button>
                        </div>
                    </div>

                    <div className='mt-24 flex flex-wrap cursor-pointer lg:flex-nowrap justify-center gap-6 mx-15'>
                        {card.map((item, index) => (
                            <div key={index} className='w-full transition-all duration-300 hover:shadow-2xl hover:scale-95  sm:w-[80%] md:w-[48%] lg:w-[25%] bg-white rounded-2xl p-4 shadow-lg'>
                                <div className='w-full bg-[#F9F9F9] p-6 rounded-lg'>
                                    <h1 className='text-[#000000] text-lg md:text-xl font-bold font-[Manrope, serif]'>
                                        {item.title}
                                    </h1>
                                    <p className='text-[#9EA09E] text-sm md:text-base mt-2'>
                                        {item.description}
                                    </p>
                                </div>
                                <div className='flex justify-center mt-4'>
                                    <img className='w-full max-w-[236px] h-auto rounded-md' src={item.image} alt="images for card" />
                                </div>
                            </div>
                        ))}
                        

                    </div>

                    <div className=' mx-15 flex mt-20 mb-12'>
                        <div className='w-full lg:w-1/2 '>
                            <h1 className='text-black text-3xl font-bold mb-3'>
                                Smart Toolkit
                            </h1>
                            <p className='text-[#8E8E8E]'>
                                Build with the latest and greatest tool & resources. Automation tools which handle everything and let you focus on the development.
                            </p>
                        </div>

                    </div>

                        <Owlcarousel/>

                </div>

            </section>
        </>
    )
}

export default Section2
