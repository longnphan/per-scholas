import "./list.css";

function EmployeeListItem({ employeeInfo }) {
  const { headshot, id, name, title } = employeeInfo;
  return (
    <div className="item" key={id}>
      <img src={headshot} alt="headshot" />
      <div>
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default EmployeeListItem;
