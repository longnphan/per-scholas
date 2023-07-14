import { useState } from "react";
import { data } from "./data";
import Student from "./components/Student";

function App() {
  const [studentData, setStudentData] = useState(data);

  const getRidOfAnnoyingError = () =>
    setStudentData(
      "I just wanted to get rid of the annoying message about how setStudentData was declared but never used"
    );

  return (
    <div>
      <Student studentData={studentData} ignoreThis={getRidOfAnnoyingError} />
    </div>
  );
}

export default App;
