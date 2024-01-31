import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const dataDiscount = [
  {
    discount: "Giảm 30%",
    img: "./Images/doi-song-bi-an-cua-cay-tb-2021.jpg",
    tilte: "Đời sống bí ẩn của cây",
    storge: "Còn 500 sản phẩm",
    price: "120,000đ",
    pricediscount: "100,000đ",
    icon: (
      <FontAwesomeIcon icon={faCartShopping} style={{ color: "#FFD43B" }} />
    ),
  },
  {
    discount: "Giảm 30%",
    img: "./Images/doi-song-bi-an-cua-cay-tb-2021.jpg",
    tilte: "Đời sống bí ẩn của cây",
    storge: "Còn 500 sản phẩm",
    price: "120,000đ",
    pricediscount: "100,000đ",
    icon: (
      <FontAwesomeIcon icon={faCartShopping} style={{ color: "#FFD43B" }} />
    ),
  },
  {
    discount: "Giảm 30%",
    img: "./Images/doi-song-bi-an-cua-cay-tb-2021.jpg",
    tilte: "Đời sống bí ẩn của cây",
    storge: "Còn 500 sản phẩm",
    price: "120,000đ",
    pricediscount: "100,000đ",
    icon: (
      <FontAwesomeIcon icon={faCartShopping} style={{ color: "#FFD43B" }} />
    ),
  },
  {
    discount: "Giảm 30%",
    img: "./Images/doi-song-bi-an-cua-cay-tb-2021.jpg",
    tilte: "Đời sống bí ẩn của cây",
    storge: "Còn 500 sản phẩm",
    price: "120,000đ",
    pricediscount: "100,000đ",
    icon: (
      <FontAwesomeIcon icon={faCartShopping} style={{ color: "#FFD43B" }} />
    ),
  },
  {
    discount: "Giảm 30%",
    img: "./Images/doi-song-bi-an-cua-cay-tb-2021.jpg",
    tilte: "Đời sống bí ẩn của cây",
    storge: "Còn 500 sản phẩm",
    price: "120,000đ",
    pricediscount: "100,000đ",
    icon: (
      <FontAwesomeIcon icon={faCartShopping} style={{ color: "#FFD43B" }} />
    ),
  },
];
const Discount = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const [times, setTimes] = useState({
    hours: 10,
    minutes: 59,
    seconds: 60,
  });

  const handleCountdownTime = () => {
    setTimes((prevTimes) => {
      const newSeconds = prevTimes.seconds - 1;

      if (newSeconds === 0) {
        if (prevTimes.minutes === 0) {
          if (prevTimes.hours === 0) {
            // Reset to initial state
            return {
              hours: 10,
              minutes: 60,
              seconds: 60,
            };
          } else {
            // Decrement hours
            return {
              ...prevTimes,
              hours: prevTimes.hours - 1,
              minutes: 60,
              seconds: 60,
            };
          }
        } else {
          // Decrement minutes
          return {
            ...prevTimes,
            minutes: prevTimes.minutes - 1,
            seconds: 60,
          };
        }
      } else {
        // Decrease seconds only
        return {
          ...prevTimes,
          seconds: newSeconds,
        };
      }
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleCountdownTime();
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="grid grid-cols-12 border-[2px]  shadow-xl shadow-[#ccc] border-[#ccc] rounded-md">
      <div className="col-span-3 p-3">
        <div>
          <img
            src="./Images/Banner-Đón-Xuân-Rộn-Ràng-1-890x396.jpg"
            alt=""
          ></img>
        </div>
        <div className="text-[24px] text-[#f25529] font-extrabold mt-5">
          Khuyến Mãi Năm Mới - Sách Giảm 30%
        </div>
        <div className="text-[rgba(30,30,30,0.65)] font-semibold mt-5">
          Kết thúc trong:
        </div>
        <div className="flex gap-[3px] justify-between px-[10px] mt-[50px]">
          <div className="flex flex-col items-center border-[1px] border-[#ccc] rounded-bl-lg rounded-br-none rounded-tr-none rounded-tl-lg bg-[#ccc] w-1/3 py-[5px]">
            <span className="font-bold text-[24px]">{times.hours}</span>
            <span>hours</span>
          </div>
          <div className="flex flex-col items-center bg-[#ccc] w-1/3 py-[5px]">
            <span className="font-bold text-[24px]">{times.minutes}</span>
            <span>minutes</span>
          </div>
          <div className="flex flex-col items-center border-[1px] border-[#ccc] rounded-bl-none rounded-br-lg rounded-tr-lg rounded-tl-none bg-[#ccc] w-1/3 py-[5px]">
            <span className="font-bold text-[24px]">{times.seconds}</span>
            <span>seconds</span>
          </div>
        </div>
      </div>
      <div className="flex gap-4 col-span-9">
        <div className="w-full">
          <Slider {...settings}>
            {dataDiscount.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg dark:bg-gray-800 p-2 px-[5px]"
              >
                <div className="border-[1px] border-[#ccc] rounded-md">
                  <div className="border border-solid bg-[#f25529]  rounded-bl-lg rounded-br-lg rounded-tr-lg rounded-tl-none w-[100px] h-[35px] font-bold text-white text-center flex justify-center items-center">
                    {item.discount}
                  </div>
                  <img src={item.img} alt=""></img>
                  <div className="font-bold mt-6 p-[10px]">{item.tilte}</div>
                  <div className="text-[#62ab00] mt-3 p-[10px]">
                    {item.storge}
                  </div>
                  <div className="flex mt-6 p-[10px]">
                    <div className="flex flex-col">
                      <div className="text-[15px] line-through text-[#f25529]">
                        {item.price}
                      </div>
                      <div className="text-[18px] font-bold">
                        {item.pricediscount}
                      </div>
                    </div>

                    <div className="flex text-[30px] justify-end w-full items-center">
                      {item.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Discount;
