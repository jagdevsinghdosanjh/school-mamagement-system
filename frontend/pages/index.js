import StudentsList from "../components/StudentsList";
import ExamsList from "../components/ExamsList";
import StudentReport from "../components/StudentReport";

export default function Dashboard() {
  return (
    <div>
      <h1>School Management System Dashboard</h1>
      <StudentsList />
      <ExamsList />
      <StudentReport studentId="some-student-id" />
    </div>
  );
}
