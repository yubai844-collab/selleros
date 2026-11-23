# SellerOS 14.0 — GitHub Pages 公开作品集版

## 作品集定位

消费电子品牌运营与 TWS 新品上市分析的交互式求职作品集。保留 Cream & Sage 视觉设计、商品图片、选品列表、单品驾驶舱、利润与库存情景模拟。

## 重要数据声明

- `data/products.json` 含 **16 条自行构造的演示商品**，图片为原创 SVG 图标。它们不是真实 Amazon 商品，也不是历史 865 条研究记录。
- 本地研究版使用的第三方 865 条商品记录**没有**包含在公开版中，原因是再分发许可尚未确认。
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
- `data/products.json` 自制演示数据（16 条）
- `assets/` 原创图标和 AI 生成氛围图片
