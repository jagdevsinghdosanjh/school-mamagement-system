import { useEffect, useState } from "react";
import { fetchReports } from "../services/api";

export default function StudentReport({ studentId }) {
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetchReports(studentId).then(setReport);
  }, [studentId]);

  if (!report) return <p>Loading...</p>;

  return (
    <div>
      <h2>Progress Report for Student ID: {studentId}</h2>
      <p>Total Score: {report.totalScore}</p>
      <p>Average Score: {report.averageScore}</p>
      <h3>Exam Details:</h3>
      <ul>
        {report.exams.map((exam) => (
          <li key={exam.id}>{exam.subject}: {exam.score} marks</li>
        ))}
      </ul>
    </div>
  );
}
