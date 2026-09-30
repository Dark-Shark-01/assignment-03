const SearchBar = ({
  searchTerm,
  setSearchTerm,
  department,
  setDepartment,
  departments,
}) => {
  return (
    <section className="toolbar">
      <div className="search-wrapper">
        <span className="search-icon">⌕</span>

        <input
          type="text"
          placeholder="Search by name, ID or department..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        {searchTerm && (
          <button
            className="clear-search"
            onClick={() => setSearchTerm("")}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>

      <div className="filter-wrapper">
        <span className="filter-icon">≡</span>

        <select
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
        >
          <option value="All">All Departments</option>

          {departments.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default SearchBar;
