import Search from "./Search";
import EmployeeList from "./EmployeeList";
import Header from "./Header";
import "./list.css";

function HomePage({ handleSearchInput }) {
  return (
    <div className="home">
      <Header title="Employee Directory" />
      <Search handleSearchInput={handleSearchInput} />
      <EmployeeList />
    </div>
  );
}

export default HomePage;
