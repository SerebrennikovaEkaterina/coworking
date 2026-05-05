let filterState = {
    search: "",
    spaceType: [],
    amenities: [],
    rentTerm: null,
    workSchedule: null,
    minSeats: null,
    maxSeats: null,
  };
  
  export function getFilterState() {
    return filterState;
  }
  
  export function updateFilterState(newState) {
    filterState = { ...filterState, ...newState };
  }