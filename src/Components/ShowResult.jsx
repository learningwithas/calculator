import React, { useContext } from "react";
import { StoreContext } from "../Store/StoreContextProvider";

const ShowResult = () => {
  const { input } = useContext(StoreContext);

  return (
    <input
      type="text"
      placeholder="0"
      className="w-full mb-5 py-4 px-4 text-slate-700 outline-none text-2xl rounded-lg shadow-xl "
      value={input}
      readOnly
    />
  );
};

export default ShowResult;
