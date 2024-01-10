const CompanyTitle = ({ id, company, setActiveIndex, index, i }) => {
  return (
    <h3
      onClick={() => setActiveIndex(i)}
      className={`text-xl font-semibold mb-4 cursor-pointer ${
        i === index && "text-emerald-700 "
      }`}>
      {company}
    </h3>
  );
};
export default CompanyTitle;
