import { useEffect, useState } from "react";

const emptyForm = {
  name: "",
  employeeId: "",
  department: "",
  gender: "",
  phone: "",
  localAddress: "",
  permanentAddress: "",
};

const EmployeeForm = ({
  isOpen,
  onClose,
  onSave,
  editingEmployee,
}) => {
  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    if (editingEmployee) {
      setFormData({
        name: editingEmployee.name,
        employeeId: editingEmployee.employeeId,
        department: editingEmployee.department,
        gender: editingEmployee.gender,
        phone: editingEmployee.phone,
        localAddress: editingEmployee.localAddress,
        permanentAddress: editingEmployee.permanentAddress,
      });
    } else {
      setFormData(emptyForm);
    }
  }, [editingEmployee, isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSave(formData);

    setFormData(emptyForm);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <span className="modal-label">
              {editingEmployee ? "EDIT PROFILE" : "NEW PROFILE"}
            </span>

            <h2>
              {editingEmployee
                ? "Edit Employee"
                : "Add Employee"}
            </h2>

            <p>
              {editingEmployee
                ? "Update employee information below."
                : "Enter the employee details below."}
            </p>
          </div>

          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Arindam Das"
                required
              />
            </div>

            <div className="form-group">
              <label>Employee ID</label>

              <input
                type="text"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                placeholder="e.g. WB-011"
                required
              />
            </div>

            <div className="form-group">
              <label>Department</label>

              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Human Resources">
                  Human Resources
                </option>
                <option value="Operations">Operations</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>

            <div className="form-group">
              <label>Gender</label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label>Phone Number</label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 9876543210"
                pattern="[0-9]{10}"
                title="Please enter a 10-digit phone number"
                required
              />
            </div>

            <div className="form-group full-width">
              <label>Local Address</label>

              <textarea
                name="localAddress"
                value={formData.localAddress}
                onChange={handleChange}
                placeholder="Enter current/local address"
                rows="2"
                required
              ></textarea>
            </div>

            <div className="form-group full-width">
              <label>Permanent Address</label>

              <textarea
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleChange}
                placeholder="Enter permanent address"
                rows="2"
                required
              ></textarea>
            </div>
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="cancel-button"
              onClick={onClose}
            >
              Cancel
            </button>

            <button type="submit" className="save-button">
              {editingEmployee ? "Save Changes" : "Add Employee"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
