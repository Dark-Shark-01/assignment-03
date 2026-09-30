import EmployeeCard from "./EmployeeCard";

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  return (
    <section className="employee-section">
      <div className="section-heading">
        <div>
          <h2>Employees</h2>
          <p>
            {employees.length} employee
            {employees.length !== 1 ? "s" : ""} found
          </p>
        </div>
      </div>

      <div className="employee-grid">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  );
};

export default EmployeeList;
