const Pagination = ({ pageNumbers, handleClick, currentPage }) => {
  return (
    <div className="pagination">
      {pageNumbers.map((pageNumber) => {
        return (
          <ul key={pageNumber} className="pages">
            <li
              onClick={(e) => handleClick(e)}
              className={currentPage == pageNumber ? "active" : null}
            >
              {pageNumber}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Pagination;
