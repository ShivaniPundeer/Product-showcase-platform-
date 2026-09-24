/* =========================================================
   SHOWCASEHUB — Product Showcase Platform
   Vanilla JS single-file app logic (no build step required)
   ========================================================= */

/* ---------------- DATA: CATEGORIES ---------------- */
const CATEGORIES = [
  { id: "Electronics",     emoji: "💻", desc: "Laptops, audio & gadgets" },
  { id: "Fashion",         emoji: "👕", desc: "Apparel & accessories" },
  { id: "Books",           emoji: "📚", desc: "Fiction, non-fiction & more" },
  { id: "Home & Living",   emoji: "🏠", desc: "Décor, kitchen & comfort" },
  { id: "Sports & Outdoors", emoji: "🎯", desc: "Gear for staying active" },
  { id: "Gaming",          emoji: "🎮", desc: "Consoles, controllers & more" },
];

/* ---------------- DATA: PRODUCTS ---------------- */
const PRODUCTS = [
  // Electronics
  { id:"el-01", name:"Aria Wireless Headset", category:"Electronics", emoji:"🎧", price:4299, oldPrice:5499, rating:4.6, reviewCount:132, tags:["bestseller"], stock:"instock", dateAdded:"2026-08-20",
    description:"Over-ear wireless headset with active noise cancellation and 30-hour battery life, tuned for calls and music alike.",
    specs:{ "Battery Life":"30 hours", "Connectivity":"Bluetooth 5.3", "Weight":"250 g", "Noise Cancellation":"Active (ANC)", "Warranty":"1 year" } },
  { id:"el-02", name:"Pulse Fit Watch", category:"Electronics", emoji:"⌚", price:6999, rating:4.4, reviewCount:88, tags:["new"], stock:"instock", dateAdded:"2026-09-15",
    description:"A fitness-first smartwatch with heart-rate tracking, sleep insights and a week-long battery.",
    specs:{ "Display":"1.4\" AMOLED", "Battery Life":"7 days", "Water Resistance":"5 ATM", "Sensors":"Heart rate, SpO2, GPS", "Warranty":"1 year" } },
  { id:"el-03", name:"Lumen 13 Ultrabook", category:"Electronics", emoji:"💻", price:58990, oldPrice:64990, rating:4.7, reviewCount:64, tags:["featured"], stock:"limited", dateAdded:"2026-07-02",
    description:"A 13-inch ultrabook built for students and professionals — light enough to carry all day, fast enough for real work.",
    specs:{ "Processor":"Octa-core, 3.2GHz", "RAM":"16GB", "Storage":"512GB SSD", "Display":"13.3\" FHD", "Battery Life":"Up to 14 hours" } },
  { id:"el-04", name:"Orbit Portable Speaker", category:"Electronics", emoji:"🔊", price:2199, rating:4.2, reviewCount:41, tags:[], stock:"outstock", dateAdded:"2026-05-11",
    description:"A compact, splash-resistant Bluetooth speaker with surprisingly deep bass for its size.",
    specs:{ "Battery Life":"12 hours", "Connectivity":"Bluetooth 5.1", "Water Resistance":"IPX6", "Weight":"420 g", "Warranty":"6 months" } },

  // Fashion
  { id:"fa-01", name:"Stride Trail Runners", category:"Fashion", emoji:"👟", price:3499, rating:4.5, reviewCount:97, tags:["featured"], stock:"instock", dateAdded:"2026-08-05",
    description:"Lightweight trail running shoes with grippy outsoles and breathable mesh uppers for long-distance comfort.",
    specs:{ "Material":"Mesh & rubber", "Sizes":"UK 6–11", "Sole":"EVA cushioned", "Weight":"280 g (per shoe)", "Care":"Wipe clean" } },
  { id:"fa-02", name:"Everyday Denim Jacket", category:"Fashion", emoji:"🧥", price:2599, rating:4.3, reviewCount:56, tags:["bestseller"], stock:"instock", dateAdded:"2026-06-18",
    description:"A classic mid-wash denim jacket that layers well across seasons, cut for a relaxed fit.",
    specs:{ "Material":"100% Cotton denim", "Fit":"Relaxed", "Sizes":"XS–XXL", "Care":"Machine wash cold", "Origin":"India" } },
  { id:"fa-03", name:"Horizon Aviator Sunglasses", category:"Fashion", emoji:"🕶️", price:1299, rating:4.1, reviewCount:73, tags:["new"], stock:"limited", dateAdded:"2026-09-10",
    description:"UV400-protected aviators with a polarized lens and a lightweight metal frame.",
    specs:{ "Lens":"Polarized, UV400", "Frame":"Metal alloy", "Weight":"28 g", "Includes":"Hard case + cloth", "Warranty":"6 months" } },
  { id:"fa-04", name:"Weekender Canvas Tote", category:"Fashion", emoji:"👜", price:1099, rating:4.0, reviewCount:29, tags:[], stock:"instock", dateAdded:"2026-04-22",
    description:"A durable canvas tote with reinforced handles, roomy enough for a laptop and a weekend's essentials.",
    specs:{ "Material":"Heavy canvas", "Capacity":"18 L", "Dimensions":"40 x 34 x 12 cm", "Pockets":"1 inner, 1 outer", "Care":"Spot clean" } },

  // Books
  { id:"bk-01", name:"The Silent Orchard", category:"Books", emoji:"📗", price:399, rating:4.8, reviewCount:210, tags:["bestseller"], stock:"instock", dateAdded:"2026-03-14",
    description:"A quiet, acclaimed literary novel about three generations of a family tending the same orchard.",
    specs:{ "Format":"Paperback", "Pages":"312", "Language":"English", "Publisher":"Northline Press", "ISBN":"978-93-XXXXX-01" } },
  { id:"bk-02", name:"Systems That Scale", category:"Books", emoji:"📘", price:749, rating:4.6, reviewCount:118, tags:["featured"], stock:"instock", dateAdded:"2026-08-30",
    description:"A practical guide to designing backend systems that hold up under real-world load — written for working engineers.",
    specs:{ "Format":"Paperback", "Pages":"428", "Language":"English", "Publisher":"Compile Books", "Level":"Intermediate–Advanced" } },
  { id:"bk-03", name:"Mindful Mornings", category:"Books", emoji:"📙", price:299, rating:4.3, reviewCount:64, tags:["new"], stock:"instock", dateAdded:"2026-09-12",
    description:"A 30-day guided journal for building a calmer, more intentional start to each day.",
    specs:{ "Format":"Hardcover journal", "Pages":"180", "Language":"English", "Publisher":"Quiet House", "Binding":"Hardcover" } },
  { id:"bk-04", name:"Atlas of Small Wonders", category:"Books", emoji:"📕", price:899, rating:4.5, reviewCount:47, tags:[], stock:"limited", dateAdded:"2026-02-08",
    description:"An illustrated collection of short essays on everyday phenomena, from dew to static electricity.",
    specs:{ "Format":"Hardcover", "Pages":"256", "Language":"English", "Publisher":"Northline Press", "Illustrations":"60+ full colour" } },

  // Home & Living
  { id:"hl-01", name:"Hearth Ceramic Mug Set", category:"Home & Living", emoji:"☕", price:899, rating:4.4, reviewCount:52, tags:["bestseller"], stock:"instock", dateAdded:"2026-07-19",
    description:"A set of four hand-glazed stoneware mugs, dishwasher and microwave safe.",
    specs:{ "Material":"Stoneware", "Set Size":"4 mugs", "Capacity":"300 ml each", "Care":"Dishwasher safe", "Origin":"India" } },
  { id:"hl-02", name:"Drift Table Lamp", category:"Home & Living", emoji:"💡", price:1799, rating:4.2, reviewCount:38, tags:["new"], stock:"instock", dateAdded:"2026-09-01",
    description:"A warm-toned oak and linen table lamp with a three-way dimmer, suited to reading corners.",
    specs:{ "Material":"Oak & linen", "Bulb":"E27, included", "Dimming":"3-way", "Cable Length":"1.8 m", "Warranty":"1 year" } },
  { id:"hl-03", name:"Verdant 4-Pot Planter Set", category:"Home & Living", emoji:"🪴", price:1299, rating:4.6, reviewCount:81, tags:["featured"], stock:"limited", dateAdded:"2026-06-25",
    description:"Self-watering ceramic planters in four sizes, ideal for herbs and small indoor plants.",
    specs:{ "Material":"Ceramic", "Set Size":"4 planters", "Feature":"Self-watering reservoir", "Drainage":"Yes", "Indoor/Outdoor":"Indoor" } },
  { id:"hl-04", name:"Cloudrest Memory Pillow", category:"Home & Living", emoji:"🛏️", price:1499, rating:4.1, reviewCount:44, tags:[], stock:"outstock", dateAdded:"2026-05-03",
    description:"A contoured memory foam pillow designed to ease neck strain for side and back sleepers.",
    specs:{ "Material":"Memory foam + cotton cover", "Firmness":"Medium", "Dimensions":"60 x 40 x 12 cm", "Cover":"Removable, washable", "Warranty":"2 years" } },

  // Sports & Outdoors
  { id:"sp-01", name:"TrailBlazer 40L Backpack", category:"Sports & Outdoors", emoji:"🎒", price:3299, rating:4.7, reviewCount:99, tags:["bestseller"], stock:"instock", dateAdded:"2026-04-30",
    description:"A rugged 40-litre hiking backpack with a ventilated back panel and rain cover included.",
    specs:{ "Capacity":"40 L", "Material":"Ripstop nylon", "Weight":"1.4 kg", "Rain Cover":"Included", "Warranty":"1 year" } },
  { id:"sp-02", name:"Summit Insulated Bottle", category:"Sports & Outdoors", emoji:"🧴", price:899, rating:4.5, reviewCount:150, tags:["featured"], stock:"instock", dateAdded:"2026-03-27",
    description:"Double-walled stainless steel bottle that keeps drinks cold for 24 hours or hot for 12.",
    specs:{ "Capacity":"750 ml", "Material":"Stainless steel", "Insulation":"Double-wall vacuum", "Cold Retention":"24 hours", "Hot Retention":"12 hours" } },
  { id:"sp-03", name:"ProGrip Badminton Racket", category:"Sports & Outdoors", emoji:"🏸", price:1999, rating:4.3, reviewCount:67, tags:["new"], stock:"limited", dateAdded:"2026-09-05",
    description:"A lightweight aluminium racket balanced for quick net play, strung and ready to use.",
    specs:{ "Weight":"85 g", "Material":"Aluminium alloy", "String Tension":"22–24 lbs", "Grip Size":"G4", "Includes":"Half cover" } },
  { id:"sp-04", name:"CoreFit Yoga Mat", category:"Sports & Outdoors", emoji:"🧘", price:1099, rating:4.4, reviewCount:112, tags:[], stock:"instock", dateAdded:"2026-02-14",
    description:"A 6mm non-slip yoga mat with alignment lines, rolled with a carry strap.",
    specs:{ "Thickness":"6 mm", "Material":"TPE, eco-friendly", "Dimensions":"183 x 61 cm", "Carry Strap":"Included", "Weight":"1.1 kg" } },

  // Gaming
  { id:"ga-01", name:"Vortex Pro Controller", category:"Gaming", emoji:"🎮", price:3999, rating:4.6, reviewCount:143, tags:["bestseller"], stock:"instock", dateAdded:"2026-08-12",
    description:"A wireless controller with remappable back paddles and adjustable trigger stops for competitive play.",
    specs:{ "Connectivity":"Bluetooth + USB-C wired", "Battery Life":"20 hours", "Extra Buttons":"2 remappable paddles", "Compatibility":"PC, Console", "Warranty":"1 year" } },
  { id:"ga-02", name:"Nova RGB Mechanical Keyboard", category:"Gaming", emoji:"⌨️", price:5499, oldPrice:6499, rating:4.5, reviewCount:76, tags:["featured"], stock:"limited", dateAdded:"2026-07-28",
    description:"A tenkeyless mechanical keyboard with hot-swappable switches and per-key RGB lighting.",
    specs:{ "Switch Type":"Hot-swappable mechanical", "Layout":"Tenkeyless (TKL)", "Backlight":"Per-key RGB", "Connectivity":"USB-C wired", "Warranty":"1 year" } },
  { id:"ga-03", name:"Specter Gaming Headset", category:"Gaming", emoji:"🎧", price:2799, rating:4.2, reviewCount:58, tags:["new"], stock:"instock", dateAdded:"2026-09-18",
    description:"A 7.1 surround gaming headset with a detachable noise-cancelling microphone.",
    specs:{ "Sound":"7.1 virtual surround", "Microphone":"Detachable, noise-cancelling", "Connectivity":"USB / 3.5mm", "Weight":"320 g", "Warranty":"1 year" } },
  { id:"ga-04", name:"DriftPad Gaming Mouse Pad", category:"Gaming", emoji:"🖱️", price:699, rating:4.0, reviewCount:34, tags:[], stock:"outstock", dateAdded:"2026-01-20",
    description:"An extended, stitched-edge mouse pad with a smooth micro-woven surface for consistent tracking.",
    specs:{ "Dimensions":"900 x 400 mm", "Thickness":"4 mm", "Surface":"Micro-woven cloth", "Base":"Non-slip rubber", "Edges":"Stitched" } },
];

