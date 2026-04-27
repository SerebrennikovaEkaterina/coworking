export function loadComponent(containerSelector, filePath) {
  fetch(filePath)
    .then(res => res.text())
    .then(data => {
      document.querySelector(containerSelector).innerHTML = data;
      setActiveLink();
    })
}

