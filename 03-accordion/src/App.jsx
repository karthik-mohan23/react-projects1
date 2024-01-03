import { useState } from "react";
import Accordion from "./Accordion";

const arrayOfObjects = [
  {
    id: 1,
    title: "Object 1",
    description: "This is the description for Object 1.",
  },
  {
    id: 2,
    title: "Object 2",
    description: "This is the description for Object 2.",
  },
  {
    id: 3,
    title: "Object 3",
    description: "This is the description for Object 3.",
  },
];

const App = () => {
  const [accordionId, setAccordionId] = useState(null);

  function handleId(id) {
    accordionId === id ? setAccordionId(null) : setAccordionId(id);
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {arrayOfObjects.map((item) => (
        <Accordion
          handleId={handleId}
          isOpen={accordionId === item.id}
          key={item.id}
          title={item.title}
          description={item.description}
          id={item.id}
        />
      ))}
    </div>
  );
};
export default App;
