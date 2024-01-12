import { useState } from "react";
import links from "./links";

const Navbar = () => {
  const [isNavlinksVisible, setIsNavlinksVisible] = useState(false);

  return (
    <nav className="shadow-lg">
      <div className="max-w-screen-lg w-[90%] mx-auto py-4 ">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">Logo</h2>

          <ul className="  gap-10 hidden md:flex cursor-pointer">
            {links.map((link) => (
              <li
                key={link.id}
                className="text-xl hover:text-blue-400 duration-300 ">
                {link.text}
              </li>
            ))}
          </ul>

          {isNavlinksVisible ? (
            <p
              onClick={() => setIsNavlinksVisible((prev) => !prev)}
              className="text-2xl  md:hidden cursor-pointer">
              X
            </p>
          ) : (
            <p
              className="text-2xl  md:hidden cursor-pointer"
              onClick={() => setIsNavlinksVisible((prev) => !prev)}>
              =
            </p>
          )}
        </div>
        {/* Only visible in small screen */}
        {isNavlinksVisible && (
          <ul className="flex flex-col gap-2 pt-4 duration-300 transition-all cursor-pointer md:hidden">
            {links.map((link) => (
              <li
                key={link.id}
                className="text-xl hover:pl-2 duration-300 hover:bg-blue-300">
                {link.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
