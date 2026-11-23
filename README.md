# selleros
Cross-border E-commerce Seller Operations &amp; Growth Analytics Dashboard
# SellerOS — Cross-border Seller Operations Intelligence

A self-contained, offline-capable HTML portfolio prototype for brand/store operations. Double-click `index.html` to open; no login, Python, npm, or API key is required.

## What it includes
- Store overview (explicitly simulated teaching data)
- Product selection: local CSV import of public Amazon-style product listings
- Listing audit (explainable field-based rules)
- Ads: illustrative keyword ACOS diagnostics
- Inventory: editable coverage and replenishment calculator
- Profit: editable unit contribution-margin calculator
- Conversion: editable traffic-to-purchase funnel
- Methods and data provenance page

## Real data
Download the source `amazon.csv` separately from https://github.com/thanhmaitran/amazon-product-intelligence and use the import control in the Product Selection tab. The file is parsed locally in the browser and is not uploaded. Review the source data's licensing and usage conditions before redistributing it.

**Important:** the default dataset is fabricated for interface demonstration. Real product data contains listing-level fields but not actual advertising spend, impressions, stock, COGS, or conversion data. Those sections remain labeled simulations even after CSV import.

## Deploy
Create a public GitHub repository, upload `index.html` to its root, go to Settings > Pages > Deploy from a branch > main / root. Alternatively, upload this folder to Netlify Drop. The HTML is self-contained and does not depend on third-party CDNs.

## Portfolio integrity
Credit the public dataset source and any AI assistance. Claim only the analytical design, code modifications, validation, and business reasoning you actually performed. Do not present simulated business KPIs as actual merchant results.
