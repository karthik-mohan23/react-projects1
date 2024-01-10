import { useEffect, useState } from "react";
import Tab from "./Tab";
import CompanyTitle from "./CompanyTitle";

const url = "https://course-api.com/react-tabs-project";

const Tabs = () => {
  const [details, setDetails] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchData = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setDetails(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const setActiveIndex = (number) => setIndex(number);

  if (details.length === 0) return <h1>Loading...</h1>;
  return (
    <div className="flex max-w-screen-lg justify-between mx-auto mt-16">
      <div>
        {details.map((info, i) => (
          <CompanyTitle
            key={info.id}
            {...info}
            i={i}
            index={index}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
      <div>
        <Tab details={details} index={index} />
      </div>
    </div>
  );
};
export default Tabs;
