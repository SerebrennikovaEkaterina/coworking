export async function getCoworkings() {
  const response = await fetch("/data/coworkings.json");

  if (!response.ok) {
    throw new Error("Failed to load coworkings");
  }

  return response.json();
}