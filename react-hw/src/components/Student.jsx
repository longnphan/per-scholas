import "./Student.css";
import StudentItem from "./StudentItem";

function Student({ studentData }) {
  return (
    <div className="student-card-container">
      {studentData.map(student => (
        <StudentItem student={student} />
      ))}
    </div>
  );
}

export default Student;