/* ---------------- DATA: SEED REVIEWS ---------------- */
const SEED_REVIEWS = {
  "el-01": [
    { author:"Ritika S.", rating:5, text:"Battery genuinely lasts the week for daily commutes. Comfortable for long calls too.", date:"2026-09-02" },
    { author:"Amanjot K.", rating:4, text:"Great sound, ANC is good but not the absolute best in this range.", date:"2026-08-25" },
  ],
  "el-03": [
    { author:"Devansh P.", rating:5, text:"Fast enough for coding and light editing, and the battery easily gets me through classes.", date:"2026-08-01" },
  ],
  "fa-01": [
    { author:"Meher A.", rating:5, text:"Used these for a half-marathon training block, no blisters at all.", date:"2026-09-01" },
    { author:"Kabir N.", rating:4, text:"Great grip on wet trails, sizing runs slightly narrow.", date:"2026-08-14" },
  ],
  "bk-01": [
    { author:"Sana R.", rating:5, text:"Beautifully written, finished it in two sittings.", date:"2026-04-02" },
  ],
  "sp-01": [
    { author:"Yuvraj S.", rating:5, text:"Carried this through a 5-day trek, the back panel really helps with airflow.", date:"2026-05-10" },
  ],
  "ga-01": [
    { author:"Ishaan V.", rating:5, text:"Paddle remapping is a game changer for shooters.", date:"2026-08-20" },
    { author:"Priyansh G.", rating:4, text:"Solid build, wish the case was included.", date:"2026-08-05" },
  ],
};

