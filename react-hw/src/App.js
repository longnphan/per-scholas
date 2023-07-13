import "./styles.css";
import { useState } from "react";
import { data } from "./data";
import Student from "./components/Student";

function App() {
  const [studentData, setStudentData] = useState(data);

  return (
    <div>
      <Student studentData={studentData} />
    </div>
  );
}

export default App;
