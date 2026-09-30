import { useMemo, useState } from "react";

import "./App.css";

import Header from "./components/Header";
import Stats from "./components/Stats";
import SearchBar from "./components/SearchBar";
import EmployeeList from "./components/EmployeeList";
import EmptyState from "./components/EmptyState";
import EmployeeForm from "./components/EmployeeForm";

import initialEmployees from "./data/employees";

const App = () => {
  const [employees, setEmployees] = useState(initialEmployees);

  const [searchTerm, setSearchTerm] = useState("");

  const [department, setDepartment] = useState("All");

  const [isFormOpen, setIsFormOpen] = useState(false);

  const [editingEmployee, setEditingEmployee] = useState(null);

  const departments = useMemo(() => {
    return [...new Set(employees.map((employee) => employee.department))];
  }, [employees]);

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const search = searchTerm.toLowerCase().trim();

      const matchesSearch =
        employee.name.toLowerCase().includes(search) ||
        employee.employeeId.toLowerCase().includes(search) ||
        employee.department.toLowerCase().includes(search);

      const matchesDepartment =
        department === "All" ||
        employee.department === department;

      return matchesSearch && matchesDepartment;
    });
  }, [employees, searchTerm, department]);

  const handleOpenAddForm = () => {
    setEditingEmployee(null);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingEmployee(null);
  };

  const handleAddOrEditEmployee = (formData) => {
    if (editingEmployee) {
      setEmployees((previousEmployees) =>
        previousEmployees.map((employee) =>
          employee.id === editingEmployee.id
            ? {
                ...employee,
                ...formData,
              }
            : employee
        )
      );
    } else {
      const newEmployee = {
        id: Date.now(),
        ...formData,
      };

      setEmployees((previousEmployees) => [
        ...previousEmployees,
        newEmployee,
      ]);
    }

    handleCloseForm();
  };

  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
    setIsFormOpen(true);
  };

  const handleDeleteEmployee = (id) => {
    const employee = employees.find(
      (item) => item.id === id
    );

    const confirmed = window.confirm(
      `Are you sure you want to delete ${employee.name}?`
    );

    if (confirmed) {
      setEmployees((previousEmployees) =>
        previousEmployees.filter(
          (employee) => employee.id !== id
        )
      );
    }
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setDepartment("All");
  };

  return (
    <div className="app">
      <div className="background-shape shape-one"></div>
      <div className="background-shape shape-two"></div>

      <main className="container">
        <Header onAddEmployee={handleOpenAddForm} />

        <section className="hero">
          <div>
            <span className="eyebrow">WORKFORCE MANAGEMENT</span>

            <h2>
              Your people,
              <br />
              <span>organized beautifully.</span>
            </h2>

            <p>
              Keep track of your farm workforce with a simple,
              modern employee directory.
            </p>
          </div>

          <div className="hero-decoration">
            <div className="decoration-circle">
              <span>✦</span>
            </div>
          </div>
        </section>

        <Stats employees={employees} />

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          department={department}
          setDepartment={setDepartment}
          departments={departments}
        />

        {filteredEmployees.length > 0 ? (
          <EmployeeList
            employees={filteredEmployees}
            onEdit={handleEditEmployee}
            onDelete={handleDeleteEmployee}
          />
        ) : (
          <EmptyState
            searchTerm={searchTerm}
            department={department}
            onReset={handleResetFilters}
          />
        )}
      </main>

      <EmployeeForm
        isOpen={isFormOpen}
        onClose={handleCloseForm}
        onSave={handleAddOrEditEmployee}
        editingEmployee={editingEmployee}
      />
    </div>
  );
};

export default App;
