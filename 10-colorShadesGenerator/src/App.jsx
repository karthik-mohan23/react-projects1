import { useState } from "react";
import Values from "values.js";
import ColorInput from "./ColorInput";
import ColorShades from "./ColorShades";

const App = () => {
  const [colorValues, setColorValues] = useState(new Values("#f15025").all(10));

  const changeColor = (color) => {
    try {
      const newColor = new Values(color).all(10);
      setColorValues(newColor);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <ColorInput changeColor={changeColor} />
      <ColorShades colorValues={colorValues} />
    </div>
  );
};
export default App;
