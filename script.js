// ========== PRODUCTS DATA ==========
const products = [
  // --- PARFUMS ---
  {
    id: 1,
    category: "parfum",
    brand: "Maison Layali",
    name: "Oud Royal",
    size: "100 ml",
    desc: "Parfum oriental intense. Notes de oud, rose et ambre. Longue tenue.",
    price: 89,
    badge: "Signature",
    img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&q=80"
  },
  {
    id: 2,
    category: "parfum",
    brand: "Maison Layali",
    name: "Rose de Tunis",
    size: "50 ml",
    desc: "Eau de parfum florale. Rose de Damas, jasmin et musc blanc.",
    price: 65,
    badge: "Nouveau",
    img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&q=80"
  },
  {
    id: 3,
    category: "parfum",
    brand: "Maison Layali",
    name: "Nuit d'Orient",
    size: "100 ml",
    desc: "Composition boisée et épicée. Santal, vanille et patchouli.",
    price: 79,
    badge: null,
    img: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=500&q=80"
  },
  {
    id: 4,
    category: "parfum",
    brand: "Maison Layali",
    name: "Fleur d'Oranger",
    size: "50 ml",
    desc: "Fraîcheur méditerranéenne. Fleur d'oranger, bergamote et cèdre.",
    price: 55,
    badge: "Best-seller",
    img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&q=80"
  },
  // --- SOINS ---
  {
    id: 5,
    category: "soin",
    brand: "La Roche-Posay",
    name: "Cicaplast Baume B5",
    size: "40 ml",
    desc: "Baume réparateur multi-usages. Apaise et répare les peaux irritées.",
    price: 49,
    badge: "Best-seller",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=80"
  },
  {
    id: 6,
    category: "soin",
    brand: "Avène",
    name: "Cicalfate+ Crème",
    size: "40 ml",
    desc: "Crème réparatrice protectrice. Idéale pour peaux fragilisées.",
    price: 35,
    badge: "Top vente",
    img: "https://images.unsplash.com/photo-1571781926291-c77df8097d8d?w=500&q=80"
  },
  {
    id: 7,
    category: "soin",
    brand: "La Roche-Posay",
    name: "Effaclar Duo+",
    size: "40 ml",
    desc: "Soin triple correction anti-imperfections, boutons & points noirs.",
    price: 65,
    badge: null,
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&q=80"
  },
  {
    id: 8,
    category: "soin",
    brand: "SVR",
    name: "Sebiaclear Crème SPF50",
    size: "50 ml",
    desc: "Crème solaire matifiante anti-imperfections pour peaux grasses.",
    price: 48,
    badge: "SPF50+",
    img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&q=80"
  },
  {
    id: 9,
    category: "soin",
    brand: "La Roche-Posay",
    name: "Anthelios UVMUNE 400",
    size: "50 ml",
    desc: "Protection solaire ultra haute UVA/UVB. Texture légère.",
    price: 50,
    badge: "Solaire",
    img: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500&q=80"
  },
  {
    id: 10,
    category: "soin",
    brand: "Nivea",
    name: "Soft Crème Hydratante",
    size: "200 ml",
    desc: "Hydratation légère quotidienne. Texture non grasse.",
    price: 18,
    badge: "Prix doux",
    img: "https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=500&q=80"
  }
];

const WHATSAPP = "33759531872";

function orderWhatsApp(productName, price) {
  const msg = encodeURIComponent(
    `Bonjour Maison Layali 👋\nJe souhaite commander :\n• ${productName}\nPrix : ${price} DT\nMerci !`
  );
  window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
}

function renderProducts(filter = "all") {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  const filtered = filter === "all"
    ? products
    : products.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(p => `
    <article class="product-card">
      <div class="product-img">
        <img src="${p.img}" alt="${p.brand} ${p.name}" loading="lazy" />
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
      </div>
      <div class="product-body">
        <div class="product-brand">${p.brand}</div>
        <h3 class="product-name">${p.name} <small style="font-weight:400;font-size:0.85em;color:#888">${p.size}</small></h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-footer">
          <div class="product-price">${p.price} <span>DT</span></div>
          <button class="btn-order" onclick="orderWhatsApp('${p.brand} ${p.name} (${p.size})', ${p.price})">
            Commander
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

function setupFilters() {
  const btns = document.querySelectorAll(".filter-btn");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProducts(btn.dataset.filter);
    });
  });
}

function runIntro() {
  const intro = document.getElementById("intro");
  const main = document.getElementById("main");
  setTimeout(() => {
    intro.classList.add("fade-out");
    main.classList.remove("hidden");
    setTimeout(() => { intro.style.display = "none"; }, 950);
  }, 4000);
}

function setupMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.querySelector(".nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const isOpen = nav.style.display === "flex";
    nav.style.display = isOpen ? "none" : "flex";
    nav.style.flexDirection = "column";
    nav.style.position = "absolute";
    nav.style.top = "76px";
    nav.style.right = "4%";
    nav.style.background = "#fff";
    nav.style.padding = "1.2rem";
    nav.style.borderRadius = "12px";
    nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.12)";
    nav.style.gap = "1rem";
    nav.style.zIndex = "200";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  setupFilters();
  runIntro();
  setupMenu();
});
