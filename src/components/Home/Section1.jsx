import React from 'react';
import { BsCheckCircleFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

const Section1 = () => {
  const subject = [
    "NextJS 14 Approuter",
    "React v18",
    "Typescript",
    "Bootstrap 5.3",
    "Figma Included"
  ];

  return (
    <section className="w-full h-full overflow-hidden">
      <div
        className="min-h-[971px] w-full bg-cover bg-center flex flex-col justify-center items-center px-4"
        style={{
          backgroundImage: `url("https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/bg.png")`
        }}
      >
        <div className='blink-text hidden absolute top-[400px] left-[40px] xl:block' >
          <img className='w-[390px] h-[416px]' src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/banner-md.png" alt="page-1-left-side" />
        </div>

        <div className='blink-text2 hidden absolute top-[400px] right-[60px] xl:block' >
          <img className='w-[300px] h-[316px]' src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/banner-sm.png" alt="page-1-left-side" />
        </div>

        <div className='blink-text2 hidden absolute bottom-[-375px] right-[180px] xl:block' >
          <img className='w-[400px] h-[366px]' src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/banner-lg.png" alt="page-1-left-side" />
        </div>

        <div className="flex justify-center items-center mb-10">
          <div className="bg-[#3DC262] flex items-center gap-2 py-2 px-4 rounded-full text-white text-sm md:text-base">
            <img className="w-5 h-5" src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/leaf.png" alt="Leaf" />
            Created by Envato Power Elite Author
          </div>
        </div>

        <h1 className="text-white  overflow-visible  text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-[Manrope, serif]">
          Multi-purpose <strong>NextJS</strong> template for
          <br />
          <strong className=" text-amber-500  text-linear inline-block">Ticket Booking</strong> System
        </h1>

        <ul className="mt-10 flex flex-wrap justify-center items-center gap-3 px-4">
          {subject.map((item, index) => (
            <li key={index} className="text-white text-sm md:text-lg font-bold flex items-center gap-2">
              <BsCheckCircleFill className="text-[#34D674] text-lg" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button className="flex items-center cursor-pointer gap-2 bg-[#FEFA17] px-6 py-3 rounded-full font-bold text-black transition duration-300 hover:bg-gray-300 ">
            Explore Demos <FaArrowRightLong />
          </button>
          <button className="flex items-center cursor-pointer gap-2 bg-[#FEFA17] hover:bg-gray-300 px-6 py-3 rounded-full font-bold text-black transition duration-300 ">
            Buy Now <FaArrowRightLong />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Section1;
