const Header = ({ onAddEmployee }) => {
  return (
    <header className="header">
      <div className="brand-area">
        <div className="brand-icon">
          <span>✦</span>
        </div>

        <div>
          <h1>Employee Hub</h1>
          <p>Farm workforce directory</p>
        </div>
      </div>

      <button className="add-button" onClick={onAddEmployee}>
        <span>+</span>
        Add Employee
      </button>
    </header>
  );
};

export default Header;
