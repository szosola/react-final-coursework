import { useState } from "react";
import { Link } from "react-router-dom";
import propertiesData from "../data/properties.json"
import SearchForm from "../components/SearchForm";
import { filterProperties } from "../utils/filterProperties";

function SearchPage() {
  const [criteria, setCriteria] = useState({
    type: "Any",
    minPrice: null,
    maxPrice: null,
    minBeds: null,
    maxBeds: null,
    dateFrom: null,
    dateTo: null,
    postcode: "Any",
  });

  const filteredProperties = filterProperties(propertiesData.properties, criteria);

  return (
    <div>
      <SearchForm criteria={criteria} setCriteria={setCriteria} />

      <h2>Available Properties</h2>

      {filteredProperties.map((property) => (
        <div key={property.id}>
          <h3>{property.type}</h3>
          <p>{property.location}</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>Price: ${property.price.toLocaleString()}</p>

          <Link to={`/property/${property.id}`}>
            View Property
          </Link>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default SearchPage;