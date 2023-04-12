import React from "react";

const Error = ({children}) => {
  return (
    <div className="bg-red-700 text-center text-white font-bold mt-4 py-2">
      <p>{children}</p>
    </div>
  ) 
};

export default Error;
