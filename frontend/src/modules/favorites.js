const FAVORITES_KEY = "favorites";

// Если favorites существует → превращает строку обратно в массив

export function getFavorites() {
  const favorites = localStorage.getItem(FAVORITES_KEY);

  return favorites ? JSON.parse(favorites) : [];
}

// Если id уже есть: → удалить
// Если нет:→ добавить

export function toggleFavorite(id) {
  const favorites = getFavorites();

  const isExist = favorites.includes(id);

  let updatedFavorites;

  if (isExist) {
    updatedFavorites = favorites.filter(
      (favoriteId) => favoriteId !== id
    );
  } else {
    updatedFavorites = [...favorites, id];
  }

  localStorage.setItem(
    FAVORITES_KEY,
    JSON.stringify(updatedFavorites)
  );

  return updatedFavorites;
}

// проверка


export function isFavorite(id) {
  const favorites = getFavorites();

  return favorites.includes(id);
}