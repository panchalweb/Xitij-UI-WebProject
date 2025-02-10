import React from 'react'

const Section6 = () => {

    const squre = [

        // *
        {
            img: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/nextjs.png",
            title: "App Router"
        },
        // *
        {
            img: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/react.png",
            title: "React 18"
        },
        // *
        {
            img: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/sass.png",
            title: "Sass"
        },
        // *
        {
            img: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/bootstrap-5.png",
            title: "Bootstrap 5"
        },
        // *
        {
            img: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/swiper.png",
            title: "Swiper Slider"
        },
        // *
        {
            img: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/google-font.png",
            title: "Google Fonts"
        },
        // *
        {
            img: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/es6.png",
            title: "ECMAScript 6"
        },
        // *
        {
            img: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/browser.png",
            title: "Browsersync"
        },
        // *
        {
            img: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/babel.png",
            title: "Babel 7"
        },
        // *
        {
            img: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/auto.png",
            title: "Autoprefixer"
        },
        // *
        {
            img: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/html5.png",
            title: "HTML 5"
        },
        // *
        {
            img: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/css3.png",
            title: "CSS 3"
        }

    ]

    return (
        <>

            <div className=' my-15 md:my-30 mx-5 md:mx-20 overflow-hidden'>
                <div className='mb-20' >
                    <h1 className='text-[28px] text-center sm:text-[36px] md:text-[44px] font-semibold mb-[25px] leading-14'>Unlock <strong>Premium & Exclusive</strong> <br />
                        Features At No Cost.</h1>
                    <p className='text-[#8E8E8E]  text-[15px] md:text-[18px] font-medium text-center leading-7'>Enhance your website's versatility and resilience with these potent features. <br />
                        Enjoy premium-grade functionalities without any additional cost.</p>
                </div>

                <div className='flex flex-wrap justify-center cursor-pointer'>
                    {squre.map((item, index) => (
                        <div key={index} className='w-[calc(50%-16px)] transition-all duration-300 hover:shadow-2xl  md:w-[calc(33.33%-16px)] lg:w-[calc(25%-16px)] xl:w-[calc(16.66%-16px)] rounded-xl border-[#E4E6E8] border-solid border-[2px] p-[26px] m-[8px]'>
                            <div className="lg:w-[153px] h-[54px] flex items-center justify-center">
                                <img className="max-w-full max-h-full" src={item.img} alt="square-image" />
                            </div>

                            <div className='flex justify-center'>
                                <h1 className='font-semibold self-end text-[20px] mt-[10px] text-center'>
                                    {item.title}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </>
    )
}

export default Section6