/* ---------------- DATA: TESTIMONIALS ---------------- */
const TESTIMONIALS = [
  { name:"Ananya Bhatt", role:"Verified Buyer, Electronics", rating:5, initial:"A",
    quote:"The comparison table made choosing between two laptops painless — I could see the specs I actually cared about side by side." },
  { name:"Rohan Mehta", role:"Verified Buyer, Sports & Outdoors", rating:5, initial:"R",
    quote:"Product photos and the demo video matched the real thing exactly. No surprises when the backpack arrived." },
  { name:"Fatima Sheikh", role:"Verified Buyer, Home & Living", rating:4, initial:"F",
    quote:"Wishlist saved me from losing track of items across three shopping sessions. Small feature, big difference." },
];

/* ---------------- DATA: DEMO STEPS ---------------- */
const DEMO_STEPS = [
  { emoji:"🏠", title:"1. Homepage overview", body:"A hero banner, six shoppable categories, featured products and real testimonials — everything a first-time visitor needs." },
  { emoji:"🗂️", title:"2. Catalog with search & filters", body:"Filter by category, price, rating and stock status, then sort by price or rating. Results update live." },
  { emoji:"🔍", title:"3. Product detail page", body:"Full specifications, an image gallery, stock status and a reviews section with a working star-rating form." },
  { emoji:"⇄", title:"4. Side-by-side comparison", body:"Add up to four products to the compare table to line up price, rating and specs at a glance." },
  { emoji:"🛠️", title:"5. Admin dashboard", body:"An inventory overview with stock-status charts and a table for updating a product's availability." },
];

