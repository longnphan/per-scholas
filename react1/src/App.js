import { useEffect, useState } from "react";
import "./index.css";
import HomePage from "./components/HomePage";
import { data } from "./data";

function App() {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => setEmployeeList(data), []);

  return <HomePage />;
}

export default App;
