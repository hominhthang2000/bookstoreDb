import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faChevronDown,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

const dataCagetory = [
  {
    name: "VĂN HỌC",
    childrenName: [
      { label: "Tiểu Thuyết" },
      { label: "Truyện Ngắn" },
      { label: "Ngôn Tình" },
      { label: "Truyện Trinh Thám" },
      { label: "Hài Hướ - Truyện Cười" },
    ],
  },
  {
    name: "VĂN HỌC",
    childrenName: [
      { label: "Tiểu Thuyết" },
      { label: "Truyện Ngắn" },
      { label: "Ngôn Tình" },
      { label: "Truyện Trinh Thám" },
      { label: "Hài Hướ - Truyện Cười" },
    ],
  },
  {
    name: "VĂN HỌC",
    childrenName: [
      { label: "Tiểu Thuyết" },
      { label: "Truyện Ngắn" },
      { label: "Ngôn Tình" },
      { label: "Truyện Trinh Thám" },
      { label: "Hài Hướ - Truyện Cười" },
    ],
  },
  {
    name: "VĂN HỌC",
    childrenName: [
      { label: "Tiểu Thuyết" },
      { label: "Truyện Ngắn" },
      { label: "Ngôn Tình" },
      { label: "Truyện Trinh Thám" },
      { label: "Hài Hướ - Truyện Cười" },
    ],
  },
];
const datamenu = [
  {
    label: "Arts & Photography",
    childrenMenu: [
      { label: "Bags & Cases" },
      { label: "Binoculars & Scopes" },
      { label: "Digital Cameras.3" },
      { label: "Film Photography" },
      { label: "Lighting & Studio" },
    ],
  },
  {
    label: "Biographies",
    childrenMenu: [
      { label: "Bags & Cases" },
      { label: "Binoculars & Scopes" },
      { label: "Digital Cameras.3" },
      { label: "Film Photography" },
      { label: "Lighting & Studio" },
    ],
  },
];
const dataPage = [
  { label: "Cart" },
  { label: "Checkout" },
  { label: "Wishlist" },
  { label: "Compare" },
  { label: "Login" },
  { label: "My account" },
  { label: "Order Complete" },
];
const HeaderFirst = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [hoverMenu, sethoveMenu] = useState("");
  const [isMenuPage, setMenuPage] = useState("");
  const [isCatagory, setCatagory] = useState("");
  const box = useRef(null);
  useEffect(() => {
    const handleClickOverlay = (e) => {
      if (!box?.current === e.target || !box?.current?.contains(e.target)) {
        setIsMenu(false);
      }
    };
    document.addEventListener("click", handleClickOverlay);
    return () => {
      document.removeEventListener("click", handleClickOverlay);
    };
  }, [isMenu]);
  return (
    <div>
      <div className="container">
        <div className="grid-cols-12 mt-3 grid items-center">
          <div className="text-[40px] font-bold text-[#62ab00] col-span-3">
            BOOK STORE
          </div>
          <div className="flex col-span-4 h-[40px]">
            <input
              className="border-black border-[1px] w-[370px] text-center rounded"
              placeholder="Nhập từ khoá cần tìm kiếm"
            ></input>
            <button className="font-bold w-[132px] bg-[#62ab00] text-[#ffffff]">
              Search
            </button>
          </div>
          <div className="col-span-5 gap-6 flex justify-end text-[18px]">
            <div>
              <div className="  ">
                <Link to="/#" className="font-bold hover:text-[#62ab00]">
                  Đăng nhập
                </Link>
                <br></br>
                <span>or</span>
                <Link to="/#"> Đăng ký</Link>
                <i class="fa-brands fa-opencart"></i>
              </div>
            </div>
            <div>
              <div className="flex">
                <div className="flex items-center gap-2 ">
                  <div className="flex text-[30px]">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      style={{ color: "#62ab00" }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span>Giỏ hàng</span>
                    <span className="text-[#62ab00] font-bold">£0.00</span>
                  </div>
                </div>
                <div className="flex items-center ml-[5px]">
                  <span className="rounded-full text-[#ffffff] bg-red-600 w-[30px] h-[30px] border-2 font-bold text-center items-center">
                    1
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-[#62ab00] ">
          <div className="container">
            <div className="h-[80px]  grid-cols-12 mt-3 grid items-center">
              <div
                ref={box}
                className=" z-50 flex justify-center items-center h-[50px] text-[15px] border-solid border-2  text-[#ffffff] col-span-3 relative"
              >
                <div className="flex">
                  <div
                    className="flex items-center gap-1 cursor-pointer font-bold "
                    onClick={() => setIsMenu(!isMenu)}
                  >
                    <div className="flex text-[20px]">
                      <FontAwesomeIcon
                        icon={faBars}
                        style={{ color: "#ffffff" }}
                      />
                    </div>

                    <div className="flex">Browse categories</div>
                  </div>
                </div>
                {isMenu && (
                  <div className="text-black  absolute left-0 right-0 top-[100%] ">
                    {datamenu.map((item, index) => (
                      <div
                        key={index}
                        onMouseEnter={() => sethoveMenu(item.label)}
                        onMouseLeave={() => sethoveMenu("")}
                        className="h-[50px]  cursor-pointer bg-[white] p-[10px] border-solid border-[1px] border-[#d9d9d9] relative"
                      >
                        <div className="hover:text-[#62ab00]">{item.label}</div>
                        {hoverMenu === item.label && (
                          <ul className="absolute   w-[180px] left-[100%] top-0 ">
                            {item.childrenMenu.map(
                              (itemChildren, indexChildren) => (
                                <li
                                  key={indexChildren}
                                  className="h-[50px]  bg-[white] p-[10px] hover:text-[#62ab00] border-solid border-[1px] border-[#d9d9d9]"
                                >
                                  {itemChildren.label}
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className=" flex col-span-4 h-[40px] justify-center">
                <div className="gap-4 flex px-5 text-[#ffffff]">
                  <div className="flex items-center text-[30px]">
                    <FontAwesomeIcon
                      icon={faPhoneVolume}
                      style={{ color: "#ffffff" }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p>Hỗ trợ miễn phí 24/7</p>
                    <p className="font-bold">+84-775-551-487</p>
                  </div>
                </div>
              </div>
              <div className="col-span-5 h-full flex  justify-end text-[18px]">
                <div className="flex  text-white  ">
                  <ul className="flex items-center  gap-4 ">
                    <li className="hover:text-black cursor-pointer  flex items-center h-full ">
                      <span>GIỚI THIỆU</span>
                    </li>
                    <li
                      className=" h-full hover:text-black cursor-pointer flex items-center relative"
                      onMouseEnter={() => setCatagory("TỦ SÁCH")}
                      onMouseLeave={() => setCatagory("")}
                    >
                      <div className="flex items-center gap-1">
                        <span>TỦ SÁCH</span>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="hover:text-black"
                        />
                      </div>

                      {isCatagory === "TỦ SÁCH" && (
                        <div className="absolute z-50 bg-white  left-[50%] translate-x-[-50%] flex top-[100%] mr-2 ">
                          <div className="absolute left-[50%] translate-x-[-50%] border-t-[1px] border-l-[1px] border-[#d9d9d9]  w-[15px] h-[15px] rotate-[45deg] translate-y-[-50%] translate-x-[100%] bg-white"></div>
                          {dataCagetory.map((item, index) => (
                            <div
                              key={index}
                              className="border-[1px] border-[#d9d9d9] text-[14px] pl-3"
                            >
                              <div className="font-bold pt-4 mb-5">
                                {item.name}
                              </div>

                              <div>
                                {item.childrenName.map(
                                  (
                                    itemChildrenCategory,
                                    indexChildrenCategory
                                  ) => (
                                    <div
                                      className="whitespace-nowrap pr-8 pb-2 text-[14px] hover:text-[#62ab00]"
                                      key={indexChildrenCategory}
                                    >
                                      {itemChildrenCategory.label}
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </li>

                    <li
                      className="hover:text-black cursor-pointer flex items-center relative h-full"
                      onMouseEnter={() => setMenuPage("HỖ TRỢ")}
                      onMouseLeave={() => setMenuPage("")}
                    >
                      <div className="flex items-center gap-1">
                        <span>HỖ TRỢ</span>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="hover:text-black"
                        />
                      </div>

                      {isMenuPage === "HỖ TRỢ" && (
                        <div className="bg-[white]  absolute left-0 right-0 top-[100%] z-[50]">
                          <div className="absolute border-t-[1px] border-l-[1px] border-[#d9d9d9]  w-[15px] h-[15px] rotate-[45deg] translate-y-[-50%] translate-x-[100%] bg-white"></div>
                          {dataPage.map((item, index) => (
                            <div
                              key={index}
                              className="border-solid hover:bg-slate-300 w-48 px-6 py-2 border-[1px] border-[#d9d9d9] relative bg-[white]"
                            >
                              <div className=" text-[14px] hover:text-[#62ab00] ">
                                {item.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </li>

                    <li className="hover:text-black cursor-pointer h-full  flex items-center">
                      <span>BLOGS</span>
                    </li>
                    <li className="hover:text-black cursor-pointer h-full  flex items-center">
                      <span> LIÊN HỆ</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderFirst;
