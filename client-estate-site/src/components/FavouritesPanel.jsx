import { Link } from "react-router-dom";
import { useFavourites } from "../context/FavouritesContext";
import propertiesData from "../data/properties.json";
import "./FavouritesPanel.css";

function FavouritesPanel() {
  const { favourites, removeFavourite, clearFavourites } = useFavourites();

  // Convert favourite IDs -> full property objects
  const favouriteProperties = propertiesData.properties.filter((p) =>
    favourites.includes(p.id)
  );

  return (
    <div className="fav-panel">
      <h3>Favourites</h3>

      {favourites.length === 0 && <p>No favourites yet.</p>}

      {favouriteProperties.map((p) => (
        <div key={p.id} className="fav-item">
          <div className="fav-left">
            <p className="fav-title">{p.type}</p>
            <p className="fav-sub">{p.location}</p>
            <p className="fav-price">£{p.price.toLocaleString()}</p>
            <Link to={`/property/${p.id}`}>Open</Link>
          </div>

          <button
            type="button"
            className="fav-remove"
            onClick={() => removeFavourite(p.id)}
          >
            Remove
          </button>
        </div>
      ))}

      {favourites.length > 0 && (
        <button type="button" className="fav-clear" onClick={clearFavourites}>
          Clear all
        </button>
      )}
    </div>
  );
}

export default FavouritesPanel;
