import React from "react";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";

const TypeProductPage = () => {
  const onChange = () => {};
  return (
    <div className="container m-auto px-20 pb-4">
      <div className="flex flex-row">
        <div className="w-1/6 bg-white mt-10 rounded-sm">
          <NavbarComponent />
        </div>
        <div>
          <div className="grid grid-cols-4 gap-4 flex-wrap w-5/6">
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </div>
          <PaginationComponent
            defaultCurrent={2}
            total={100}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default TypeProductPage;
