import { useState } from "react";

const BgChanger = () => {
  const [bgColor, setBgColor] = useState("red");

  function changeBgColor(color) {
    setBgColor(color);
  }

  return (
    <div
      className={`min-h-screen w-full relative`}
      style={{ background: bgColor }}>
      <div className=" w-80 h-28 rounded-lg bg-white absolute bottom-5 left-1/2  -translate-x-1/2  ">
        <div className=" flex justify-between p-5">
          <div
            className="w-16 h-16 rounded-full bg-blue-500 cursor-pointer"
            onClick={() => changeBgColor("blue")}></div>
          <div
            className="w-16 h-16 rounded-full bg-red-500 cursor-pointer"
            onClick={() => changeBgColor("red")}></div>
          <div
            className="w-16 h-16 rounded-full bg-yellow-500 cursor-pointer"
            onClick={() => changeBgColor("yellow")}></div>
        </div>
      </div>
    </div>
  );
};
export default BgChanger;
