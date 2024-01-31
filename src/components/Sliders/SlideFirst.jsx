import React from "react";
import Slider from "react-slick";

const SlideFirst = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="w-full h-full">
      <div className="relative w-ful max-h-[640px] min-h-[640px] ">
        <div className="flex justify-center items-center absolute top-[3%] right-0 left-[1%] bestseller w-[200px] h-[50px] border border-solid border-white rounded-bl-xl rounded-br-xl rounded-tr-xl rounded-tl-none">
          <span className=" textseller text-[20px] font-bold text-white">
            BESTSELLER BOOK
          </span>
        </div>
        <img
          className="w-[700px] h-[640px] object-fill"
          src="./Images/91xUsdujK3L.jpg"
          alt="Slider 1 "
        />
        <a
          href="/#"
          className=" flex items-center justify-center absolute rounded-md border-solid border-4 bg-[#ecf0f1]  w-[205px] h-[60px] font-medium text-[#6ab04c] text-[20px] top-[50%] translate-x-[-50%] translate-y-[-50%]  left-[50%]  hover:bg-slate-200 hover:text-[#c0392b] hover:border-[#e74c3c]"
        >
          Xem chi tiết 💌
        </a>
      </div>
      <div className="relative">
        <div className="flex justify-center items-center absolute top-[3%] right-0 left-[1%] bestseller w-[200px] h-[50px] border border-solid border-white rounded-bl-xl rounded-br-xl rounded-tr-xl rounded-tl-none">
          <span className=" textseller text-[20px] font-bold text-white">
            BESTSELLER BOOK
          </span>
        </div>
        <img
          className="w-[700px] h-[640px] object-fill"
          src="./Images/9781913484385.jpg"
          alt="Slider 1 "
        />
        <a
          href="/#"
          className=" flex items-center justify-center absolute rounded-md border-solid border-4 bg-[#ecf0f1]  w-[205px] h-[60px] font-medium text-[#6ab04c] text-[20px] top-[50%] translate-x-[-50%] translate-y-[-50%]  left-[50%]  hover:bg-slate-200 hover:text-[#c0392b] hover:border-[#e74c3c]"
        >
          Xem chi tiết 💌
        </a>
      </div>
      <div className="relative">
        <div className="flex justify-center items-center absolute top-[3%] right-0 left-[1%] bestseller w-[200px] h-[50px] border border-solid border-white rounded-bl-xl rounded-br-xl rounded-tr-xl rounded-tl-none">
          <span className=" textseller text-[20px] font-bold text-white">
            BESTSELLER BOOK
          </span>
        </div>
        <img
          className="w-[700px] h-[640px] object-fill"
          src="./Images/91wpXnQqMkL.jpg"
          alt="Slider 1 "
        />
        <a
          href="/#"
          className=" flex items-center justify-center absolute rounded-md border-solid border-4 bg-[#ecf0f1]  w-[205px] h-[60px] font-medium text-[#6ab04c] text-[20px] top-[50%] translate-x-[-50%] translate-y-[-50%]  left-[50%]  hover:bg-slate-200 hover:text-[#c0392b] hover:border-[#e74c3c]"
        >
          Xem chi tiết 💌
        </a>
      </div>
    </Slider>
  );
};

export default SlideFirst;
