import { useState } from "react";

const ColorArray = ["#d57712", "#00b143", "#ac5920", "#cadbe1"];

const App = () => {
  const [color, setColor] = useState(ColorArray[0]);

  function randomIndexGenerator() {
    return Math.floor(Math.random() * ColorArray.length);
  }

  return (
    <div
      style={{ backgroundColor: color }}
      className={`  min-h-screen ]`}
      onClick={() => setColor(ColorArray[randomIndexGenerator()])}>
      App
    </div>
  );
};
export default App;
