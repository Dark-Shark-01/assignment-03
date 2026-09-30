const EmployeeCard = ({ employee, onEdit, onDelete }) => {
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <article className="employee-card">
      <div className="card-top">
        <div className="employee-avatar">
          {getInitials(employee.name)}
        </div>

        <div className="employee-main">
          <h3>{employee.name}</h3>
          <p>{employee.employeeId}</p>
        </div>

        <span
          className={`gender-badge ${
            employee.gender === "Female" ? "female" : "male"
          }`}
        >
          {employee.gender}
        </span>
      </div>

      <div className="department-row">
        <span className="department-dot"></span>
        {employee.department}
      </div>

      <div className="details">
        <div className="detail-row">
          <span className="detail-label">Phone</span>
          <span className="detail-value">{employee.phone}</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Local Address</span>
          <span className="detail-value">{employee.localAddress}</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Permanent Address</span>
          <span className="detail-value">
            {employee.permanentAddress}
          </span>
        </div>
      </div>

      <div className="card-actions">
        <button className="edit-button" onClick={() => onEdit(employee)}>
          <span>✎</span>
          Edit
        </button>

        <button
          className="delete-button"
          onClick={() => onDelete(employee.id)}
        >
          <span>⌫</span>
          Delete
        </button>
      </div>
    </article>
  );
};

export default EmployeeCard;
