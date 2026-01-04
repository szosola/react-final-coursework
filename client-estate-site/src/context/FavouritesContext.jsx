import { createContext, useContext, useState } from "react";
import { addFavouriteId, removeFavouriteId } from "../utils/favouritesUtils";

const FavouritesContext = createContext();

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (id) => {
    setFavourites((prev) => addFavouriteId(prev, id));
  };

  const removeFavourite = (id) => {
    setFavourites((prev) => removeFavouriteId(prev, id));
  };

  const clearFavourites = () => {
    setFavourites([]);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addFavourite,
        removeFavourite,
        clearFavourites,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}

// Custom hook to use the context
// eslint-disable-next-line react-refresh/only-export-components
export function useFavourites() {
  return useContext(FavouritesContext);
}
