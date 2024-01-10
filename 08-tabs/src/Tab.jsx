import CompanyTitle from "./CompanyTitle";

const Tab = (props) => {
  const { id, company, order, dates, duties, title } =
    props.details[props.index];
  return (
    <div className="max-w-screen-md  flex flex-col gap-3 mb-4">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <h3 className="text-2xl font-bold">{company}</h3>
      <p className="text-emerald-700">{dates}</p>
      <ul>
        {duties.map((duty, index) => (
          <li key={index}>{duty}</li>
        ))}
      </ul>
    </div>
  );
};
export default Tab;
