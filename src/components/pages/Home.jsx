import React from "react";
import BaseHeader from "../Headers";
import MainLayout from "../Layouts/MainLayout";
import SlideFirst from "../Sliders/SlideFirst";
import Slidersecond from "../Sliders/Slidersecond";
import BoxFirst from "../BoxLabel/BoxFirst";
import Discount from "../Discount/Discount";

const Home = () => {
  return (
    <MainLayout>
      <div className="grid grid-cols-12 gap-4 ">
        <div className="col-span-7 h-[635px]">
          <SlideFirst />
        </div>
        <div className="col-span-5 h-[635px]">
          <div className="h-full w-full">
            <Slidersecond />
          </div>
        </div>
      </div>
      <BoxFirst />
      <div className="mt-8">
        <Discount />
      </div>
      <BoxFirst />
    </MainLayout>
  );
};

export default Home;
