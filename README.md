# SellerOS 14.0 — GitHub Pages 公开作品集版

## 作品集定位

消费电子品牌运营与 TWS 新品上市分析的交互式求职作品集。保留 Cream & Sage 视觉设计、商品图片、选品列表、单品驾驶舱、利润与库存情景模拟。

## 重要数据声明

- 默认由浏览器从 [第三方公开 Amazon Electronics 数据源](https://github.com/Akash2126/amazon-electronics-sales-analysis)读取历史 CSV，在客户端按标题关键词筛选配件并按 ASIN 去重，最多展示 865 条。实际条数以加载结果为准；2025 年数据并非实时市场行情。该数据集未被重新托管在本仓库。\n- `data/products.json` 仅保留 **16 条自行构造的演示商品**作为网络失败时的备用数据；图片为原创 SVG。
- 本地研究版的 865 条第三方记录没有被复制到公开仓库。浏览器端读取原始数据依赖第三方服务器可用性、跨域策略和来源使用条款；若外部数据无法加载，页面会自动回退至 16 条演示记录。请勿将规则分类结果视为人工核实的真实 SKU。
- `strategy.html`、`launch.html`、`portfolio.html` 中的竞品研究结论与历史参考价格属于案例研究材料，不能视为实时市场价格或代表性市场统计；如有具体规格请以品牌官方信息为准。
- 广告花费、ACOS、库存、利润、转化及预测为**情景假设**，不代表实际运营结果。
- AI 生成的耳机氛围图片是装饰性素材，不是竞品实拍。

## 发布方法

把此文件夹**内部的全部文件与子文件夹**上传到 GitHub 仓库根目录（不是上传 ZIP，也不是再嵌套一个文件夹）。在 Settings → Pages 选择 Deploy from a branch / main / (root)。

## 本地预览

`python3 -m http.server 8002 --bind 127.0.0.1`

## 项目文件

- `index.html` 经营总览与商品机会池
- `workspace.html` 单品经营驾驶舱
- `strategy.html` 品类策略
- `launch.html` TWS 上市决策
- `portfolio.html` 求职作品集展示
- `assets/catalog-adapter.js` 浏览器端历史 CSV 读取与商品筛选\n- `data/products.json` 自制演示备用数据（16 条）
- `assets/` 原创图标和 AI 生成氛围图片
