import React, { useState } from "react";

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decrementQuantity = () => {
    setQuantity(quantity - 1);
  };
  return (
    <div className="font-sans bg-white">
      <div className="p-6 container px-20 mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div className="px-4 py-10 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
              <img
                src="https://readymadeui.com/images/laptop5.webp"
                alt="Product"
                className="w-4/5 rounded object-cover"
              />
              <button type="button" className="absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  fill="#ccc"
                  className="mr-1 hover:fill-[#333]"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
              <div className="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                <img
                  src="https://readymadeui.com/images/laptop2.webp"
                  alt="Product2"
                  className="w-24 cursor-pointer"
                />
              </div>
              <div className="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                <img
                  src="https://readymadeui.com/images/laptop3.webp"
                  alt="Product2"
                  className="w-24 cursor-pointer"
                />
              </div>
              <div className="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                <img
                  src="https://readymadeui.com/images/laptop4.webp"
                  alt="Product2"
                  className="w-24 cursor-pointer"
                />
              </div>
              <div className="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                <img
                  src="https://readymadeui.com/images/laptop5.webp"
                  alt="Product2"
                  className="w-24 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-[#333]">
              Acer Aspire Pro 12 | Laptop
            </h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-[#333] text-3xl font-bold">$1200</p>
              <p className="text-gray-400 text-lg">
                <strike>$1500</strike>{" "}
                <span className="text-sm ml-1">Tax included</span>
              </p>
            </div>

            <div className="flex space-x-2 mt-4">
              <svg
                className="w-5 fill-[#333]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-5 fill-[#333]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-5 fill-[#333]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-5 fill-[#333]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-5 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <h4 className="text-[#333] text-base">
                | See all 5 reviews | Sold: 300
              </h4>
            </div>

            <div className="mt-10 text-xl">
              <h3 className="text-xl font-bold text-gray-800">
                Thông tin vận chuyển
              </h3>
              <div className="flex flex-wrap gap-3 mt-4">
                <h4 className="text-[#333] ">
                  Giao đến Q. Hải Châu, P. Hải Châu I, Đà Nẵng
                </h4>
                <span className="w-10 h-10 text-blue-700 font-bold cursor-pointer">
                  Đổi
                </span>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-bold text-gray-800">
                Choose a Color
              </h3>
              <div className="flex flex-wrap gap-3 mt-4">
                <button
                  type="button"
                  className="w-10 h-10 bg-black border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                ></button>
                <button
                  type="button"
                  className="w-10 h-10 bg-gray-300 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                ></button>
                <button
                  type="button"
                  className="w-10 h-10 bg-gray-100 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                ></button>
                <button
                  type="button"
                  className="w-10 h-10 bg-blue-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                ></button>
              </div>
            </div>

            <div className="mt-10">
              <form className="">
                <label
                  for="quantity-input"
                  className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
                >
                  Choose quantity:
                </label>
                <div className="relative flex items-center max-w-[8rem] ">
                  <button
                    type="button"
                    id="decrement-button"
                    onClick={decrementQuantity}
                    disabled={quantity === 1}
                    data-input-counter-decrement="quantity-input"
                    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                  >
                    <svg
                      className="w-3 h-3 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h16"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    id="quantity-input"
                    data-input-counter
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-xl focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    min="1"
                    value={quantity}
                    required
                  />
                  <button
                    type="button"
                    id="increment-button"
                    onClick={incrementQuantity}
                    data-input-counter-increment="quantity-input"
                    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                  >
                    <svg
                      className="w-3 h-3 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>
                <p
                  id="helper-text-explanation"
                  className="mt-2 text-xl text-gray-500 dark:text-gray-400"
                >
                  Please select a 5 digit number from 0 to 9.
                </p>
              </form>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <button
                type="button"
                className="min-w-[200px] px-4 py-3 bg-sky-400 hover:bg-[#4d80dd] text-white text-xl font-semibold rounded"
              >
                Buy now
              </button>
              <button
                type="button"
                className="min-w-[200px] px-4 py-2.5 border border-[#333] bg-transparent hover:bg-gray-50 text-[#333] text-xl font-semibold rounded"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
          <h3 className="text-lg font-bold text-[#333]">Product information</h3>
          <ul className="mt-6 space-y-6 text-[#333]">
            <li className="text-sm">
              TYPE <span className="ml-4 float-right">LAPTOP</span>
            </li>
            <li className="text-sm">
              RAM <span className="ml-4 float-right">16 BG</span>
            </li>
            <li className="text-sm">
              SSD <span className="ml-4 float-right">1000 BG</span>
            </li>
            <li className="text-sm">
              PROCESSOR TYPE{" "}
              <span className="ml-4 float-right">INTEL CORE I7-12700H</span>
            </li>
            <li className="text-sm">
              PROCESSOR SPEED{" "}
              <span className="ml-4 float-right">2.3 - 4.7 GHz</span>
            </li>
            <li className="text-sm">
              DISPLAY SIZE INCH <span className="ml-4 float-right">16.0</span>
            </li>
            <li className="text-sm">
              DISPLAY SIZE SM <span className="ml-4 float-right">40.64 cm</span>
            </li>
            <li className="text-sm">
              DISPLAY TYPE{" "}
              <span className="ml-4 float-right">
                OLED, TOUCHSCREEN, 120 Hz
              </span>
            </li>
            <li className="text-sm">
              DISPLAY RESOLUTION{" "}
              <span className="ml-4 float-right">2880x1620</span>
            </li>
          </ul>
        </div>

        <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
          <h3 className="text-lg font-bold text-[#333]">Reviews(10)</h3>
          <div className="grid md:grid-cols-2 gap-12 mt-6">
            <div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <p className="text-sm text-[#333] font-bold">5.0</p>
                  <svg
                    className="w-5 fill-[#333] ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div className="bg-gray-400 rounded w-full h-2 ml-3">
                    <div className="w-2/3 h-full rounded bg-[#333]"></div>
                  </div>
                  <p className="text-sm text-[#333] font-bold ml-3">66%</p>
                </div>

                <div className="flex items-center">
                  <p className="text-sm text-[#333] font-bold">4.0</p>
                  <svg
                    className="w-5 fill-[#333] ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div className="bg-gray-400 rounded w-full h-2 ml-3">
                    <div className="w-1/3 h-full rounded bg-[#333]"></div>
                  </div>
                  <p className="text-sm text-[#333] font-bold ml-3">33%</p>
                </div>

                <div className="flex items-center">
                  <p className="text-sm text-[#333] font-bold">3.0</p>
                  <svg
                    className="w-5 fill-[#333] ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div className="bg-gray-400 rounded w-full h-2 ml-3">
                    <div className="w-1/6 h-full rounded bg-[#333]"></div>
                  </div>
                  <p className="text-sm text-[#333] font-bold ml-3">16%</p>
                </div>

                <div className="flex items-center">
                  <p className="text-sm text-[#333] font-bold">2.0</p>
                  <svg
                    className="w-5 fill-[#333] ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div className="bg-gray-400 rounded w-full h-2 ml-3">
                    <div className="w-1/12 h-full rounded bg-[#333]"></div>
                  </div>
                  <p className="text-sm text-[#333] font-bold ml-3">8%</p>
                </div>

                <div className="flex items-center">
                  <p className="text-sm text-[#333] font-bold">1.0</p>
                  <svg
                    className="w-5 fill-[#333] ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div className="bg-gray-400 rounded w-full h-2 ml-3">
                    <div className="w-[6%] h-full rounded bg-[#333]"></div>
                  </div>
                  <p className="text-sm text-[#333] font-bold ml-3">6%</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start">
                <img
                  src="https://readymadeui.com/team-2.webp"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <div className="ml-3">
                  <h4 className="text-sm font-bold text-[#333]">John Doe</h4>
                  <div className="flex space-x-1 mt-1">
                    <svg
                      className="w-4 fill-[#333]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      className="w-4 fill-[#333]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      className="w-4 fill-[#333]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      className="w-4 fill-[#CED5D8]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      className="w-4 fill-[#CED5D8]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <p className="text-xs !ml-2 font-semibold text-[#333]">
                      2 mins ago
                    </p>
                  </div>
                  <p className="text-sm mt-4 text-[#333]">
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                    eiusmod tempor incidunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="w-full mt-10 px-4 py-2.5 bg-transparent hover:bg-gray-50 border border-[#333] text-[#333] font-bold rounded"
              >
                Read all reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
