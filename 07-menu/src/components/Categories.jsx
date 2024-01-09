const Categories = ({ uniqueCategories, filterMenu }) => {
  return (
    <div className="flex justify-evenly">
      {["all", ...uniqueCategories].map((category) => (
        <button
          onClick={() => filterMenu(category)}
          key={category}
          className="bg-yellow-300 px-2 py-1 rounded-xl capitalize hover:bg-yellow-500 duration-300">
          {category}
        </button>
      ))}
    </div>
  );
};
export default Categories;
