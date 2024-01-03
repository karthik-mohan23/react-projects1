const Accordion = ({ isOpen, handleId, id, title, description }) => {
  return (
    <div
      className=" w-[90%] max-w-80 border border-black rounded-md p-4 mb-4"
      key={id}>
      <div className="flex justify-between">
        <h2>{title}</h2>
        <p
          className="text-3xl font-bold cursor-pointer duration-1000 ease-in-out"
          onClick={() => handleId(id)}>
          {isOpen ? "-" : "+"}
        </p>
      </div>
      {isOpen && <p>{description}</p>}
    </div>
  );
};
export default Accordion;
