import { useEffect, useState } from "react";
import { fetchExams } from "../services/api";

export default function ExamsList() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    fetchExams().then(setExams);
  }, []);

  return (
    <div>
      <h2>Exams</h2>
      <ul>
        {exams.map((exam) => (
          <li key={exam.id}>{exam.subject}: {exam.score} marks</li>
        ))}
      </ul>
    </div>
  );
}
