
const SITE_CONFIG = {
  whatsappNumber: "+919260328830", 
  whatsappDefaultMessage:
    "Hi Manoj Kitchen! I'd like to place a pre-order for tomorrow. My order:",
  instagramHandle: "manojkitchen",
  instagramUrl: "https://instagram.com/manojkitchen"
};

const ICONS = {
  leaf: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 20c8 1 14-5 15-15C10 4 4 10 4 20Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M6.5 17.5C10 13 13 10.5 17.5 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  drumstick: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 14.5c2.5 2.5 4.8 5.6 3 7.4-1.8 1.8-4.9-.5-7.4-3-2.5-2.5-3.7-4-3-4.7.7-.7 2.2.5 4.7 3" stroke="currentColor" stroke-width="1.6"/><path d="M14.5 14.5c-2-2-2.7-5.4-1.2-8.4a5 5 0 0 1 9.1 4.1c-1.5 3-4.9 4.3-7.9 4.3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="6" cy="19.5" r="1.2" fill="currentColor"/></svg>`,
  chilli: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 6c1.5-1.5 3.6-2.3 5-2 .3 1.4-.5 3.5-2 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M9 9c4-1 8.5 1.3 8.9 6 .3 3.7-2.7 6.6-6.2 6.4C7.4 21.1 4.6 17 5.7 13 6.3 10.8 7.4 9.6 9 9Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.6"/><path d="M12 7.5V12l3 2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.5s7-6.4 7-12A7 7 0 1 0 5 9.5c0 5.6 7 12 7 12Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="9.5" r="2.4" stroke="currentColor" stroke-width="1.6"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.02 2.5a9.5 9.5 0 0 0-8.24 14.2L2.5 21.5l4.9-1.24a9.5 9.5 0 1 0 4.62-17.76Z" stroke="currentColor" stroke-width="1.5"/><path d="M8.4 8.6c.2-.9 1-.9 1.3-.9.3 0 .5 0 .7.5s.6 1.5.6 1.6c.1.2.1.4 0 .6-.1.2-.2.3-.4.5-.2.2-.4.4-.2.7.2.4 1 1.6 2.2 2.5 1.5 1.2 2.1 1.2 2.4 1.1.3-.1.9-.9 1.1-1.2.2-.3.4-.3.7-.2.3.1 1.7.8 2 1 .3.2.5.2.5.5s-.2 1.2-.8 1.7c-.6.5-1.7.9-3 .4-1.5-.5-3.4-1.6-4.9-3.4-1.3-1.5-1.9-2.8-2.1-3.5-.2-.7-.2-1.3-.1-1.9Z" fill="currentColor"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.6"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor"/></svg>` ,
  youtube: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.8 7.2c-.2-1-.9-1.8-1.9-2C18.2 5 12 5 12 5s-6.2 0-7.9.2c-1 .2-1.7 1-1.9 2C2 8.9 2 12 2 12s0 3.1.2 4.8c.2 1 .9 1.8 1.9 2C5.8 19 12 19 12 19s6.2 0 7.9-.2c1-.2 1.7-1 1.9-2 .2-1.7.2-4.8.2-4.8s0-3.1-.2-4.8Z" stroke="currentColor" stroke-width="2"/>
<path d="M10 9L15 12L10 15V9Z" fill="currentColor"/>
</svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.8 5.9 21l1.5-6.8-5.2-4.7 6.9-.7L12 2.5Z"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 4h3l1.5 4.2-2 1.6a12 12 0 0 0 6.2 6.2l1.6-2 4.2 1.5v3c0 1-.9 1.8-1.9 1.7C10.9 19.6 4.4 13.1 3.8 6.9 3.7 5.9 4.5 4 5.5 4Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`
};

function buildWhatsAppLink(message) {
  const text = encodeURIComponent(message || SITE_CONFIG.whatsappDefaultMessage);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;
}

// ---------- MENU RENDERING ----------
function spiceIcons(level) {
  if (!level) return "";
  let out = "";
  for (let i = 0; i < level; i++) out += `<span class="spice-icon">${ICONS.chilli}</span>`;
  return `<span class="spice-row" aria-label="${level} out of 3 spice level">${out}</span>`;
}

