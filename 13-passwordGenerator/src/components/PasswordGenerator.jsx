const PasswordGenerator = () => {
  return (
    <div className="bg-gray-950 w-[90%] max-w-xl rounded-lg">
      <div className="p-8">
        <div className=" flex items-center gap-2 mb-4">
          <div className="bg-gray-100 rounded p-2 text-xl w-full ">
            Password
          </div>
          <button className="bg-blue-600 text-xl px-3 py-2 rounded text-white cursor-pointer hover:bg-blue-800 duration-300">
            Copy
          </button>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <input
              className="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200"
              type="range"
              min={8}
              max={20}
              name=""
              id="length"
            />
            <label className="text-white text-lg" htmlFor="length">
              Length
            </label>
          </div>
          <div className="flex gap-2 items-center">
            <input type="checkbox" name="" id="uppercase" />
            <label className="text-white text-lg" htmlFor="uppercase">
              Uppercase
            </label>
          </div>
          <div className="flex gap-2 items-center">
            <input type="checkbox" name="" id="symbols" />
            <label className="text-white text-lg" htmlFor="symbols">
              Symbols
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PasswordGenerator;
