import { useState } from "react";
import text from "./data";

const App = () => {
  const [count, setCount] = useState(0);
  const [paragraph, setParagraph] = useState([]);

  const handleCount = () => {
    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 1;
    }
    if (amount > 8) {
      amount = 8;
    }
    const newParagraph = text.filter((para, index) => index < amount);
    setCount(amount);
    setParagraph(newParagraph);
  };

  return (
    <div className="max-w-screen-md mx-auto my-40">
      <div className="flex justify-center">
        <input
          type="text"
          name=""
          className="border border-blue-500"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button
          onClick={handleCount}
          className="border border-gray-400 px-2 py-1 hover:bg-slate-500 hover:text-white duration-300 rounded-lg">
          Generate
        </button>
      </div>
      <div className="mt-10">
        {paragraph.map((para) => (
          <p className="mb-5">- {para}</p>
        ))}
      </div>
    </div>
  );
};
export default App;
