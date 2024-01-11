import SingleShade from "./SingleShade";

const ColorShades = ({ colorValues }) => {
  return (
    <div className="flex flex-wrap ">
      {colorValues.map((value, index) => (
        <SingleShade value={value} index={index} key={index} />
      ))}
    </div>
  );
};
export default ColorShades;
