import { useState } from "react";

export default function useCounter(countValue) {
  const [count, setCount] = useState(countValue);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return { increment, decrement, reset, count };
}
