import React from 'react'

const Section4 = () => {
    return (
        <>
            <div className="w-full md:py-30 px-4 md:px-12"
                style={{
                    backgroundImage: `url("https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/bg-feature.png")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundBlendMode: 'multiply',
                    backgroundSize: 'cover',
                    // backgroundPosition: "center",
                    backgroundColor: "rgba(0,0,0,0.7)",
                }}
            >

                <div className='pt-[100px] pb-[80px] flex flex-col lg:flex-row w-full'>
                    {/* Left Content */}
                    <div className='w-full lg:w-[50%] text-center md:text-left'>
                        <button className='flex font-semibold rounded-4xl items-center bg-[#3DC262] px-4 py-1 mx-auto md:mx-0'>
                            <span><img className='h-8 w-8' src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/feature.png" alt="" /></span>
                            <h1 className='text-md ml-3 text-white'>Specialized Features</h1>
                        </button>
                        <h1 className="text-[36px] sm:text-[42px] md:text-[48px] font-normal leading-tight mt-4">
                            <strong className='text-[#FEFA17]'>a</strong> 
                            <strong className='text-[#775C2B]'> Feature-rich</strong> 
                            <strong className='text-[#FEFA17]'> and</strong> <br />
                            <strong className='text-[#3DC262]'> Beautiful Travel</strong> 
                            <strong className='text-[#FEFA17]'> NextJS <br /> React Template</strong>
                        </h1>
                        <p className='text-[#D5D8D8] text-lg mt-3 px-2 md:px-0'>
                            Tailored to meet the diverse needs of travel agencies, tour operators, and adventure enthusiasts, Travila combines stunning design with robust functionality.
                        </p>
                        <button className='flex bg-white px-5 py-2 mt-5 rounded-4xl items-center mx-auto md:mx-0'>
                            <span>
                                <img src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/mode.png" alt="" />
                            </span>
                            <h1 className='text-lg md:text-2xl ml-4 text-black font-bold'>
                                Fully Dark / Light mode
                            </h1>
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className='w-full lg:w-[50%] flex justify-center items-center mt-6 md:mt-10 lg:mt-0'>
                        <img className='w-[100%] sm:w-[60%] md:w-[80%] lg:w-[80%]' src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/img-feature.png" alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Section4
