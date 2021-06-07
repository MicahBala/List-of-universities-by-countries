import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import diffCountries from "./countries";
import Pagination from "./components/Pagination";

const App = () => {
  const [universities, setUniversities] = useState([]);
  const [country, setCountry] = useState("Nigeria");
  const [loading, setLoading] = useState(true);

  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Total Number of pages
  const pageNumbers = [];

  const numberOfPages = Math.ceil(universities.length / itemsPerPage);

  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i);
  }

  // Pick the last item on the whole list
  const indexOfLastItem = currentPage * itemsPerPage;

  // Pick first item on each page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // current active page items
  const currentPageItems = universities.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handleClick = (e) => {
    setCurrentPage(e.target.innerText);
  };

  useEffect(() => {
    fetch(`http://universities.hipolabs.com/search?country=${country}`)
      .then((response) => response.json())
      .then((universities) => {
        setUniversities(universities);
        setLoading(false);
        setItemsPerPage(10);
      });
  }, [country]);

  const handleSelect = (value) => {
    setCountry(value);
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <div className="container">
        <Main
          countries={diffCountries}
          defaultCountry={country}
          currentPageItems={currentPageItems}
          handleSelect={handleSelect}
          loading={loading}
        />
        <Pagination
          pageNumbers={pageNumbers}
          handleClick={handleClick}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default App;
