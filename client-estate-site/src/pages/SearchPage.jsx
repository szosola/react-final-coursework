import propertiesData from "../data/properties.json"

function SearchPage() {
  return (
    <div>
      <h2>Available Properties</h2>

      {propertiesData.properties.map((property) => (
        <div>
          <h3>{property.type}</h3>
          <p>{property.location}</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>Price: ${property.price.toLocaleString()}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default SearchPage;