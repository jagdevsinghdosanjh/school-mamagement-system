export async function fetchStudents() {
  const response = await fetch('/api/students');
  return response.json();
}

export async function fetchExams() {
  const response = await fetch('/api/exams');
  return response.json();
}

export async function fetchReports(studentId) {
  const response = await fetch(`/api/reports/${studentId}`);
  return response.json();
}
