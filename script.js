// ========== PRODUCTS DATA (Prix réels Tunisie ~ Oct 2026) ==========
const products = [
  {
    id: 1,
    brand: "La Roche-Posay",
    name: "Cicaplast Baume B5",
    size: "40 ml",
    desc: "Baume réparateur multi-usages. Apaise et répare les peaux irritées.",
    price: 49,
    badge: "Best-seller",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=80"
  },
  {
    id: 2,
    brand: "Avène",
    name: "Cicalfate+ Crème",
    size: "40 ml",
    desc: "Crème réparatrice protectrice. Idéale pour peaux fragilisées.",
    price: 35,
    badge: "Top vente",
    img: "https://images.unsplash.com/photo-1571781926291-c77df8097d8d?w=500&q=80"
  },
  {
    id: 3,
    brand: "La Roche-Posay",
    name: "Effaclar Duo+",
    size: "40 ml",
    desc: "Soin triple correction anti-imperfections, boutons & points noirs.",
    price: 65,
    badge: null,
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&q=80"
  },
  {
    id: 4,
    brand: "SVR",
    name: "Sebiaclear Crème SPF50",
    size: "50 ml",
    desc: "Crème solaire matifiante anti-imperfections pour peaux grasses.",
    price: 48,
    badge: "SPF50+",
    img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&q=80"
  },
  {
    id: 5,
    brand: "La Roche-Posay",
    name: "Anthelios UVMUNE 400",
    size: "50 ml",
    desc: "Protection solaire ultra haute UVA/UVB. Texture légère.",
    price: 50,
    badge: "Solaire",
    img: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500&q=80"
  },
  {
    id: 6,
    brand: "Avène",
    name: "Cicalfate+ Spray",
    size: "100 ml",
    desc: "Spray asséchant réparateur. Action rapide sur zones irritées.",
    price: 50,
    badge: null,
    img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70e0bc?w=500&q=80"
  },
  {
    id: 7,
    brand: "La Roche-Posay",
    name: "Cicaplast Baume B5",
    size: "100 ml",
    desc: "Format familial du baume réparateur culte.",
    price: 70,
    badge: "Format XL",
    img: "https://images.unsplash.com/photo-1620916569877-1f0c1b0b0b0b?w=500&q=80"
  },
  {
    id: 8,
    brand: "Nivea",
    name: "Soft Crème Hydratante",
    size: "200 ml",
    desc: "Hydratation légère quotidienne. Texture non grasse.",
    price: 18,
    badge: "Prix doux",
    img: "https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=500&q=80"
  }
];

// ========== RENDER PRODUCTS ==========
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  grid.innerHTML = products.map(p => `
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
          <button class="btn-add" aria-label="Ajouter" title="Ajouter">+</button>
        </div>
      </div>
    </article>
  `).join("");
}

// ========== INTRO ANIMATION ==========
function runIntro() {
  const intro = document.getElementById("intro");
  const main = document.getElementById("main");

  // Total intro duration ~ 3.8s
  setTimeout(() => {
    intro.classList.add("fade-out");
    main.classList.remove("hidden");
    setTimeout(() => {
      intro.style.display = "none";
    }, 900);
  }, 3800);
}

// ========== MOBILE MENU (simple) ==========
function setupMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.querySelector(".nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.style.display === "flex";
    nav.style.display = isOpen ? "none" : "flex";
    nav.style.flexDirection = "column";
    nav.style.position = "absolute";
    nav.style.top = "72px";
    nav.style.right = "4%";
    nav.style.background = "#fff";
    nav.style.padding = "1.2rem";
    nav.style.borderRadius = "12px";
    nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.12)";
    nav.style.gap = "1rem";
  });
}

// ========== INIT ==========
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  runIntro();
  setupMenu();
});