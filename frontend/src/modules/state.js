const DEFAULT_STATE = {
  page: "index",
  view: "list",
};

export function getState() {
  try {
    const saved = JSON.parse(localStorage.getItem("appState"));
    return { ...DEFAULT_STATE, ...saved };
  } catch {
    return DEFAULT_STATE;
  }
}

export function setState(newState) {
  const current = getState();
  const updated = { ...current, ...newState };

  localStorage.setItem("appState", JSON.stringify(updated));

  console.log("state saved:", updated);

  return updated;
}