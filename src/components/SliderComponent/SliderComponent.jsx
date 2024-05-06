import React, { useEffect } from "react";
import Slider1 from "../../assets/images/sliders/Slider1.jpg";
import Slider2 from "../../assets/images/sliders/Slider2.jpg";
import Slider3 from "../../assets/images/sliders/Slider3.jpg";

const SliderComponent = () => {
  const arrayImages = [Slider1, Slider2, Slider3];

  let [currentSlide, setCurrentSlide] = React.useState(0);

  let previousSlide = () => {
    if (currentSlide === 0) setCurrentSlide(arrayImages.length - 1);
    else setCurrentSlide(currentSlide - 1);
  };

  let nextSlide = () => {
    if (currentSlide === arrayImages.length - 1) setCurrentSlide(0);
    else setCurrentSlide(currentSlide + 1);
  };

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       nextSlide();
  //     }, 10000);

  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div className="overflow-hidden relative h-80">
      <div
        className={`flex transition ease-out duration-40 `}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {arrayImages.map((image) => (
          <img src={image} object-cover max-w-full h-full w-full alt={image} />
        ))}
      </div>
      <div className="flex absolute top-0 h-full w-full justify-between items-center px-10">
        <button className="rounded-full p-1 text-black" onClick={previousSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
            />
          </svg>
        </button>
        <button className="rounded-full p-1 text-black" onClick={nextSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
            />
          </svg>
        </button>
      </div>
      <div className="absolute bottom-0 py-4 flex justify-center w-full gap-10">
        {arrayImages.map((s, i) => (
          <div
            key={"circle" + 1}
            onClick={() => {
              setCurrentSlide(i);
            }}
            className={`rounded-full cursor-pointer ${
              i === currentSlide ? "bg-white" : "bg-gray-300"
            } w-5 h-5`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
