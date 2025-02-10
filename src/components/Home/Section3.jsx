import React from 'react'

const Section3 = () => {

    const box = [
        // 1
        {
            background: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/bg1.png",
            image: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/home-1.png",
            title: "Homepage 01",
            service: "All Services"
        },
        // 2
        {
            background: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/bg2.png",
            image: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/home-2.png",
            title: "Homepage 01",
            service: "All Services"
        },
        // 3
        {
            background: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/bg3.png",
            image: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/home-3.png",
            title: "Homepage 01",
            service: "All Services"
        },
        // 4
        {
            background: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/bg4.png",
            image: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/home-4.png",
            title: "Homepage 01",
            service: "All Services"
        },
        // 5
        {
            background: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/bg5.png",
            image: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/home-5.png",
            title: "Homepage 01",
            service: "All Services"
        },
        // 6
        {
            background: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/bg6.png",
            image: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/home-6.png",
            title: "Homepage 01",
            service: "All Services"
        },
        // 7
        {
            background: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/bg7.png",
            image: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/home-7.png",
            title: "Homepage 01",
            service: "All Services"
        },
        // 8
        {
            background: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/bg8.png",
            image: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/home-8.png",
            title: "Homepage 01",
            service: "All Services"
        },
        // 9
        {
            background: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/bg9.png",
            image: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/home-9.png",
            title: "Homepage 01",
            service: "All Services"
        },
        // 10
        {
            background: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/bg10.png",
            image: "https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/home-10.png",
            title: "Homepage 01",
            service: "All Services"
        },

    ]


    return (
        <>
            <div className=" bg-[#E2F3F8] py-30 bg overflow-hidden ">

                <div className="md:mx-10 mt-32 lg:mt-18 px-4 flex flex-col lg:flex-row items-center lg:items-start">
                    <div className="w-full md:w-[100%]  lg:w-[70%] flex">
                        <div className="px-4 md:px-10">
                            <button className="flex items-center font-bold gap-3 border-2 border-[#F3AF49] bg-[#FCFCF3] rounded-3xl px-5 py-2">
                                <img
                                    className="w-8 h-8 object-contain"
                                    src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/best-booking.png"
                                    alt="flight image"
                                />
                                The Best Booking System
                            </button>

                            <h1 className="text-black my-4 font-semibold text-3xl sm:text-4xl md:text-5xl font-manrope">
                                Stunning Travel Pages Design
                            </h1>

                            <p className="mt-2 text-gray-600 text-left leading-relaxed">
                                Travila comes with multiple fantastic homepages designed to suit the needs of hotel, tour activity, rental, car,
                                and restaurant businesses. More demos are coming soon.
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-[100%] lg:w-[30%] flex justify-center mt-10 lg:mt-0">
                        <img
                            className=" object-contain mx-auto md:mx-0 self-center"
                            src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/bg-route.png"
                            alt="Route Background"
                        />
                    </div>
                </div>

                <div className=" mt-20 mx-5 md:mx-20  md:flex md:flex-wrap">
                    {box.map((item, index) => (
                        <div className=" w-full md:w-[calc(50%-10px)] lg:w-[calc(33.33%-10px)] bg-[#FFFFFF] m-[5px] rounded-2xl p-4 border-2 border-[#E4E6E8] border-solid transition-all duration-300 hover:shadow-2xl hover:scale-95">
                            <div className=" w-full bg-cover bg-center flex justify-center items-center rounded-xl pt-5 pr-6 pl-6"
                                style={{ backgroundImage: `url(${item.background})` }}
                            >
                                <img className="w-full rounded object-fill " src={item.image} alt="images" />
                            </div>
                            <div className=" flex justify-between items-center p-4">
                                <div className="sm:flex sm:flex-col sm:items-center sm:justify-center">
                                    <h1 className="text-black font-semibold text-sm md:text-lg lg:text-md font-manrope">{item.title}</h1>
                                    <p className=" text-gray-600 self-start text-left">{item.service}</p>
                                </div>
                                <div>
                                    <button className="bg-[#F2F4F6] cursor-pointer text-sm p-3 text-black hover:bg-gray-400  md:mt-0 md:text-[14px] md:py-2 md:px-4 rounded-lg lg:self-end lg:rounded-2xl transition-all duration-300  hover:text-white">Live Demo</button>
                                </div>
                            </div>
                        </div>
                    ))}


                    <div className=" w-full md:w-[calc(50%-10px)] lg:w-[calc(33.33%-10px)] bg-[#FFFFFF] m-[5px] rounded-2xl p-4 border-2 border-[#E4E6E8] border-solid transition-all duration-300 hover:shadow-2xl hover:scale-95">
                        <div className=" w-full relative bg-cover bg-center  rounded-xl pt-5 pr-6 pl-6"
                            style={{ backgroundImage: `url("https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/bg11.png")` }}
                        >
                            <h6 className=' absolute top-[50%] left-[31%] text-black font-bold text-sm md:text-lg lg:text-2xl font-manrope  self-center self-justify-center'>
                                Coming Soon...
                            </h6>
                            <img className="w-full object-fill " src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/home-11.png" alt="images" />




                        </div>
                        <div className="">
                            <div className="sm:flex sm:flex-col sm:items-center sm:justify-center">
                                <h1 className="text-black font-bold pt-5 text-sm md:text-lg lg:text-2xl  font-manrope">Working...</h1>
                                <p className=" text-gray-600  text-center">More pages will be added soon</p>
                            </div>
                        </div>
                    </div>

                    <div className=" w-full md:w-[calc(50%-10px)] lg:w-[calc(33.33%-10px)] m-[5px] rounded-2xl pt-20  ">
                        <div className=" ">
                            <img className=" object-contain " src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/bag.png" alt="images" />
                        </div>
                        
                    </div>

                </div>
            </div>


        </>
    )
}

export default Section3
