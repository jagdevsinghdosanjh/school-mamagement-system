import { useEffect, useState } from "react";
import { fetchStudents } from "../services/api";


export default function StudentsList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents().then(setStudents);
  }, []);

  return (
    <div>
      <h2>Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name} ({student.email})</li>
        ))}
      </ul>
    </div>
  );
}
