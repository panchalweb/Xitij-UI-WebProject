import React from "react";
import "../../../App.css"

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Owlcarousel = () => {
  const options = {
    responsive: {
      0: { items: 1 },
      400: { items: 2 },
      600: { items: 2 },
      700: { items: 7 },
      800: { items: 8 },
      1000: { items: 10 },
    },
    nav: false,
    dots: true,
    
  };

  return (
    <>
      <OwlCarousel
        className="owl-theme section px-20"
        loop
        margin={0}
        autoplay
        
        {...options}
      >
        {/* 1 */}
        <div className="review item flex items-center ">
          <div className="review-img ">
            <img
              className="object-contain "
              src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/logo3.png"
              alt="logo"
            />
          </div>
        </div>

        {/* 2 */}
        <div className="review item flex items-center ">
          <div className="review-img ">
            <img
              className="object-contain "
              src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/logo6.png"
              alt="logo"
            />
          </div>
        </div>

        {/* 3 */}
        <div className="review item flex items-center ">
          <div className="review-img ">
            <img
              className=" object-contain "
              src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/logo10.png"
              alt="logo"
            />
          </div>
        </div>

        {/* 4 */}
        <div className="review item flex items-center ">
          <div className="review-img ">
            <img
              className=" object-contain "
              src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/logo7.png"
              alt="logo"
            />
          </div>
        </div>

        {/* 5 */}
        <div className="review item flex items-center ">
          <div className="review-img">
            <img
              className=" object-contain "
              src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/logo8.png"
              alt="logo"
            />
          </div>
        </div>

        {/* 6 */}
        <div className="review item flex items-center ">
          <div className="review-img ">
            <img
              className=" object-contain "
              src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/logo9.png"
              alt="logo"
            />
          </div>
        </div>

        {/* 7 */}
        <div className="review item flex items-center ">
          <div className="review-img ">
            <img
              className=" object-contain "
              src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/logo11.png"
              alt="logo"
            />
          </div>
        </div>

        {/* 8 */}
        <div className="review item flex items-center ">
          <div className="review-img ">
            <img
              className=" object-contain "
              src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/logo12.png"
              alt="logo"
            />
          </div>
        </div>

        {/* 9 */}
        <div className="review item flex items-center ">
          <div className="review-img ">
            <img
              className=" object-contain "
              src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/logo13.png"
              alt="logo"
            />
          </div>
        </div>

        {/* 10 */}
        <div className="review item flex items-center ">
          <div className="review-img">
            <img
              className=" object-contain "
              src="https://travila-nextjs-landing.vercel.app/assets/imgs/page/landing/logo4.png"
              alt="logo"
            />
          </div>
        </div>

      </OwlCarousel>
    </>
  );
};

export default Owlcarousel;
