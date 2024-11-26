import "./Student.css";
import { useNavigate } from "react-router-dom";

const Student = ({ student }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    student.isCheating && navigate(`/report/${student.eui}`);
  };

  return (
    <div
      className={student.isCheating ? "invalid-student" : "valid-student"}
      onClick={handleClick}
    >
      <div>{student.name}</div>
      <div>{student.eui}</div>
      {student.isCheating && <div>Fraud Warning</div>}
    </div>
  );
};

export default Student;
