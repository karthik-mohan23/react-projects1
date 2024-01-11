import { useState } from "react";

const ColorInput = ({ changeColor }) => {
  const [color, setColor] = useState("");

  const handleColor = (e) => {
    e.preventDefault();
    changeColor(color);
  };

  return (
    <div className="flex justify-center mt-28 my-20 ">
      <form onSubmit={handleColor}>
        <label className="text-2xl me-4 font-semibold">Input color</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="me-2"
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="border border-blue-600 me-2"
          placeholder="#d94821"
        />
        <button
          type="submit"
          className="bg-slate-500 text-white hover:bg-slate-800 duration-300 px-2 py-1 rounded-lg">
          Generate
        </button>
      </form>
    </div>
  );
};
export default ColorInput;
