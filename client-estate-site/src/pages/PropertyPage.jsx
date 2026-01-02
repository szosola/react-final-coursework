import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import propertiesData from "../data/properties.json";
import "./PropertyPage.css";

function PropertyPage() {
  const { id } = useParams();

  const [mainImage, setMainImage] = useState("");

  // Find property by id
  const property = propertiesData.properties.find((p) => p.id === id);

  useEffect(() => {
    if (property && property.picture) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMainImage(property.picture);
    }
  }, [property]);

  if (!property) {
    return (
      <div className="property-page">
        <h2>Property not found</h2>
        <Link to="/">Back to Search</Link>
      </div>
    );
  }

  // Temporary gallery: repeats the same image 3 times (until add real images per property)
  const images = [property.picture, property.picture, property.picture];

  // Remove <br> safely so it doesn't show as HTML
  const safeDescription = property.description.replace(/<br\s*\/?>/gi, " ");

  return (
    <div className="property-page">
      <Link to="/">Back to Search</Link>

      <h2>{property.type}</h2>
      <p>{property.location}</p>
      <p>£{property.price.toLocaleString()}</p>

      <div className="gallery">
        <img
          className="gallery-main"
          src={`/${mainImage}`}
          alt={`${property.type} in ${property.location}`}
        />

        <div className="thumbs">
          {images.map((imgPath, index) => (
            <button
              type="button"
              key={index}
              className="thumb-btn"
              onClick={() => setMainImage(imgPath)}
            >
              <img
                className="thumb-img"
                src={`/${imgPath}`}
                alt={`Thumbnail ${index + 1}`}
              />
            </button>
          ))}
        </div>
      </div>

      <p>{safeDescription}</p>
    </div>
  );
}

export default PropertyPage;