/* 首頁互動：搜尋、分類與食譜卡片渲染。 */
(() => {
  const grid = document.querySelector("#recipe-grid");
  if (!grid || !window.RECIPES) return;

  const searchInput = document.querySelector("#search-input");
  const count = document.querySelector("#recipe-count");
  const emptyState = document.querySelector("#empty-state");
  const filterButtons = [...document.querySelectorAll(".filter-chip")];
  let activeCategory = "全部";

  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));

  function render() {
    const keyword = searchInput.value.trim().toLocaleLowerCase();
    const filtered = window.RECIPES.filter((recipe) => {
      const matchesCategory = activeCategory === "全部" || recipe.category === activeCategory;
      const searchable = `${recipe.name} ${recipe.english} ${recipe.category} ${recipe.ingredients.join(" ")}`.toLocaleLowerCase();
      return matchesCategory && searchable.includes(keyword);
    });

    count.textContent = String(filtered.length).padStart(2, "0");
    emptyState.hidden = filtered.length !== 0;
    grid.innerHTML = filtered.map((recipe, index) => `
      <article class="recipe-card" style="--card-delay:${index * 55}ms">
        <a class="card-image-link" href="recipe.html?id=${encodeURIComponent(recipe.id)}" aria-label="查看${escapeHTML(recipe.name)}食譜">
          <img class="card-image" src="${escapeHTML(recipe.image)}" alt="${escapeHTML(recipe.imageAlt)}" loading="lazy">
          <span class="card-badge">${escapeHTML(recipe.badge)}</span>
          <span class="card-arrow" aria-hidden="true">↗</span>
        </a>
        <div class="card-content">
          <div class="card-meta"><span>${escapeHTML(recipe.category)}</span><span>·</span><span>⏱ ${recipe.time} 分鐘</span></div>
          <h3><a href="recipe.html?id=${encodeURIComponent(recipe.id)}">${escapeHTML(recipe.name)}</a></h3>
          <p class="card-english">${escapeHTML(recipe.english)}</p>
          <div class="card-bottom"><span>難度・${escapeHTML(recipe.difficulty)}</span><a href="recipe.html?id=${encodeURIComponent(recipe.id)}" class="view-recipe">查看食譜 <span>→</span></a></div>
        </div>
      </article>`).join("");
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      filterButtons.forEach((item) => {
        const selected = item === button;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      render();
    });
  });

  searchInput.addEventListener("input", render);
  document.querySelector("#reset-search").addEventListener("click", () => {
    searchInput.value = "";
    activeCategory = "全部";
    filterButtons.forEach((item) => {
      const selected = item.dataset.category === "全部";
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    render();
    searchInput.focus();
  });

  render();
})();
