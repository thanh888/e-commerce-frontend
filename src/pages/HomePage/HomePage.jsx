import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import CardComponent from "../../components/CardComponent/CardComponent";

const HomePage = () => {
  const arrayTypes = ["TV", "Phone", "Laptop"];
  return (
    <div
      className="container m-auto px-20 pb-4 "
      style={{ paddingBottom: "200px" }}
    >
      <div className="flex py-5 gap-4 text-2xl border-solid border-b border-gray-600">
        {arrayTypes.map((type) => {
          return <TypeProduct type={type} key={type} />;
        })}
      </div>
      <div className="slider w-100 m-auto">
        <SliderComponent />
      </div>
      <div className="flex flex-row flex-wrap gap-4 justify-center">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
      <div className="content-center text-center">
        <button className="outline outline-2 outline-offset-2 outline-blue-500 hover:bg-sky-500 hover:text-white font-medium rounded-md text-xl px-10 py-3">
          View more
        </button>
      </div>
    </div>
  );
};

export default HomePage;
