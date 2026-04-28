export async function loadComponent(containerSelector, filePath) {
  try {
    const res = await fetch(filePath);

    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }

    const data = await res.text();

    document.querySelector(containerSelector).innerHTML = data;

  } catch (error) {
    console.error("loadComponent error:", error);

    const container = document.querySelector(containerSelector);

    if (container) {
      container.innerHTML = "<p>Не удалось загрузить компонент</p>";
    }
  }
}