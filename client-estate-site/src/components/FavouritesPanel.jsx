import { Link } from "react-router-dom";
import { useFavourites } from "../context/FavouritesContext";
import propertiesData from "../data/properties.json";
import { useDraggable } from "@dnd-kit/core";
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
        <FavouriteRow 
          key={p.id}
          property={p}
          onRemove={() => removeFavourite(p.id)}
        />
      ))}

      {favourites.length > 0 && (
        <button type="button" className="fav-clear" onClick={clearFavourites}>
          Clear all
        </button>
      )}
    </div>
  );
}

function FavouriteRow({ property, onRemove }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: property.id,
  });

  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  return (
    <div ref={setNodeRef} style={style} className="fav-item">
      <div className="fav-left">
        <div className="fav-top">
          <span className="fav-drag" {...listeners} {...attributes} title="Drag">
            ⠿
          </span>
          <p className="fav-title">{property.type}</p>
        </div>

        <p className="fav-sub">{property.location}</p>
        <p className="fav-price">£{property.price.toLocaleString()}</p>
        <Link to={`/property/${property.id}`}>Open</Link>
      </div>

      <button type="button" className="fav-remove" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
}


export default FavouritesPanel;
