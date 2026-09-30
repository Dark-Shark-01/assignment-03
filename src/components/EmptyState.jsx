const EmptyState = ({ searchTerm, department, onReset }) => {
  return (
    <div className="empty-state">
      <div className="empty-icon">⌕</div>

      <h2>No employees found</h2>

      <p>
        We couldn't find any employees matching your current
        search or department filter.
      </p>

      {(searchTerm || department !== "All") && (
        <button className="reset-button" onClick={onReset}>
          Clear Filters
        </button>
      )}
    </div>
  );
};

export default EmptyState;
