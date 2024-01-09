const MenuCard = ({ id, title, category, price, img, desc }) => {
  return (
    <div className="max-w-52 flex flex-col gap-2">
      <img src={img} alt="" className="h-32 object-cover w-full" />
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="font-medium">{price}</p>
      <p>{category}</p>
      <p>{desc.substring(0, 30)}...</p>
    </div>
  );
};
export default MenuCard;
