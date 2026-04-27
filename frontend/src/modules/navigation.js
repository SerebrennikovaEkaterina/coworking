export function setActiveLink() {
  const links = document.querySelectorAll("nav-link");
  let currentPage = window.location.pathname.split("/").pop();

  if (currentPage === "") {
    currentPage = "index.html";
  }

  links.forEach(link => {
    if (link.getAttribute("href").includes(currentPage)) {
      link.classList.add("active")
    }
  })

}