# SellerOS 14.0 — 本地功能验收（第一轮）

## 已验证
- 原始 ZIP 可以完整解压；包含五个 HTML 页面、`assets/tws-studio.png`、`data/products.json` 和 `data/audit.json`。
- `products.json` 可被 JSON 解析，含 865 条商品候选记录；四组数量：无线音频 582、线材连接 113、手机配件 103、充电供电 67。
- 865 条记录均带有非空图片 URL，但这不保证远程服务器图片仍可访问。
- 五个 HTML 页面中的内联 JavaScript 均通过 Node.js `--check` 语法验证。
- 商品研究页和单品驾驶舱使用 `fetch` 请求相对路径 `data/products.json`，应通过 HTTP 本地服务器访问，而非直接双击 HTML。

## 尚未验证
- 尚未在实际浏览器完成点击、筛选、图表响应、图片远程加载和不同屏幕尺寸的端到端测试。
- 商品原始数据的公开再分发许可尚未核实；**不要把本地完整 ZIP 或 data/products.json 直接公开到 GitHub**。
- 不能根据公开商品元数据证明真实销售额、广告效果、库存或转化。

## 本地运行（Mac）
```bash
cd ~/Downloads/SellerOS_14_QA
python3 -m http.server 8002 --bind 127.0.0.1
```
访问 `http://127.0.0.1:8002/index.html`。如果解压目录不同，修改 `cd` 的路径。

## 手动验收顺序
1. 首页 KPI 是否出现、图表是否显示。
2. 「选品机会」是否有商品图片、可搜索和切换分类。
3. 点击商品是否可进入 `workspace.html` 并显示对应 SKU。
4. 改动 ACOS/成本后，贡献利润是否相应变化。
5. 改动库存/日销后，覆盖天数是否变化。
6. `strategy.html`、`launch.html`、`portfolio.html` 是否可从导航打开。
7. 浏览器开发者工具 Console 是否有红色报错。

## 下一步发布门槛
先完成浏览器交互验收，再制作不包含未经许可第三方商品明细的 GitHub Pages 公开版；公开版应保留研究方法、汇总统计与模拟情景标签。
