import {
  faChevronDown,
  faLifeRing,
  faPiggyBank,
  faRotateRight,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const dataBox = [
  {
    icon: <FontAwesomeIcon icon={faTruckFast} style={{ color: "#62ab00" }} />,
    title: "Miễn phí vẫn chuyển",
    decreption: "Đơn hàng trên 1 triệu",
  },
  {
    icon: <FontAwesomeIcon icon={faRotateRight} style={{ color: "#62ab00" }} />,
    title: "Miễn phí vẫn chuyển",
    decreption: "Đơn hàng trên 1 triệu",
  },
  {
    icon: <FontAwesomeIcon icon={faPiggyBank} style={{ color: "#62ab00" }} />,
    title: "Miễn phí vẫn chuyển",
    decreption: "Đơn hàng trên 1 triệu",
  },
  {
    icon: <FontAwesomeIcon icon={faLifeRing} style={{ color: "#62ab00" }} />,
    title: "Miễn phí vẫn chuyển",
    decreption: "Đơn hàng trên 1 triệu",
  },
];
const BoxFirst = () => {
  return (
    <div className="flex  justify-between mt-6">
      {dataBox.map((item, index) => (
        <div
          key={index}
          className="flex border-solid border-2 px-5 items-center gap-2 "
        >
          <div className="text-[50px]"> {item?.icon}</div>
          <div className="flex flex-col">
            <div> {item.title}</div>
            <div> {item.decreption}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoxFirst;
