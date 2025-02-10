import React from 'react'
import Counter from './Extracomponents/Counter'

const Section5 = () => {

    const btn = [
        "Auto Layout", "Fully Components", "Color Variables", "Local style", "Typography", "Effect", "12 Columns Grid"
    ]
    return (
        <>
            <div className='w-full bg-contain my-20 px-1 sm:px-10 lg:px-20 overflow-hidden'
                style={{
                    backgroundImage: `url("https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/bg-number.png")`,
                }}
            >
                <div className="py-5">
                    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">

                        <div>
                            <h2 className="text-xl font-semibold flex justify-center items-center">
                                <Counter number={175} time={10} />+
                            </h2>
                            <p className="text-xl font-semibold text-[#73737C] mt-2">
                                Typescript
                                Components
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold flex justify-center fontFamily-sans items-center">
                                <Counter number={76} time={10} />+
                            </h2>
                            <p className="text-xl font-semibold text-[#73737C] mt-2">
                                Figma design
                                Artboards
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold flex justify-center items-center">
                                <Counter number={5} time={5} />+
                            </h2>
                            <p className="text-xl font-semibold text-[#73737C] mt-2">
                                Creative
                                Homepages
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold flex justify-center items-center">
                                <Counter number={4} time={10} />+
                            </h2>
                            <p className="text-xl font-semibold text-[#73737C] mt-2">
                                Travel booking
                                Categories
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold flex justify-center items-center">
                                <Counter number={35} time={10} />+
                            </h2>
                            <p className="text-xl font-semibold text-[#73737C] mt-2">
                                Inner
                                pages
                            </p>
                        </div>

                    </div>
                </div>

                <div className='w-full mt-10 flex flex-col lg:flex-row'
                    style={{
                        backgroundImage: `url("https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/bg-figma.png")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: "center",
                        backgroundColor: "#FFEC88",
                        borderRadius: "10px",
                        border: "3px solid #DDDDDD"
                    }}
                >
                    <div className='w-[100%] lg:w-[50%] px-3 flex ' >
                        <div className='self-end lg:self-center'>
                            <img className=' w-[90%] h-[90%] ' src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/img-figma.png" alt="computer-image" />
                        </div>

                    </div>
                    <div className=' w-[100%] lg:w-[50%] pt-10 pr-[30px] pb-[40px] flex flex-col px-3' >
                        <div className='self-auto md:self-end'>
                            <img className='' src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/figma2.png" alt="logo" />
                        </div>
                        <div>
                            <h1 className='mb-8'>
                                <strong className='text-black text-5xl'>Figma Design File</strong>
                                <br />
                                <strong className='text-[#000000] text-3xl'>is included. </strong>
                                <strong className='text-[#319F1F] text-5xl mt-2'>Save $19</strong>
                            </h1>
                        </div>
                        <div className='mb-[50px]'>
                            {btn.map((item, index) => (
                                <button className='text-black cursor-pointer transition-all duration-300 hover:-translate-y-1 tran bg-white px-4 m-1 py-2 rounded-3xl' key={index} >
                                    {item}
                                </button>
                            ))}
                        </div>
                        <div className='w-full md:flex'>
                            <div className='w-full md:w-[1/2]'>
                                <span className='w-[66px] h-[66px] mb-4 bg-[#F09814] rounded-full inline-flex items-center justify-center overflow-hidden   '>
                                    <img className='' src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/layer.png" alt="orangesqure" />
                                </span>
                                <h1 className='text-black mb-2 text-2xl font-medium'>
                                    Fully Organized Layers
                                </h1>
                                <p className='text-[#737373] text-md'>
                                    Arrange and name detailed and specific components
                                </p>

                            </div>
                            <div className='w-full md:w-[1/2] mt-5 md:mt-0'>
                                <span className='w-[66px] h-[66px] mb-4 bg-[#F09814] rounded-full inline-flex items-center justify-center overflow-hidden   '>
                                    <img className='' src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/global.png" alt="orangesqure" />
                                </span>
                                <h1 className='text-black mb-2 text-2xl font-medium'>
                                Global Design System
                                </h1>
                                <p className='text-[#737373] text-md'>
                                Auto layout, Components, Color variables, Typography...
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Section5
