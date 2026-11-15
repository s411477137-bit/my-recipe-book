/* 食譜資料集中管理：新增料理時，請依照 AGENTS.md 的資料格式新增一筆。 */
window.RECIPES = [
  {
    id: "creamy-tomato-pasta", name: "奶油番茄義大利麵", english: "Creamy Tomato Pasta",
    category: "主食", time: 25, difficulty: "簡單", servings: 2, badge: "人氣推薦",
    image: "creamy-tomato-pasta.jpg",
    imageAlt: "番茄義大利麵", description: "酸甜番茄遇上柔滑奶油，簡單幾個步驟就能完成的療癒晚餐。",
    ingredients: ["義大利麵 160g", "牛番茄 2 顆", "洋蔥 1/4 顆", "鮮奶油 80ml", "蒜頭 2 瓣", "鹽與黑胡椒 適量"],
    steps: ["煮一鍋水，加入少許鹽，將義大利麵依包裝時間煮至喜歡的熟度，保留半杯煮麵水。", "番茄切丁、洋蔥切碎，蒜頭切末備用。", "平底鍋加入橄欖油，炒香蒜末與洋蔥，再放入番茄炒至軟化。", "倒入鮮奶油與少許煮麵水，加入義大利麵拌勻，以鹽和黑胡椒調味即可。"],
    tip: "起鍋前刨一點帕瑪森起司，香氣會更有層次。"
  },
  {
    id: "avocado-egg-toast", name: "酪梨溫泉蛋吐司", english: "Avocado Egg Toast",
    category: "輕食", time: 15, difficulty: "簡單", servings: 1, badge: "快速上桌",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "酪梨蛋吐司", description: "酥脆吐司搭配綿密酪梨與半熟蛋，早晨也能吃得很有儀式感。",
    ingredients: ["厚片吐司 1 片", "熟酪梨 1/2 顆", "雞蛋 1 顆", "檸檬汁 1 小匙", "鹽、黑胡椒 少許", "辣椒碎 少許（可省略）"],
    steps: ["吐司放入烤箱或平底鍋，烘烤至表面金黃。", "酪梨取出果肉，加入檸檬汁、鹽與黑胡椒壓成泥。", "雞蛋以小火煎至蛋白凝固、蛋黃仍柔軟，或使用喜歡的熟度。", "將酪梨泥抹在吐司上，放上雞蛋，最後撒上黑胡椒與辣椒碎。"],
    tip: "酪梨熟度以手指輕壓微微凹陷為佳，口感最綿密。"
  },
  {
    id: "honey-yogurt-bowl", name: "蜂蜜莓果優格碗", english: "Honey Berry Yogurt Bowl",
    category: "輕食", time: 10, difficulty: "簡單", servings: 1, badge: "免開火",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "莓果優格碗", description: "酸甜莓果、濃郁優格與脆脆穀片，一碗裝進清爽好心情。",
    ingredients: ["無糖希臘優格 150g", "草莓 4 顆", "藍莓 1 小把", "燕麥脆片 2 大匙", "蜂蜜 1 大匙", "薄荷葉 少許"],
    steps: ["草莓洗淨去蒂後切片，藍莓洗淨並擦乾。", "將希臘優格放入喜歡的碗中，表面稍微抹平。", "依序放上草莓、藍莓與燕麥脆片。", "淋上蜂蜜，放一片薄荷葉點綴即可享用。"],
    tip: "水果可以依季節替換，香蕉、奇異果或水蜜桃都很適合。"
  },
  {
    id: "matcha-pudding", name: "日式抹茶布丁", english: "Matcha Milk Pudding",
    category: "甜點", time: 30, difficulty: "簡單", servings: 4, badge: "午後甜點",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "抹茶奶酪甜點", description: "茶香溫柔、口感滑順，冰過之後更適合午後慢慢品嚐。",
    ingredients: ["牛奶 400ml", "鮮奶油 100ml", "細砂糖 35g", "抹茶粉 8g", "吉利丁片 8g"],
    steps: ["吉利丁片放入冰水中泡軟，抹茶粉先過篩備用。", "取少量牛奶與抹茶粉拌成沒有顆粒的抹茶糊。", "其餘牛奶、鮮奶油與砂糖加熱至砂糖融化，勿煮沸。", "加入抹茶糊拌勻，放入擠乾水分的吉利丁攪拌融化。", "過篩倒入容器，放涼後冷藏至少 4 小時，凝固即可享用。"],
    tip: "抹茶粉先用少量液體調開，比直接加入熱牛奶更不容易結塊。"
  },
  {
    id: "garlic-butter-rice", name: "蒜香奶油菇菇飯", english: "Garlic Butter Mushroom Rice",
    category: "主食", time: 20, difficulty: "簡單", servings: 2, badge: "家常必備",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "香菇米飯料理", description: "蘑菇的鮮味與奶油蒜香融合，冰箱常備食材就能完成的暖心一餐。",
    ingredients: ["白飯 2 碗", "蘑菇 150g", "蒜頭 3 瓣", "無鹽奶油 20g", "醬油 1 大匙", "蔥花 少許"],
    steps: ["蘑菇切片，蒜頭切末，白飯先用飯匙撥鬆。", "平底鍋融化奶油，加入蒜末炒出香氣。", "放入蘑菇片，以中火炒至微微上色。", "加入白飯與醬油快速拌炒，讓米飯均勻裹上醬香。", "起鍋前撒上蔥花，趁熱享用。"],
    tip: "蘑菇先煎到表面金黃再拌飯，香氣會更濃郁。"
  },
  {
    id: "lemon-honey-soda", name: "檸檬蜂蜜氣泡飲", english: "Lemon Honey Soda",
    category: "飲品", time: 5, difficulty: "簡單", servings: 1, badge: "清爽系",
    image: "lemon-honey-soda.jpg",
    imageAlt: "檸檬氣泡飲", description: "檸檬的清香加上細緻氣泡，炎熱午後最簡單的清爽提案。",
    ingredients: ["檸檬 1/2 顆", "蜂蜜 20ml", "氣泡水 200ml", "冰塊 適量", "迷迭香 1 小枝（可省略）"],
    steps: ["檸檬洗淨，切出兩片薄片裝飾，其餘擠出檸檬汁。", "杯中加入蜂蜜與檸檬汁，攪拌至融合。", "加入冰塊，再沿杯壁緩緩倒入氣泡水。", "放入檸檬片與迷迭香裝飾，飲用前輕輕攪拌。"],
    tip: "氣泡水最後加入並沿杯壁倒入，可以保留更多氣泡。"
  }
];
