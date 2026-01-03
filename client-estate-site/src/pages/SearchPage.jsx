import { useState } from "react";
import propertiesData from "../data/properties.json"
import SearchForm from "../components/SearchForm";
import { filterProperties } from "../utils/filterProperties";
import PropertyCard from "../components/PropertyCard";
import FavouritesPanel from "../components/FavouritesPanel";
import { DndContext } from "@dnd-kit/core";
import { FavouritesDropZone, RemoveDropZone } from "../components/DropZones";
import { useFavourites } from "../context/FavouritesContext";
import "./SearchPage.css";

function SearchPage() {
  const { favourites, addFavourite, removeFavourite } = useFavourites();

  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over) return;

    // Dropped into favourites panel
    if (over.id === "favourites-drop") {
      addFavourite(active.id);
    }

    // Dropped into remove zone
    if (over.id === "remove-drop") {
      if (favourites.includes(active.id)) {
        removeFavourite(active.id);
      }
    }
  }

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
    <DndContext onDragEnd={handleDragEnd}>
      <div className="search-page">
        <div>
          <FavouritesDropZone>
            <FavouritesPanel />
          </FavouritesDropZone>

          <RemoveDropZone />
        </div>

        <div>
          <SearchForm criteria={criteria} setCriteria={setCriteria} />

          <h2>Available Properties</h2>

          {filteredProperties.length === 0 && <p>No properties match your search.</p>}

          <div className="results-grid">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </DndContext>
  );
}

export default SearchPage;