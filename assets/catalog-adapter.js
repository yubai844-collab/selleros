/* SellerOS 14 — public-source, browser-only catalog adapter.
   Source: https://github.com/Akash2126/amazon-electronics-sales-analysis
   Original dataset is NOT redistributed by this repository.
   Data is historical (2025), not live Amazon listings. */
window.SellerOSCatalog=(function(){
 const URL="https://raw.githubusercontent.com/Akash2126/amazon-electronics-sales-analysis/main/amazon_products_sales_data_cleaned.csv";
 function csvRows(text){let rows=[],row=[],field="",quoted=false;for(let i=0;i<text.length;i++){let c=text[i];if(quoted){if(c==='"'&&text[i+1]==='"'){field+='"';i++}else if(c==='"')quoted=false;else field+=c}else if(c==='"')quoted=true;else if(c===','){row.push(field);field=""}else if(c==='\n'){row.push(field.replace(/\r$/,''));rows.push(row);row=[];field=""}else field+=c}if(field||row.length){row.push(field);rows.push(row)}return rows}
 const segments=[
  ["无线音频",/\b(earbuds?|earphones?|headphones?|headsets?|bluetooth speaker|wireless speaker|tws)\b/i],
  ["充电供电",/\b(power bank|portable charger|wall charger|gan charger|wireless charger|charging station|charging dock)\b/i],
  ["线材连接",/\b(usb.c cable|usb cable|hdmi cable|displayport cable|lightning cable|charging cable|usb.c hub|usb hub|adapter cable)\b/i],
  ["手机配件",/\b(phone case|iphone case|phone stand|phone holder|screen protector|magsafe mount|car phone mount)\b/i]
 ];
 const exclude=/\b(replacement parts?|repair kit|for printer|camera battery|hearing aid|car stereo|microphone|lavalier|walkie talkie|telephone handset|laptop computer)\b/i;
 function transform(rows){let h=rows.shift().map(x=>x.trim().toLowerCase()),at=n=>h.indexOf(n),seen=new Set(),out=[];
 for(let r of rows){let name=(r[at("product_title")]||"").trim();if(!name||exclude.test(name))continue;let seg=segments.find(([_,rx])=>rx.test(name));if(!seg)continue;
 let price=Number((r[at("discounted_price")]||"").replace(/[$,]/g,""));if(!(price>0&&price<2500))continue;
 let link=r[at("product_page_url")]||"",asin=(decodeURIComponent(link).match(/\/dp\/([A-Z0-9]{10})/i)||[])[1]||"";
 let id=asin||"SRC-"+name.toLowerCase().replace(/[^a-z0-9]+/g,"-").slice(0,72);
 if(seen.has(id))continue;seen.add(id);
 let rating=Number(r[at("product_rating")])||0,count=Number(r[at("total_reviews")])||0;
 let discount=Number(r[at("discount_percentage")])||0;
 out.push({id,name,category:r[at("product_category")]||seg[0],segment:seg[0],price,rating,count,discount,
 image:r[at("product_image_url")]||"",url:asin?"https://www.amazon.com/dp/"+asin:"",
 purchased:Number(r[at("purchased_last_month")])||0,date:(r[at("data_collected_at")]||"").slice(0,10),
 about:"第三方公开数据的历史商品记录；标题规则分类，尚未逐条人工验证。",
 segment_method:"2025 historical external-source; rule-based classification"});
 }
 // Bound the public UI to a predictable responsive sample size, not a claim about market size.
 return out.slice(0,865)}
 async function load(){let controller=new AbortController(),timer=setTimeout(()=>controller.abort(),45000);
 try{let r=await fetch(URL,{signal:controller.signal,cache:"force-cache"});if(!r.ok)throw Error("Source HTTP "+r.status);
 let csv=await r.text();let rows=csvRows(csv);let data=transform(rows);
 if(data.length<100)throw Error("External source returned insufficient matching products");
 return {items:data,source:"2025 Amazon Electronics external source",total:data.length};
 }finally{clearTimeout(timer)}}
 return {load,sourceURL:URL};
})();