/* ---------------- STATE ---------------- */
const state = {
  view: "home",
  wishlist: new Set(JSON.parse(localStorage.getItem("sh_wishlist") || "[]")),
  compare: JSON.parse(localStorage.getItem("sh_compare") || "[]"),
  reviews: JSON.parse(localStorage.getItem("sh_reviews") || "null") || JSON.parse(JSON.stringify(SEED_REVIEWS)),
  stockOverrides: JSON.parse(localStorage.getItem("sh_stock") || "{}"),
  user: JSON.parse(localStorage.getItem("sh_user") || "null"),
  filters: { search:"", categories:new Set(), maxPrice:10000, minRating:0, statuses:new Set() },
  sort: "relevance",
  activeProductId: null,
  activeGalleryIndex: 0,
  demoIndex: 0,
};

function persist(){
  localStorage.setItem("sh_wishlist", JSON.stringify([...state.wishlist]));
  localStorage.setItem("sh_compare", JSON.stringify(state.compare));
  localStorage.setItem("sh_reviews", JSON.stringify(state.reviews));
  localStorage.setItem("sh_stock", JSON.stringify(state.stockOverrides));
  localStorage.setItem("sh_user", JSON.stringify(state.user));
}

function getStock(product){
  return state.stockOverrides[product.id] || product.stock;
}

