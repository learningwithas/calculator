import React from "react";

const Container = ({ children }) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-indigo-500 to-pink-500">
      <div className="calculator-container bg-slate-700 py-5 px-5 rounded-lg text-white  ">
        {children}
      </div>
    </div>
  );
};

export default Container;
