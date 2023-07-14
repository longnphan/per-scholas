import StudentItem from "./StudentItem";

function Student({ studentData }) {
  const renderStudent = studentData.map((student) => (
    <StudentItem key={crypto.randomUUID()} student={student} />
  ));

  return <>{renderStudent}</>;
}

export default Student;
