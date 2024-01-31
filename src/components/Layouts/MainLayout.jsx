import React from "react";
import BaseHeader from "../Headers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const MainLayout = ({ children }) => {
  return (
    <div className="">
      <BaseHeader />
      <div className="container mt-5">{children}</div>
    </div>
  );
};

export default MainLayout;
