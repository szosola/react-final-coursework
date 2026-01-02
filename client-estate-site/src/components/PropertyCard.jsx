import { Link } from "react-router-dom";
import { useFavourites } from "../context/FavouritesContext";
import "./PropertyCard.css";

function PropertyCard({property}) {
  const { favourites, addFavourite, removeFavourite } = useFavourites();
  const isFav = favourites.includes(property.id);


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

        <div className="property-actions">
          <Link className="property-link" to={`/property/${property.id}`}>
            View Property
          </Link>

          <button
            type="button"
            className="fav-btn"
            onClick={() => (isFav ? removeFavourite(property.id) : addFavourite(property.id))}
            aria-label="Toggle favourite"
          >
            {isFav ? "★" : "☆"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;