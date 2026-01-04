export function addFavouriteId(favourites, id) {
  if (favourites.includes(id)) return favourites;
  return [...favourites, id];
}

export function removeFavouriteId(favourites, id) {
  return favourites.filter((favId) => favId !== id);
}