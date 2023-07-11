import EmployeeListItem from "./EmployeeListitem";
import { data } from "../data";

function EmployeeList() {
  const renderList = data.map((employee) => (
    <EmployeeListItem key={employee.id} employeeInfo={employee} />
  ));

  return <>{renderList}</>;
}

export default EmployeeList;
