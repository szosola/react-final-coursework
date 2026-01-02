import { Link } from "react-router-dom";
import "./PropertyCard.css";

function PropertyCard({property}) {
  return (
    <div className="property-card">
      <img
        className="property-image"
        src={`/${property.picture}`}
        alt={`${property.type} in ${property.location}`}
      />

      <div className="property-info">
        <h3 className="property-title">{property.type}</h3>
        <p className="property-location">{property.location}</p>

        <p className="property-desc">
          {property.description.replace(/<br\s*\/?>/gi, " ").slice(0, 120)}...
        </p>

        <p className="property-meta">
          Bedrooms: {property.bedrooms}
        </p>

        <p className="property-price">
          £{property.price.toLocaleString()}
        </p>

        <Link className="property-link" to={`/property/${property.id}`}>
          View Property
        </Link>
      </div>
    </div>
  );
}

export default PropertyCard;