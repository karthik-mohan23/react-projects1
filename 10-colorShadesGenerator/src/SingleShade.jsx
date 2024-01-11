const SingleShade = ({ value, index }) => {
  return (
    <div
      className={` w-60 max-w-60 h-24 cursor-pointer  ${
        index > 10 ? "text-white" : "text-black"
      }`}
      style={{ background: `#${value.hex}` }}>
      <p>{value.weight}</p>
      <p>#{value.hex}</p>
    </div>
  );
};
export default SingleShade;
