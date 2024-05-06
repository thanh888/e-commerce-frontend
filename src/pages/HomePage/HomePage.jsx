import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";

const HomePage = () => {
  const arrayTypes = ["TV", "Phone", "Laptop"];
  return (
    <div className="container m-auto px-20">
      <div className="flex py-5 gap-4 text-2xl border-solid border-b border-gray-600">
        {arrayTypes.map((type) => {
          return <TypeProduct type={type} key={type} />;
        })}
      </div>
      <div className="slider w-100 m-auto">
        <SliderComponent />
      </div>
      <div className="grid grid-cols-6 gap-4">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
      <NavbarComponent />
    </div>
  );
};

export default HomePage;
