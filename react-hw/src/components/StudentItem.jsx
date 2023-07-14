import Score from "./Score";
import "./StudentItem.css";

function StudentItem({ student }) {
  const { bio, name } = student;

  const renderScore = student["scores"].map((studentScore) => (
    <Score key={crypto.randomUUID()} studentScore={studentScore} />
  ));

  return (
    <div className="student-container">
      <h1>Student Name: {name}</h1>
      <h2>Bio: {bio}</h2>
      {renderScore}
    </div>
  );
}

export default StudentItem;
