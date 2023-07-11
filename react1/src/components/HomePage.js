import Search from "./Search";
import EmployeeList from "./EmployeeList";
import Header from "./Header";
import "./list.css";

function HomePage() {
  return (
    <div className="home">
      <Header title="Employee Directory" />
      <Search />
      <EmployeeList />
    </div>
  );
}

export default HomePage;
