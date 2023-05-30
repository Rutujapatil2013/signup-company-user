import { useState } from "react";
import "./Company.css";

function Company() {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);

  const handleButtonClick = () => {
    // Make API call here and set the state
    fetch("http://localhost:8200/companyNames")
      .then((response) => response.json())
      .then((data) => {
        // console.log("The data fetched", data);
        setCompanies(data);
      });
  };

  const handleDropdownChange = (event) => {
    setSelectedCompany(event.target.value);
    // console.log(event.target.value);
    // Make another API call here and display the value
    fetch(`http://localhost:8200/company/${event.target.value}`)
      .then((response) => response.text())
      .then((data) => {
        const val=JSON.parse(data)
        console.log(val)
        setSelectedValue(val);
      });
  };

  const renderDropdown = () => {
    if (companies.length > 0) {
      return (
        <select value={selectedCompany} onChange={handleDropdownChange}>
          <option value="">Select a company</option>
          {companies.map((company) => (
            <option key={company} value={company}>
              {company}
            </option>
          ))}
        </select>
      );
    }
    return null;
  };

  const renderSelectedValue = () => {
    if (selectedValue !== null) {
      return <p>The selected company id is : {selectedValue}</p>;
    }
  };

  return (
    <div className="class">
      <button onClick={handleButtonClick}>Add Companies</button>
      <br />
      {renderDropdown()}
      {renderSelectedValue()}
    </div>
  );
}

export default Company;