import "./App.css";
import { useEffect, useState } from "react";
import Student from "./Student";
import Title from "./Title";
import ExamSimulator from "./ExamSimulator";

const API_URL = "http://localhost:5000/api";

const Home = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = () => {
      fetch(`${API_URL}/student`)
        .then((response) => response.json())
        .then((data) => {
          setStudents(data);
        })
        .catch((error) => {
          console.error("Error fetching students:", error);
        });
    };

    fetchStudents();
    const interval = setInterval(fetchStudents, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <ExamSimulator students={students} />
      <div className="students-list">
        <Title title="Students" />
        {students.length === 0 ? (
          <div>No students found.</div>
        ) : (
          students.map((student) => (
            <Student key={student.eui} student={student} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
