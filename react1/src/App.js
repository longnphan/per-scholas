import { useState } from "react";
import "./index.css";
import HomePage from "./components/HomePage";
import { data } from "./data";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [employeeList, setEmployeeList] = useState(data);
  const [filteredEmployeeList, setFilteredEmployeeList] =
    useState(employeeList);

  const handleSearchInput = e => {
    setSearchInput(e.target.value);
  };

  return <HomePage handleSearchInput={handleSearchInput} />;
}

export default App;