function tagBadge(tag) {
  if (!tag) return "";
  const cls = tag.toLowerCase().replace(/[^a-z]/g, "-");
  return `<span class="tag tag--${cls}">${tag}</span>`;
}

function dishCard(dish, categoryIcon) {
  if (!dish.available) return "";
  const orderMsg = `Hi Manoj Kitchen! I'd like to pre-order: ${dish.name} — for tomorrow.`;
  return `
    <article class="dish-card" data-name="${dish.name.toLowerCase()}">
      <div class="dish-card__top">
        <span class="dish-card__icon">${categoryIcon}</span>
        ${tagBadge(dish.tag)}
      </div>
      <h4 class="dish-card__name">${dish.name}</h4>
      <p class="dish-card__desc">${dish.description}</p>
      <div class="dish-card__footer">
        <div class="dish-card__price">
          <span class="price-currency">₹</span>${dish.price}
          <span class="price-unit">${dish.unit}</span>
        </div>
        ${spiceIcons(dish.spice)}
      </div>
      <a class="dish-card__order" href="${buildWhatsAppLink(orderMsg)}" target="_blank" rel="noopener">
        Pre-order <span aria-hidden="true">→</span>
      </a>
    </article>`;
}

function renderMenu() {
  const vegGrid = document.getElementById("menu-grid-veg");
  const nonvegGrid = document.getElementById("menu-grid-nonveg");
  const extrasGrid = document.getElementById("menu-grid-extras");

  if (vegGrid) {
    vegGrid.innerHTML = MENU_DATA.veg.map((d) => dishCard(d, ICONS.leaf)).join("");
  }
  if (nonvegGrid) {
    nonvegGrid.innerHTML = MENU_DATA.nonveg.map((d) => dishCard(d, ICONS.drumstick)).join("");
  }
  if (extrasGrid) {
    extrasGrid.innerHTML = MENU_DATA.extras.map((d) => dishCard(d, ICONS.leaf)).join("");
  }
}

// ---------- MENU TABS ----------
function initMenuTabs() {
  const tabs = document.querySelectorAll(".menu-tab");
  const panels = document.querySelectorAll(".menu-panel");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("is-active"));
      panels.forEach((p) => p.classList.remove("is-active"));
      tab.classList.add("is-active");
      document.getElementById(tab.dataset.target).classList.add("is-active");
    });
  });
}

// ---------- FAQ ACCORDION ----------
function initAccordion() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach((item) => {
    const question = item.querySelector(".faq-item__q");
    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      items.forEach((i) => i.classList.remove("is-open"));
      if (!isOpen) item.classList.add("is-open");
    });
  });
}

// ---------- MOBILE NAV ----------
function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.innerHTML = isOpen ? ICONS.close : ICONS.menu;
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.innerHTML = ICONS.menu;
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

// ---------- SCROLL REVEAL ----------
function initScrollReveal() {
  const targets = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window) || targets.length === 0) {
    targets.forEach((t) => t.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  targets.forEach((t) => observer.observe(t));
}

// ---------- HEADER SHADOW ON SCROLL ----------
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

// ---------- ICON INJECTION (static icons placed via data-icon="name") ----------
function injectIcons() {
  document.querySelectorAll("[data-icon]").forEach((el) => {
    const name = el.getAttribute("data-icon");
    if (ICONS[name]) el.innerHTML = ICONS[name];
  });
}

// ---------- WHATSAPP LINKS (static buttons with data-wa-message) ----------
function initWhatsAppButtons() {
  document.querySelectorAll("[data-wa]").forEach((el) => {
    const msg = el.getAttribute("data-wa-message") || SITE_CONFIG.whatsappDefaultMessage;
    el.setAttribute("href", buildWhatsAppLink(msg));
  });
}

// ---------- CURRENT YEAR ----------
function initYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

// ---------- INIT ----------
document.addEventListener("DOMContentLoaded", () => {
  injectIcons();
  renderMenu();
  initMenuTabs();
  initAccordion();
  initMobileNav();
  initWhatsAppButtons();
  initScrollReveal();
  initHeaderScroll();
  initYear();
});
