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
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {option.label}
              </label>
            </div>
          );
        });

      default:
        return {};
    }
  };
  return (
    <div className="">
      <h1>Label</h1>
      <div className="flex gap-4 flex-col">
        {renderContent("text", ["TV", "Phone", "Laptop"])}
      </div>
      <div className="flex gap-4 flex-row">
        {renderContent("checkbox", [
          { value: "TV", label: "TV" },
          { value: "P", label: "Phone" },
          { value: "L", label: "Laptop" },
        ])}
      </div>
    </div>
  );
};

export default NavbarComponent;
