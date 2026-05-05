export function filterData(data, state) {
    return data.filter((item) => {
      const matchesSearch =
        !state.search ||
        item.address.toLowerCase().includes(state.search.toLowerCase());
  
      const matchesType =
        !state.spaceType.length ||
        state.spaceType.includes(item.type);
  
      const matchesAmenities =
        !state.amenities.length ||
        state.amenities.every((a) => item.amenities.includes(a));
  
      return matchesSearch && matchesType && matchesAmenities;
    });
  }