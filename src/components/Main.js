import { FaLink } from "react-icons/fa";
import LoadingPage from "./Loading";

let Main = ({
  currentPageItems,
  countries,
  defaultCountry,
  handleSelect,
  loading,
}) => {
  return (
    <div className="content">
      <div className="select-country">
        <p>List of Universities based on countries</p>
        <select onChange={(e) => handleSelect(e.target.value)}>
          <option value={defaultCountry}>{defaultCountry}</option>
          {countries.map((country, index) => {
            const { name } = country;

            return (
              <option key={index} value={name}>
                {name}
              </option>
            );
          })}
        </select>
      </div>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="cards">
          {currentPageItems.map((university, index) => {
            const { name, country, web_pages, alpha_two_code } = university;
            return (
              <div className="card" key={index}>
                <div className="card-side"></div>
                <div className="card-content">
                  <h3>{name}</h3>
                  <p>
                    {country} ({alpha_two_code})
                  </p>
                  <a href={web_pages}>
                    <FaLink /> Website
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Main;
