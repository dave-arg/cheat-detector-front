import "./Report.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Evidence from "./Evidence";
import Title from "./Title";

const API_URL = "http://localhost:5000/api";

const Report = () => {
  const { eui } = useParams();
  const [evidences, setEvidences] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/evidence/${eui}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEvidences(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [eui]);

  if (evidences.length === 0) {
    return <></>;
  }

  return (
    <>
      <Title title={`Report for student with ID ${eui}`} />
      <div className="evidences">
        <div>
          <div className="evidence-title">BP evidences</div>
          {evidences
            .filter((evidence) => evidence.isBloodPressureMonitor === true)
            .map((evidence) => (
              <Evidence key={evidence.eui} evidence={evidence} />
            ))}
        </div>
        <div>
          <div className="evidence-title">HR evidences</div>
          {evidences
            .filter((evidence) => evidence.isBloodPressureMonitor === false)
            .map((evidence) => (
              <Evidence key={evidence.eui} evidence={evidence} />
            ))}
        </div>
      </div>
      <Title title={`Fraud`} />
    </>
  );
};

export default Report;
