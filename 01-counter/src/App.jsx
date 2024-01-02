import useCounter from "./useCounter";

const App = () => {
  const { increment, reset, decrement, count } = useCounter(0);

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className=" max-w-80">
        <div className="flex items-center justify-center">
          <h1 className="text-blue-500 text-8xl py-8">{count}</h1>
        </div>
        <div className="flex items-center justify-evenly border border-black ">
          <button
            onClick={increment}
            className="  px-2 py-1 text-lg font-semibold bg-green-400 hover:bg-green-300 duration-300">
            Increment
          </button>
          <button
            onClick={reset}
            className=" border-r border-l border-black  px-2 py-1 text-lg font-semibold hover:bg-yellow-300 duration-300">
            Reset
          </button>
          <button
            onClick={decrement}
            className="  px-2 py-1 text-lg font-semibold bg-red-400 hover:bg-red-300 duration-300">
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
