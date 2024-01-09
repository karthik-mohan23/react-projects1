import MenuCard from "./MenuCard";

const MenuCards = ({ menuDatas }) => {
  return (
    <div className="flex flex-wrap gap-10 my-10">
      {menuDatas.map((data) => (
        <MenuCard key={data.id} {...data} />
      ))}
    </div>
  );
};
export default MenuCards;
