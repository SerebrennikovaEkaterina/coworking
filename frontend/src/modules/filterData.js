export function filterData(data, state) {
  return data.filter((item) => {
    //  ПОИСК
    const matchesSearch =
      !state.search ||
      item.address.toLowerCase().includes(state.search.toLowerCase());

    // ТИПЫ (массив)
    const matchesType =
      !state.spaceType.length ||
      state.spaceType.some((type) =>
        item.spaceType.includes(type)
      );

    //  УДОБСТВА (массив)
    const matchesAmenities =
      !state.amenities.length ||
      state.amenities.every((a) =>
        item.amenities.includes(a)
      );

    //  СРОК АРЕНДЫ (один выбор)
    const matchesRentTerm =
      !state.rentTerm ||
      item.rentTerm === state.rentTerm;

    //  РЕЖИМ РАБОТЫ (один выбор)
    const matchesWorkSchedule =
      !state.workSchedule ||
      item.workSchedule === state.workSchedule;

    // МЕСТА (диапазон)
    const matchesSeats =
      (!state.minSeats || item.seats >= Number(state.minSeats)) &&
      (!state.maxSeats || item.seats <= Number(state.maxSeats));

    // ИТОГ
    return (
      matchesSearch &&
      matchesType &&
      matchesAmenities &&
      matchesRentTerm &&
      matchesWorkSchedule &&
      matchesSeats
    );
  });
}