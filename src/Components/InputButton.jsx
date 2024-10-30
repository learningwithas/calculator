import React, { useContext } from "react";
import { StoreContext } from "../Store/StoreContextProvider";

const InputButton = () => {
  const { handleClick } = useContext(StoreContext);

  const symbols = ["+", "-", "*", "/", ".", "%", "="];

  const calValues = [
    "AC",
    "1",
    "+",
    "2",
    "3",
    "-",
    "4",
    "5",
    "*",
    "6",
    "7",
    "/",
    "8",
    "9",
    ".",
    "0",
    "=",
    "%",
  ];

  return (
    <div className="button-container grid grid-cols-3  gap-4">
      {calValues.map((value) => {
        return (
          <button
            key={value}
            className={`${
              value === "AC"
                ? "bg-red-600 hover:bg-red-500"
                : symbols.includes(value)
                ? "bg-blue-600 hover:bg-blue-500"
                : "bg-slate-600 hover:bg-slate-500"
            } px-7 py-3 text-2xl rounded-lg transition duration-200 transform hover:scale-105 active:scale-95 shadow-xl`}
            onClick={() => handleClick(value)}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
};

export default InputButton;
