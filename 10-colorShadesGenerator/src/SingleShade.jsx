const SingleShade = ({ value, index }) => {
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${value.hex}`);
      } catch (error) {
        alert("Failed to copy color to clipboard");
      }
    } else {
      alert("Failed to copy color to clipboard");
    }
  };
  return (
    <div
      onClick={saveToClipboard}
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
