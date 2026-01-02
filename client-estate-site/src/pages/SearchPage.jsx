import { useState } from "react";
import propertiesData from "../data/properties.json"
import SearchForm from "../components/SearchForm";
import { filterProperties } from "../utils/filterProperties";
import PropertyCard from "../components/PropertyCard";
import FavouritesPanel from "../components/FavouritesPanel";
import "./SearchPage.css";

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
    <div className="search-page">
      <FavouritesPanel />
      <SearchForm criteria={criteria} setCriteria={setCriteria} />

      <h2>Available Properties</h2>

      {filteredProperties.length === 0 && <p>No properties match your search.</p>}

      <div className="results-grid">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;