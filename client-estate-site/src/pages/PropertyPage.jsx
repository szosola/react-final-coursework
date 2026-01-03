import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import propertiesData from "../data/properties.json";
import { useFavourites } from "../context/FavouritesContext";
import "./PropertyPage.css";

// Tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function PropertyPage() {
  const { id } = useParams();

  const [mainImage, setMainImage] = useState("");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Find property by id
  const property = propertiesData.properties.find((p) => p.id === id);

  const { favourites, addFavourite, removeFavourite } = useFavourites();

  useEffect(() => {
    if (property && property.images && property.images.length > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMainImage(property.images[0]);
    } else if (property && property.picture) {
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

  const isFav = favourites.includes(property.id);

  const images = property.images && property.images.length > 0 ? property.images : [property.picture, property.picture, property.picture];

   // Convert images into lightbox slides format
  const slides = images.map((img) => ({ src: `/${img}`}));

  const safeDescription = property.description.replace(/<br\s*\/?>/gi, " ");

  // Google maps embed URL (simple)
  const mapUrl =
    property.lat && property.lng
      ? `https://www.google.com/maps?q=${property.lat},${property.lng}&z=15&output=embed`
      : null;

  return (
    <div className="property-page">
      <Link to="/">Back to Search</Link>

      <h2>{property.type}</h2>
      <p>{property.location}</p>
      <p>£{property.price.toLocaleString()}</p>

      <div className="gallery">
        <button
        type="button"
        onClick={() => (isFav ? removeFavourite(property.id) : addFavourite(property.id))}
      >
        {isFav ? "★ Saved" : "☆ Save to favourites"}
      </button>

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

        <button
          type="button"
          className="view-all-btn"
          onClick={() => setLightboxOpen(true)}
        >
          View all images
        </button>

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={slides}
        />
      </div>

      {/* Tabs */}
      <div className="tabs-box">
        <Tabs>
          <TabList>
            <Tab>Description</Tab>
            <Tab>Floor Plan</Tab>
            <Tab>Map</Tab>
          </TabList>

          <TabPanel>
            <p>{safeDescription}</p>
          </TabPanel>

          <TabPanel>
            {property.floorPlan ? (
              <img
                src={`/${property.floorPlan}`}
                alt="Floor plan"
                style={{ width: "100%", maxWidth: "700px" }}
              />
            ) : (
              <p>No floor plan available.</p>
            )}
          </TabPanel>

          <TabPanel>
            {mapUrl ? (
              <iframe
                title="Google Map"
                src={mapUrl}
                width="100%"
                height="350"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              ></iframe>
            ) : (
              <p>No map coordinates available.</p>
            )}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default PropertyPage;