function getReviews(id){
  return state.reviews[id] || [];
}

/* ---------------- HELPERS ---------------- */
function fmtPrice(n){ return "₹" + n.toLocaleString("en-IN"); }

function stockLabel(status){
  return { instock:"🟢 In Stock", limited:"🟡 Limited Stock", outstock:"🔴 Out of Stock" }[status] || status;
}
function stockTagClass(status){
  return { instock:"tag-instock", limited:"tag-limited", outstock:"tag-outstock" }[status] || "";
}

function starString(rating){
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

function tagBadges(product){
  const badges = [];
  const status = getStock(product);
  badges.push(`<span class="tag ${stockTagClass(status)}">${stockLabel(status)}</span>`);
  if (product.tags.includes("new")) badges.push(`<span class="tag tag-new">🆕 New Arrival</span>`);
  if (product.tags.includes("bestseller")) badges.push(`<span class="tag tag-bestseller">🔥 Best Seller</span>`);
  if (product.tags.includes("featured")) badges.push(`<span class="tag tag-featured">💎 Featured</span>`);
  return badges.join("");
}

function toast(msg){
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.remove("hidden");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.add("hidden"), 2200);
}

/* ---------------- NAVIGATION ---------------- */
function navigate(view, opts = {}){
  state.view = view;
  document.querySelectorAll(".view").forEach(v => v.classList.add("hidden"));
  const target = document.getElementById("view-" + view);
  if (target) target.classList.remove("hidden");
  window.scrollTo({ top:0, behavior:"smooth" });

  if (view === "catalog") {
    if (opts.category && opts.category !== "all") {
      state.filters.categories = new Set([opts.category]);
    } else if (opts.category === "all") {
      state.filters.categories = new Set();
    }
    renderFilterPanel();
    renderCatalog();
  }
  if (view === "compare") renderCompare();
  if (view === "wishlist") renderWishlist();
  if (view === "admin") renderAdmin();
  if (view === "demo") renderDemo();
}

document.addEventListener("click", (e) => {
  const navEl = e.target.closest("[data-nav]");
  if (!navEl) return;
  e.preventDefault();
  if (navEl.dataset.nav === "admin" && !(state.user && state.user.role === "admin")) {
    toast("Log in as an Admin to view the dashboard.");
    openAuthModal();
    return;
  }
  navigate(navEl.dataset.nav, { category: navEl.dataset.category });
});

/* ---------------- HOMEPAGE RENDER ---------------- */
function renderCategoryCard(cat, count){
  return `
    <button class="category-card" data-nav="catalog" data-category="${cat.id}">
      <span class="category-emoji">${cat.emoji}</span>
      <h4>${cat.id}</h4>
      <span>${count} products</span>
    </button>`;
}

function renderCategoryGrids(){
  const counts = {};
  PRODUCTS.forEach(p => counts[p.category] = (counts[p.category] || 0) + 1);
  const html = CATEGORIES.map(c => renderCategoryCard(c, counts[c.id] || 0)).join("");
  document.getElementById("categoryGrid").innerHTML = html;
  document.getElementById("categoryGridFull").innerHTML = html;
}

function renderMegaMenu(){
  document.getElementById("megaCategoryList").innerHTML = `
    <h4>Shop by category</h4>
    ${CATEGORIES.map(c => `<a href="#" class="mega-link" data-nav="catalog" data-category="${c.id}">${c.emoji} ${c.id}</a>`).join("")}
  `;
}

function productCardHTML(product){
  const inWishlist = state.wishlist.has(product.id);
  const inCompare = state.compare.includes(product.id);
  return `
    <article class="product-card">
      <div class="product-media">
        <span>${product.emoji}</span>
        <div class="product-tags">${tagBadges(product)}</div>
        <div class="card-actions">
          <button class="card-icon-btn ${inWishlist ? "active" : ""}" data-action="wishlist" data-id="${product.id}" title="Add to wishlist">${inWishlist ? "♥" : "♡"}</button>
          <button class="card-icon-btn ${inCompare ? "active" : ""}" data-action="compare" data-id="${product.id}" title="Add to comparison">⇄</button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category-label">${product.category}</span>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-rating"><span class="stars">${starString(product.rating)}</span> ${product.rating.toFixed(1)} (${product.reviewCount + getReviews(product.id).length})</div>
        <d
