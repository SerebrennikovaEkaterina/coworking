const DEFAULT_STATE = {
  page: "index",
  view: "list",
};

export function getState() {
  const saved = localStorage.getItem("appState");

  if (!saved) return DEFAULT_STATE;

  try {
    return { ...DEFAULT_STATE, ...JSON.parse(saved) };
  } catch {
    return DEFAULT_STATE;
  }
}

export function setState(newState) {
  const current = getState();
  const updated = { ...current, ...newState };

  console.log("🔥 setState:", updated);

  localStorage.setItem("appState", JSON.stringify(updated));

  return updated; // 👈 важно!
}