import Categories from "./components/Categories";
import MenuCards from "./components/MenuCards";
import Title from "./components/Title";
import menuDatas from "../public/data";
import { useState } from "react";

const categoriesList = menuDatas.map((data) => data.category);
const uniqueCategories = new Set(categoriesList);

const App = () => {
  const [menu, setMenu] = useState(menuDatas);

  const filterMenu = (category) => {
    if (category === "all") {
      return setMenu(menuDatas);
    }
    const newMenu = menuDatas.filter((data) => data.category === category);
    setMenu(newMenu);
  };

  return (
    <div>
      <div className="w-[90%] mx-auto mt-28 max-w-screen-md">
        <Title />
        <Categories
          uniqueCategories={uniqueCategories}
          filterMenu={filterMenu}
        />
        <MenuCards menuDatas={menu} />
      </div>
    </div>
  );
};
export default App;
