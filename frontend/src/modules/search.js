export function initSearch(data, renderCards) {
    const input = document.querySelector(".search__input");
  
    if (!input) return;
  
    input.addEventListener("input", (e) => {
      const value = e.target.value.toLowerCase().trim();
  
      console.log("🔍 search:", value);
  
      const filtered = data.filter((item) => {
        return (
          item.title.toLowerCase().includes(value) ||
          item.address.toLowerCase().includes(value)
        );
      });
  
      console.log("results:", filtered.length);
  
      renderCards(filtered);
    });
  }