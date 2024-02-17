import { useEffect, useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [includeCapital, setIncludeCapital] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [passwordLength, setPasswordLength] = useState(8);

  const [generate, setGenerate] = useState(false);

  const changePasswordLength = (event) => {
    setPasswordLength(event.target.value);
  };

  const handleCapital = () => {
    setIncludeCapital(!includeCapital);
  };
  const handleSymbols = () => {
    setIncludeSymbols(!includeSymbols);
  };

  const handleGenerate = () => {
    setGenerate(!generate);
  };

  useEffect(() => {
    function generatePassword() {
      let string = "abcdefghijklmnopqrstuvwxyz0123456789";
      let newPassword = "";
      function generateRandomIndex() {
        return Math.floor(Math.random() * string.length);
      }

      if (includeCapital) {
        string += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      if (includeSymbols) {
        string += "!@#$%^&*()[]/><";
      }

      for (let i = 0; i < passwordLength; i++) {
        newPassword += string[generateRandomIndex()];
      }
      return newPassword;
    }

    setPassword(generatePassword());
  }, [includeCapital, generate, includeSymbols, passwordLength]);

  return (
    <div className="bg-gray-950 w-[90%] max-w-xl rounded-lg">
      <div className="p-8">
        <div className=" flex items-center gap-2 mb-4">
          <div className="bg-gray-100 rounded p-2 text-xl w-full ">
            {password}
          </div>
          <button
            onClick={handleGenerate}
            className="bg-yellow-300 text-xl px-3 py-2 rounded text-black cursor-pointer hover:bg-yellow-500 duration-300">
            Generate
          </button>
          <button className="bg-blue-600 text-xl px-3 py-2 rounded text-white cursor-pointer hover:bg-blue-800 duration-300">
            Copy
          </button>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <input
              className="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200"
              type="range"
              value={passwordLength}
              min={8}
              max={20}
              step={1}
              onChange={changePasswordLength}
              id="length"
            />
            <label className="text-white text-lg" htmlFor="length">
              Length({passwordLength})
            </label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              name=""
              id="uppercase"
              value={includeCapital}
              checked={includeCapital}
              onChange={handleCapital}
            />
            <label className="text-white text-lg" htmlFor="uppercase">
              Capitals
            </label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              name=""
              id="symbols"
              value={includeSymbols}
              checked={includeSymbols}
              onChange={handleSymbols}
            />
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
