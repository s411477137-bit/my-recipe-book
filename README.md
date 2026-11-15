# My Recipe Book 🍞

一個奶油色系、簡約溫柔的繁體中文食譜資料庫。可以瀏覽料理卡片、搜尋菜名與食材、依分類篩選，並進入每道料理的詳細頁面查看食材、步驟與小秘訣。

## 專案特色

- **食譜集中管理**：所有料理資料放在 `js/recipes.js`。
- **即時搜尋**：可搜尋中文菜名、英文名稱、分類與食材。
- **分類篩選**：主食、輕食、甜點、飲品。
- **共用詳情頁**：每道料理使用 `recipe.html?id=<recipe-id>`，不必重複建立 HTML。
- **料理小工具**：可調整份量、勾選已備妥食材。
- **響應式設計**：支援桌面、平板與手機。
- **免安裝**：使用原生 HTML、CSS、JavaScript，無需 npm 或資料庫。

## 專案結構

```text
my-recipe-book/
├── AGENTS.md
├── README.md
├── index.html
├── recipe.html
├── css/
│   └── style.css
├── js/
│   ├── recipes.js
│   ├── app.js
│   └── recipe-detail.js
└── assets/
    └── images/
```

## 本機瀏覽

1. 下載或 clone 專案。
2. 直接以瀏覽器開啟 `index.html`。
3. 若瀏覽器限制本機檔案讀取，建議使用 VS Code 的 Live Server，或在專案資料夾執行：

   ```bash
   python -m http.server 8000
   ```

4. 瀏覽 `http://localhost:8000`。

## 如何新增一道食譜

1. 開啟 `js/recipes.js`。
2. 在 `window.RECIPES` 陣列中新增一筆物件。
3. 使用唯一的英文 `id`，例如 `strawberry-milk`。
4. 填寫 `name`、`english`、`category`、`time`、`difficulty`、`servings`、`badge`、`image`、`imageAlt`、`description`、`ingredients`、`steps`、`tip`。
5. 儲存後重新整理首頁；新食譜會自動出現在卡片列表，並可開啟共用詳情頁。

完整欄位規範、命名原則與 AI 修改流程請閱讀 **[AGENTS.md](AGENTS.md)**。

## GitHub Pages 部署

1. 在 GitHub 建立一個新的 repository，例如 `my-recipe-book`。
2. 將本資料夾中的所有檔案上傳到 repository 根目錄（不要只上傳 zip）。
3. 進入 repository 的 **Settings → Pages**。
4. 在 **Build and deployment** 區域，Source 選擇 **Deploy from a branch**。
5. Branch 選擇 `main`，資料夾選擇 `/(root)`，按下 **Save**。
6. 等待 GitHub Pages 部署完成。網址通常會是：

   `https://你的GitHub帳號.github.io/my-recipe-book/`

7. 開啟網址，測試搜尋、分類、卡片連結與詳情頁。
8. 若更新檔案，將變更 push 到 `main`，GitHub Pages 會重新部署。

> 注意：本專案使用相對路徑，可部署在 GitHub Pages 的 repository 子路徑。外部圖片來自 Unsplash，正式繳交前請確認網路圖片可載入；若需離線或長期穩定展示，請將圖片下載至 `assets/images/` 並更新資料路徑。

## 技術

- HTML5
- CSS3（CSS Variables、Grid、Flexbox、Responsive Media Queries）
- Vanilla JavaScript
- Google Fonts（Noto Sans TC、Playfair Display）
- Unsplash 圖片

## AI 協作規則

本專案以 `AGENTS.md` 作為 AI 開發規範。AI 新增或修改內容前，應先讀取該文件，遵守資料格式、檔案職責、視覺設計與驗收清單。新增一般食譜時，原則上只需更新 `js/recipes.js`，不需要重新製作頁面。

## 作業繳交可填寫資訊

- **專案名稱**：My Recipe Book｜美食食譜資料庫
- **專案簡介**：以奶油色系打造的個人食譜資料庫，提供料理分類、關鍵字搜尋與食譜詳情頁。透過集中式食譜資料與共用頁面模板，讓 AI 能依照 AGENTS.md 的規則快速新增料理內容。
- **GitHub Repository**：部署後填入自己的 repository URL。
- **網頁連結**：GitHub Pages 部署成功後填入實際網址。
- **規則檔案**：`AGENTS.md`。
- **延伸方式**：未來新增食譜時，AI 只需依照 AGENTS.md 的資料格式，將新料理新增至 `js/recipes.js`。首頁會自動產生卡片，詳情頁會依唯一 id 顯示食材與步驟，不必重複製作頁面，因此能維持一致的視覺與操作體驗。
