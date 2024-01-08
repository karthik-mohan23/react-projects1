import { useEffect } from "react";
import { useState } from "react";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setTours(json);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  return (
    <div>
      <div className="mt-20 text-center">
        <h1 className="text-7xl font-medium text-gray-700">
          Trending Destinations
        </h1>
        {tours.length === 0 && (
          <button
            onClick={fetchTours}
            className="mt-8 border border-gray-400 px-2 py-1 rounded-lg hover:bg-green-400 duration-300">
            Refetch
          </button>
        )}
      </div>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};
export default App;
