import React from "react";

const NavbarComponent = () => {
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => {
          return <h1>{option}</h1>;
        });

      case "checkbox":
        return options.map((option) => {
          return (
            <div className="flex items-center mb-2">
              <input
                id="default-checkbox"
                type="checkbox"
                value={option.value}
                className="w-8 h-8 accent-pink-500"
              />
              <label
                for="default-checkbox"
                className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                {option.label}
              </label>
            </div>
          );
        });

      case "stars":
        const layout = [];
        for (let i = 0; i < options.length; i++) {
          const stars = [];
          const option = options[i];
          for (let index = 0; index < option; index++) {
            stars.push(
              <svg
                class="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            );
          }
          layout.push(
            <div class="flex items-center">
              <div className="flex flex-row gap-1">{stars}</div>
              <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">
                {option} stars
              </p>
            </div>
          );
        }

        return layout;

      case "prices":
        return options.map((option) => {
          return (
            <div className="rounded-full bg-slate-400 p-2 content-fit w-fit">
              {option}
            </div>
          );
        });

      default:
        return {};
    }
  };
  return (
    <div className="text-xl p-10">
      <h1>Label</h1>
      <div className="flex gap-4 flex-col">
        {renderContent("text", ["TV", "Phone", "Laptop"])}
      </div>
      <div className="flex flex-col mt-10 gap-2">
        {renderContent("checkbox", [
          { value: "TV", label: "TV" },
          { value: "P", label: "Phone" },
          { value: "L", label: "Laptop" },
        ])}
      </div>
      <div className="flex flex-col mt-10 gap-2">
        {renderContent("stars", [3, 4, 5])}
      </div>

      <div className="flex flex-col mt-10 gap-2">
        {renderContent("prices", [
          "below 40.000",
          "40.000 -> 100.000",
          "over 100.000",
        ])}
      </div>
    </div>
  );
};

export default NavbarComponent;
