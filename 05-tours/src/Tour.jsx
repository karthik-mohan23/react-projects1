import { useState } from "react";

const Tour = (props) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="max-w-96">
      <div className="mb-4">
        <img
          src={props.image}
          alt={props.title}
          className="object-cover w-full h-[284px]"
        />
      </div>
      <div className="mb-4">
        <h2 className="font-semibold text-2xl mb-4">{props.name}</h2>
        <h2 className="text-lg">
          {readMore ? props.info : props.info.substring(0, 200) + "...."}
        </h2>
        <button
          onClick={() => setReadMore((prev) => !prev)}
          className="text-green-700 text-base hover:text-green-500">
          {readMore ? "Read less" : "Read more"}
        </button>
      </div>
      <button
        onClick={() => props.removeTour(props.id)}
        className="border border-red-600 px-2 py-1 rounded-lg hover:bg-red-500 hover:text-white hover:shadow-2xl duration-300">
        Not interested
      </button>
    </div>
  );
};
export default Tour;
