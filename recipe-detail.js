/* 食譜詳細頁：以網址 ?id= 對應 js/recipes.js 中的資料。 */
(() => {
  const container = document.querySelector("#recipe-detail");
  if (!container || !window.RECIPES) return;
  const params = new URLSearchParams(window.location.search);
  const recipe = window.RECIPES.find((item) => item.id === params.get("id"));

  const safe = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));

  if (!recipe) {
    document.title = "找不到食譜｜My Recipe Book";
    container.innerHTML = `<section class="not-found"><span>☁</span><h1>這份食譜暫時不在書裡</h1><p>可能是連結有誤，回到食譜收藏頁再找找吧。</p><a class="button button-dark" href="index.html#recipes">回到食譜列表 ↗</a></section>`;
    return;
  }

  document.title = `${recipe.name}｜My Recipe Book`;
  container.innerHTML = `
    <a class="back-link" href="index.html#recipes">← 回到所有食譜</a>
    <section class="detail-hero">
      <div class="detail-photo"><img src="${safe(recipe.image)}" alt="${safe(recipe.imageAlt)}"></div>
      <div class="detail-intro">
        <p class="eyebrow">${safe(recipe.category)} <span>·</span> RECIPE NO. ${String(window.RECIPES.indexOf(recipe) + 1).padStart(2, "0")}</p>
        <span class="detail-badge">${safe(recipe.badge)}</span>
        <h1>${safe(recipe.name)}</h1>
        <p class="detail-english">${safe(recipe.english)}</p>
        <p class="detail-description">${safe(recipe.description)}</p>
        <div class="detail-stats">
          <div><span>⏱</span><strong>${recipe.time}</strong><small>分鐘</small></div>
          <div><span>♧</span><strong>${safe(recipe.difficulty)}</strong><small>難易度</small></div>
          <div><span>♡</span><strong id="servings-value">${recipe.servings}</strong><small>人份</small></div>
        </div>
        <div class="serving-control"><span>調整份量</span><button type="button" id="serving-minus" aria-label="減少一人份">−</button><strong id="serving-count">${recipe.servings}</strong><button type="button" id="serving-plus" aria-label="增加一人份">＋</button></div>
      </div>
    </section>
    <section class="detail-content">
      <div class="ingredients-panel">
        <p class="eyebrow">WHAT YOU NEED</p><h2>準備食材</h2>
        <p class="panel-hint">依照份量調整，準備好就開始吧。</p>
        <ul class="ingredient-list" id="ingredient-list">
          ${recipe.ingredients.map((item, index) => `<li><label><input type="checkbox"><span>${safe(item)}</span></label></li>`).join("")}
        </ul>
        <p class="check-hint">完成一項，就勾選一項 ♡</p>
      </div>
      <div class="steps-panel">
        <p class="eyebrow">LET'S GET COOKING</p><h2>料理步驟</h2>
        <ol class="step-list">${recipe.steps.map((step, index) => `<li><span class="step-number">${String(index + 1).padStart(2, "0")}</span><p>${safe(step)}</p></li>`).join("")}</ol>
        <aside class="cook-tip"><span>✳ 小小秘訣</span><p>${safe(recipe.tip)}</p></aside>
      </div>
    </section>
    <div class="detail-end"><span>♡</span><p>希望這道料理，為你帶來一點好心情。</p><a href="index.html#recipes">再找一道喜歡的食譜 →</a></div>`;

  // 份量控制會依比例調整食材中可辨識的數字，文字描述保持原樣。
  let servings = recipe.servings;
  const formatIngredient = (ingredient, ratio) => ingredient.replace(/(\d+(?:\.\d+)?)/, (number) => {
    const scaled = Number(number) * ratio;
    return Number.isInteger(scaled) ? String(scaled) : String(Math.round(scaled * 10) / 10);
  });
  const updateServings = () => {
    const ratio = servings / recipe.servings;
    document.querySelector("#servings-value").textContent = servings;
    document.querySelector("#serving-count").textContent = servings;
    document.querySelector("#ingredient-list").innerHTML = recipe.ingredients.map((item) =>
      `<li><label><input type="checkbox"><span>${safe(formatIngredient(item, ratio))}</span></label></li>`
    ).join("");
  };
  document.querySelector("#serving-minus").addEventListener("click", () => {
    if (servings > 1) { servings -= 1; updateServings(); }
  });
  document.querySelector("#serving-plus").addEventListener("click", () => {
    if (servings < 12) { servings += 1; updateServings(); }
  });
})();
