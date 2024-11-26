import "./ExamSimulator.css";

const ExamSimulator = ({ students }) => {
  const sendSamples = () => {
    const samplesBP = students.map((student) => {
      return {
        eui: student.bloodPressureMonitorEui,
        model: "BPA",
        version: "1.3",
        payload: {
          bp_sys: 500, // This value is hardcoded for testing purposes
          bp_dia: 85,
        },
        ts: Math.floor(Date.now() / 1000),
      };
    });

    const samplesHR = students.map((student, index) => {
      if (index % 2 === 0) {
        return {
          eui: student.heartRateMonitorEui,
          model: "“X1-S",
          version: "1.1",
          payload: {
            hr: 300, // This value is hardcoded for testing purposes
            hrt: 40,
          },
          ts: Math.floor(Date.now() / 1000),
        };
      } else {
        return {
          eui: student.heartRateMonitorEui,
          fw: "X1-S/1.0",
          pulse: 1, // This value is hardcoded for testing purposes
          ts: Math.floor(Date.now() / 1000),
        };
      }
    });

    samplesBP.forEach((sample) => {
      fetch("http://localhost:5000/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sample),
      });
    });

    samplesHR.forEach((sample) => {
      fetch("http://localhost:5000/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sample),
      });
    });
  };

  return (
    <button className="start-exam" onClick={sendSamples}>
      Send Data Samples
    </button>
  );
};

export default ExamSimulator;
