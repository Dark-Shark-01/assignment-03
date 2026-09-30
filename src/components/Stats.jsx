const Stats = ({ employees }) => {
  const totalEmployees = employees.length;

  const departments = new Set(
    employees.map((employee) => employee.department)
  ).size;

  const maleEmployees = employees.filter(
    (employee) => employee.gender === "Male"
  ).length;

  const femaleEmployees = employees.filter(
    (employee) => employee.gender === "Female"
  ).length;

  return (
    <section className="stats-grid">
      <div className="stat-card">
        <div className="stat-icon blue">👥</div>

        <div>
          <span>Total Employees</span>
          <strong>{totalEmployees}</strong>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon purple">▦</div>

        <div>
          <span>Departments</span>
          <strong>{departments}</strong>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon green">♂</div>

        <div>
          <span>Male Employees</span>
          <strong>{maleEmployees}</strong>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon orange">♀</div>

        <div>
          <span>Female Employees</span>
          <strong>{femaleEmployees}</strong>
        </div>
      </div>
    </section>
  );
};

export default Stats;
