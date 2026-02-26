import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-3 items-center mb-3">
      <p className="text-gray-500 ">
        {text1}
        <span className="textgray-700 font-medium">{text2}</span>
      </p>
      <p className="w-8 h-0.5 bg-gray-400"></p>
    </div>
  );
};

export default Title;
