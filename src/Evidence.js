import "./Evidence.css";

const Evidence = ({ evidence }) => {
  console.log(evidence);
  return (
    <div className="evidence">
      <div>value: {evidence.value}</div>
      <div>timestamp: {getDate(evidence.timestamp)}</div>
    </div>
  );
};

export default Evidence;

const getDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString();
};
