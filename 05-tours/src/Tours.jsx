import Tour from "./Tour";

const Tours = (props) => {
  return (
    <div className="flex flex-wrap gap-10 w-[75%] mx-auto my-20">
      {props.tours.map((tour) => (
        <Tour key={tour.id} {...tour} removeTour={props.removeTour} />
      ))}
    </div>
  );
};
export default Tours;
