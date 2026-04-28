export function loadComponent(containerSelector, filePath) {
  return fetch(filePath)
    .then(res => res.text())
    .then(data => {
      document.querySelector(containerSelector).innerHTML = data;
    })
}

