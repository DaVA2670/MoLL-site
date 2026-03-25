/* ============================================
   DAMIRO — App Logic
   ============================================ */

'use strict';

// ============================================
// PRODUCT DATA
// ============================================
const PRODUCTS = [
  {
    id: 1,
    name: 'Спортивные штаны Classic',
    category: 'Штаны',
    categorySlug: 'pants',
    price: 6900,
    colors: ['black', 'gray'],
    colorNames: { black: 'Чёрный', gray: 'Серый' },
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Классические спортивные штаны из плотного хлопкового джерси. Прямой крой, эластичный пояс с кулиской, два боковых кармана и карман сзади. Манжеты снизу.',
    badge: 'Новинка',
    imgColor: { black: 'pip-black', gray: 'pip-gray' },
    isNew: true,
    stock: { S: 10, M: 8, L: 5, XL: 3 }
  },
  {
    id: 2,
    name: 'Джинсы Straight Fit',
    category: 'Джинсы',
    categorySlug: 'jeans',
    price: 9500,
    colors: ['black'],
    colorNames: { black: 'Чёрный' },
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Прямые джинсы из плотного денима. Классический пятикарманный дизайн. Металлическая фурнитура с гравировкой DAMIRO.',
    badge: null,
    imgColor: { black: 'pip-black' },
    isNew: false,
    stock: { S: 6, M: 10, L: 8, XL: 4 }
  },
  {
    id: 3,
    name: 'Худи Essential',
    category: 'Худи',
    categorySlug: 'hoodies',
    price: 8900,
    colors: ['black', 'white'],
    colorNames: { black: 'Чёрный', white: 'Белый' },
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Оверсайз худи из 400г плотного хлопка. Большой карман-кенгуру, регулируемый капюшон. Вышивка DAMIRO на груди.',
    badge: 'Хит',
    imgColor: { black: 'pip-black', white: 'pip-light' },
    isNew: false,
    stock: { S: 12, M: 15, L: 10, XL: 6 }
  },
  {
    id: 4,
    name: 'Свитшот на молнии',
    category: 'Свитшоты',
    categorySlug: 'sweatshirts',
    price: 8200,
    colors: ['black', 'gray'],
    colorNames: { black: 'Чёрный', gray: 'Серый меланж' },
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Свитшот на молнии из плотного хлопкового флиса. Стойка-воротник, два боковых кармана на молнии. Минималистичный крой.',
    badge: null,
    imgColor: { black: 'pip-black', gray: 'pip-gray' },
    isNew: true,
    stock: { S: 8, M: 12, L: 9, XL: 5 }
  },
  {
    id: 5,
    name: 'Водонепроницаемый костюм',
    category: 'Верхняя одежда',
    categorySlug: 'outerwear',
    price: 24900,
    colors: ['black', 'white', 'gray'],
    colorNames: { black: 'Чёрный', white: 'Молочный', gray: 'Серый' },
    sizes: ['S', 'M', 'L'],
    description: 'Анорак и штаны из водонепроницаемой ткани. Проклеенные швы, вентиляционные молнии подмышками, регулируемые манжеты. Упаковывается в собственный карман.',
    badge: 'Лимитед',
    imgColor: { black: 'pip-black', white: 'pip-light', gray: 'pip-gray' },
    isNew: true,
    stock: { S: 4, M: 6, L: 3 }
  },
  {
    id: 6,
    name: 'Лонгслив Base',
    category: 'Лонгсливы',
    categorySlug: 'longsleeves',
    price: 4900,
    colors: ['black'],
    colorNames: { black: 'Чёрный' },
    sizes: ['S', 'M', 'L'],
    description: 'Базовый лонгслив из мерсеризованного хлопка 200г. Плотная посадка, рёбра на манжетах и горловине. Идеальная базовая вещь для любого образа.',
    badge: null,
    imgColor: { black: 'pip-black' },
    isNew: false,
    stock: { S: 20, M: 18, L: 12 }
  },
  {
    id: 7,
    name: 'Штаны Cargo',
    category: 'Штаны',
    categorySlug: 'pants',
    price: 8400,
    colors: ['black'],
    colorNames: { black: 'Чёрный' },
    sizes: ['S', 'M', 'L'],
    description: 'Карго-штаны с накладными карманами. Хлопковый твил, прямой крой с объёмным кроем в бёдрах. Эластичный пояс со шнуровкой.',
    badge: null,
    imgColor: { black: 'pip-black' },
    isNew: false,
    stock: { S: 7, M: 9, L: 6 }
  },
  {
    id: 8,
    name: 'Зип-худи Full Zip',
    category: 'Худи',
    categorySlug: 'hoodies',
    price: 9800,
    colors: ['black', 'gray'],
    colorNames: { black: 'Чёрный', gray: 'Серый' },
    sizes: ['S', 'M', 'L'],
    description: 'Зип-худи на молнии из 400г флиса. Два кармана на молнии, регулируемый капюшон. Металлическая молния с кожаным пуллером.',
    badge: 'Новинка',
    imgColor: { black: 'pip-black', gray: 'pip-gray' },
    isNew: true,
    stock: { S: 6, M: 10, L: 7 }
  },
  {
    id: 9,
    name: 'Зип-худи без рукавов',
    category: 'Худи',
    categorySlug: 'hoodies',
    price: 7600,
    colors: ['black'],
    colorNames: { black: 'Чёрный' },
    sizes: ['S', 'M', 'L'],
    description: 'Жилет на молнии из плотного флиса. Два боковых кармана, высокий воротник. Современный силуэт, подходит для слоёных образов.',
    badge: null,
    imgColor: { black: 'pip-black' },
    isNew: false,
    stock: { S: 5, M: 8, L: 6 }
  },
  {
    id: 10,
    name: 'Рубашка Oxford',
    category: 'Рубашки',
    categorySlug: 'shirts',
    price: 7200,
    colors: ['white'],
    colorNames: { white: 'Белый' },
    sizes: ['S', 'M', 'L'],
    description: 'Рубашка из хлопка оксфорд. Классический воротник на пуговицах, нагрудный карман. Вышивка DAMIRO на манжете. Relaxed fit.',
    badge: null,
    imgColor: { white: 'pip-light' },
    isNew: false,
    stock: { S: 9, M: 14, L: 8 }
  },
  {
    id: 11,
    name: 'Пазл DAMIRO',
    category: 'Аксессуары',
    categorySlug: 'accessories',
    price: 2400,
    colors: ['black'],
    colorNames: { black: 'Чёрно-белый' },
    sizes: ['ONE SIZE'],
    description: 'Коллекционный пазл DAMIRO на 500 деталей. Фирменный дизайн с паттерном коллекции. Упаковка в фирменную коробку. Идеальный подарок.',
    badge: 'Коллаб',
    imgColor: { black: 'pip-gray' },
    isNew: true,
    stock: { 'ONE SIZE': 30 }
  },
  {
    id: 12,
    name: 'Брелок Metal',
    category: 'Аксессуары',
    categorySlug: 'accessories',
    price: 1200,
    colors: ['black'],
    colorNames: { black: 'Чёрный металл' },
    sizes: ['ONE SIZE'],
    description: 'Брелок из матового металла с гравировкой DAMIRO. Доступен в 6 вариантах дизайна. Кольцо из нержавеющей стали.',
    badge: null,
    imgColor: { black: 'pip-black' },
    isNew: false,
    variants: 6,
    stock: { 'ONE SIZE': 50 }
  }
];

const CATEGORIES = [
  { slug: 'all', name: 'Все' },
  { slug: 'pants', name: 'Штаны' },
  { slug: 'jeans', name: 'Джинсы' },
  { slug: 'hoodies', name: 'Худи' },
  { slug: 'sweatshirts', name: 'Свитшоты' },
  { slug: 'outerwear', name: 'Верхняя одежда' },
  { slug: 'longsleeves', name: 'Лонгсливы' },
  { slug: 'shirts', name: 'Рубашки' },
  { slug: 'accessories', name: 'Аксессуары' }
];

const COLORS_ALL = ['black', 'white', 'gray'];
const COLOR_LABELS = { black: 'Чёрный', white: 'Белый', gray: 'Серый' };
const SIZES_ALL = ['XS', 'S', 'M', 'L', 'XL', 'ONE SIZE'];

// ============================================
// STATE
// ============================================
let state = {
  cart: JSON.parse(localStorage.getItem('damiro_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('damiro_wishlist') || '[]'),
  user: JSON.parse(localStorage.getItem('damiro_user') || 'null'),
  orders: JSON.parse(localStorage.getItem('damiro_orders') || '[]'),
  currentPage: 'home',
  currentProductId: null,
  selectedGalleryIdx: 0,
  shopFilters: { category: 'all', colors: [], sizes: [], sort: 'newest', search: '' },
  shopFilterOpen: { category: true, color: true, size: true },
  checkoutStep: 1,
  selectedShipping: 'standard',
  selectedPaymentMethod: 'card',
  accountTab: 'overview',
  currentProductColor: null,
  currentProductSize: null
};

function saveState() {
  localStorage.setItem('damiro_cart', JSON.stringify(state.cart));
  localStorage.setItem('damiro_wishlist', JSON.stringify(state.wishlist));
  if (state.user) localStorage.setItem('damiro_user', JSON.stringify(state.user));
  localStorage.setItem('damiro_orders', JSON.stringify(state.orders));
}

// ============================================
// ROUTING
// ============================================
function navigate(page, data = {}) {
  state.currentPage = page;
  if (data.productId) state.currentProductId = data.productId;
  window.scrollTo({ top: 0, behavior: 'instant' });
  renderApp();
  updateNav();
}

function updateNav() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  const isHome = state.currentPage === 'home';
  nav.className = 'nav ' + (isHome ? 'nav-transparent' : 'nav-solid');
  nav.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === state.currentPage);
  });
  updateCartCount();
}

// ============================================
// FORMATTING
// ============================================
function formatPrice(p) {
  return p.toLocaleString('ru-RU') + ' ₽';
}

// ============================================
// CART FUNCTIONS
// ============================================
function addToCart(productId, size, color, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  if (!size || (product.sizes[0] !== 'ONE SIZE' && !size)) { showToast('Выберите размер', '❗'); return; }
  const key = `${productId}-${size}-${color}`;
  const existing = state.cart.find(i => i.key === key);
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({ key, productId, size, color, qty, price: product.price });
  }
  saveState();
  updateCartCount();
  showToast(`${product.name} добавлен в корзину`, '✓');
}

function removeFromCart(key) {
  state.cart = state.cart.filter(i => i.key !== key);
  saveState();
  updateCartCount();
  if (state.currentPage === 'cart') renderCartPage();
  if (state.currentPage === 'checkout') renderCheckoutSummary();
}

function updateCartQty(key, delta) {
  const item = state.cart.find(i => i.key === key);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveState();
  if (state.currentPage === 'cart') renderCartPage();
  if (state.currentPage === 'checkout') renderCheckoutSummary();
}

function getCartTotal() {
  return state.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function getCartCount() {
  return state.cart.reduce((sum, i) => sum + i.qty, 0);
}

function updateCartCount() {
  const el = document.getElementById('cart-count');
  if (!el) return;
  const count = getCartCount();
  el.textContent = count;
  el.style.display = count > 0 ? 'flex' : 'none';
}

// ============================================
// WISHLIST FUNCTIONS
// ============================================
function toggleWishlist(productId) {
  const idx = state.wishlist.indexOf(productId);
  if (idx === -1) {
    state.wishlist.push(productId);
    showToast('Добавлено в избранное', '♡');
  } else {
    state.wishlist.splice(idx, 1);
    showToast('Удалено из избранного', '');
  }
  saveState();
  document.querySelectorAll(`[data-wishlist="${productId}"]`).forEach(btn => {
    btn.classList.toggle('active', state.wishlist.includes(productId));
    btn.innerHTML = state.wishlist.includes(productId)
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>'
      : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
  });
}

function isWishlisted(productId) {
  return state.wishlist.includes(productId);
}

// ============================================
// TOAST
// ============================================
function showToast(message, icon = '✓') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
  container.appendChild(toast);
  requestAnimationFrame(() => { requestAnimationFrame(() => { toast.classList.add('show'); }); });
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ============================================
// PRODUCT CARD HTML
// ============================================
function renderProductCard(product, selectedColor = null) {
  const color = selectedColor || product.colors[0];
  const imgClass = product.imgColor[color] || 'pip-black';
  const isWish = isWishlisted(product.id);
  return `
    <div class="product-card fade-up" onclick="navigate('product', {productId: ${product.id}})">
      <div class="product-card-img-wrap">
        <div class="product-img-placeholder ${imgClass}" data-category="${product.category}"></div>
        <div class="product-img-placeholder ${imgClass === 'pip-black' ? 'pip-gray' : 'pip-black'} product-card-img-alt" style="position:absolute;inset:0;"></div>
        ${product.badge ? `<div class="product-card-badge">${product.badge}</div>` : ''}
        <button class="product-card-wishlist ${isWish ? 'active' : ''}" data-wishlist="${product.id}" onclick="event.stopPropagation(); toggleWishlist(${product.id})">
          ${isWish
            ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>'
            : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>'
          }
        </button>
        <div class="product-card-actions">
          <button class="btn btn-primary" style="flex:1;height:44px;font-size:11px;" onclick="event.stopPropagation(); openQuickView(${product.id})">Быстрый просмотр</button>
        </div>
      </div>
      <div class="product-card-info">
        <div class="product-card-category">${product.category}</div>
        <div class="product-card-name">${product.name}</div>
        <div class="product-card-price">${formatPrice(product.price)}</div>
      </div>
    </div>`;
}

// ============================================
// HOME PAGE
// ============================================
function renderHomePage() {
  const newProducts = PRODUCTS.filter(p => p.isNew).slice(0, 4);
  const popularProducts = PRODUCTS.slice(0, 4);
  return `
    <!-- HERO -->
    <section class="hero" id="hero-section">
      <div class="hero-bg">
        <div class="hero-bg-visual"></div>
        <div class="hero-bg-gradient"></div>
      </div>
      <div class="hero-content">
        <div class="caption hero-label">Весна / Лето 2025</div>
        <h1 class="display-xl hero-title">DAMIRO</h1>
        <p class="hero-subtitle">Минимализм. Качество. Идентичность.<br>Новая коллекция уже доступна.</p>
        <div class="hero-cta">
          <button class="btn btn-white btn-lg" onclick="navigate('shop')">Смотреть коллекцию</button>
          <button class="btn btn-ghost btn-lg" onclick="navigate('about')">О бренде</button>
        </div>
      </div>
      <div class="hero-scroll">
        <div class="hero-scroll-line"></div>
        <span>Скролл</span>
      </div>
    </section>

    <!-- MARQUEE -->
    <div class="marquee-strip">
      <div class="marquee-track">
        ${Array(8).fill('<span class="marquee-item">НОВАЯ КОЛЛЕКЦИЯ 2025</span><span class="marquee-item">БЕСПЛАТНАЯ ДОСТАВКА ОТ 8000 ₽</span><span class="marquee-item">DAMIRO STREETWEAR</span><span class="marquee-item">PREMIUM QUALITY</span>').join('')}
      </div>
    </div>

    <!-- NEW ARRIVALS -->
    <section class="section">
      <div class="container">
        <div class="section-header fade-up">
          <div>
            <div class="section-eyebrow">Новые поступления</div>
            <h2 class="heading-xl">Новая коллекция</h2>
          </div>
          <button class="btn btn-secondary" onclick="navigate('shop')">Смотреть всё</button>
        </div>
        <div class="products-grid products-grid-4 stagger">
          ${newProducts.map(p => renderProductCard(p)).join('')}
        </div>
      </div>
    </section>

    <!-- FEATURED EDITORIAL -->
    <section class="section-sm" style="background: var(--gray-50); border-top: 1px solid var(--gray-200); border-bottom: 1px solid var(--gray-200);">
      <div class="container">
        <div class="featured-grid fade-in">
          <div class="featured-hero" onclick="navigate('shop')">
            <div class="product-img-placeholder pip-black" style="width:100%;height:100%;" data-category="ВЕРХНЯЯ ОДЕЖДА"></div>
            <div class="featured-overlay">
              <div class="featured-tag">Лимитированная серия</div>
              <div class="featured-title">Водонепроницаемый костюм</div>
              <div class="featured-cta">Смотреть</div>
            </div>
          </div>
          <div class="featured-item" onclick="navigate('shop')">
            <div class="product-img-placeholder pip-gray" style="width:100%;height:100%;" data-category="ХУДИ"></div>
            <div class="featured-overlay">
              <div class="featured-tag">Базовая линейка</div>
              <div class="featured-title">Essential Hoodies</div>
              <div class="featured-cta">Смотреть</div>
            </div>
          </div>
          <div class="featured-item" onclick="navigate('shop')">
            <div class="product-img-placeholder pip-light" style="width:100%;height:100%;" data-category="БРЮКИ"></div>
            <div class="featured-overlay">
              <div class="featured-tag">Мужская линейка</div>
              <div class="featured-title">Pants Collection</div>
              <div class="featured-cta">Смотреть</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- POPULAR PRODUCTS -->
    <section class="section">
      <div class="container">
        <div class="section-header fade-up">
          <div>
            <div class="section-eyebrow">Популярное</div>
            <h2 class="heading-xl">Лучшие продажи</h2>
          </div>
          <button class="btn btn-secondary" onclick="navigate('shop')">Весь каталог</button>
        </div>
        <div class="products-grid products-grid-4 stagger">
          ${popularProducts.map(p => renderProductCard(p)).join('')}
        </div>
      </div>
    </section>

    <!-- PHILOSOPHY -->
    <section class="philosophy fade-in">
      <div class="container">
        <div class="philosophy-content">
          <div class="section-eyebrow" style="color:rgba(255,255,255,0.4);margin-bottom:24px;">Наша философия</div>
          <div class="philosophy-quote">Одежда — это язык.<br>Мы создаём словарь.</div>
          <p class="philosophy-text">DAMIRO — это не просто бренд. Это образ мышления. Каждая вещь создана для тех, кто ценит качество, лаконичность и смысл за каждой деталью.</p>
          <button class="btn btn-ghost btn-lg" onclick="navigate('about')">Наша история</button>
          <div class="philosophy-stats stagger">
            <div>
              <div class="philosophy-stat-num">2020</div>
              <div class="philosophy-stat-label">Год основания</div>
            </div>
            <div>
              <div class="philosophy-stat-num">100%</div>
              <div class="philosophy-stat-label">Хлопок премиум</div>
            </div>
            <div>
              <div class="philosophy-stat-num">12K+</div>
              <div class="philosophy-stat-label">Клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- INSTAGRAM GRID -->
    <section class="section-sm">
      <div class="container">
        <div class="section-header-center fade-up">
          <div class="section-eyebrow">Instagram</div>
          <h2 class="heading-lg">@damiro.official</h2>
        </div>
        <div class="insta-grid stagger">
          ${['pip-black','pip-gray','pip-light','pip-black','pip-gray','pip-light'].map((cls,i) => `
            <div class="insta-item" onclick="window.open('#')">
              <div class="product-img-placeholder ${cls}" style="width:100%;height:100%;" data-category=""></div>
              <div class="insta-item-overlay">
                <svg class="insta-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/></svg>
              </div>
            </div>`).join('')}
        </div>
      </div>
    </section>

    <!-- NEWSLETTER -->
    <section class="newsletter">
      <div class="container">
        <div class="fade-up">
          <div class="section-eyebrow">Будьте в курсе</div>
          <h2 class="newsletter-title">Подпишитесь на рассылку</h2>
          <p class="newsletter-sub">Первыми узнавайте о новых коллекциях, эксклюзивных дропах и специальных предложениях.</p>
          <form class="newsletter-form" onsubmit="handleNewsletterSubmit(event)">
            <input type="email" class="newsletter-input" placeholder="Введите ваш email" required>
            <button type="submit" class="newsletter-btn">Подписаться</button>
          </form>
          <p class="newsletter-disclaimer">Без спама. Отписаться можно в любое время.</p>
        </div>
      </div>
    </section>`;
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  showToast('Вы успешно подписались!', '✓');
  e.target.reset();
}

// ============================================
// SHOP PAGE
// ============================================
function getFilteredProducts() {
  let products = [...PRODUCTS];
  const { category, colors, sizes, sort, search } = state.shopFilters;
  if (category !== 'all') products = products.filter(p => p.categorySlug === category);
  if (colors.length > 0) products = products.filter(p => p.colors.some(c => colors.includes(c)));
  if (sizes.length > 0) products = products.filter(p => p.sizes.some(s => sizes.includes(s)));
  if (search) {
    const q = search.toLowerCase();
    products = products.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }
  if (sort === 'price-asc') products.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') products.sort((a, b) => b.price - a.price);
  else if (sort === 'newest') products.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  return products;
}

function renderShopPage() {
  const filtered = getFilteredProducts();
  return `
    <div style="padding-top: var(--nav-height);">
      <!-- Shop Header -->
      <div class="shop-header">
        <div class="container">
          <div class="shop-header-inner">
            <div>
              <h1 class="shop-title heading-xl">Каталог</h1>
              <div class="shop-count caption mt-8">${filtered.length} товаров</div>
            </div>
            <div class="shop-search-bar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <input type="text" class="shop-search-input" placeholder="Поиск товаров..." value="${state.shopFilters.search}" oninput="handleShopSearch(this.value)">
            </div>
          </div>
        </div>
      </div>

      <!-- Category Tabs -->
      <div style="border-bottom: 1px solid var(--gray-200); overflow-x: auto;">
        <div class="container" style="display:flex;gap:0;">
          ${CATEGORIES.map(cat => `
            <button onclick="setShopCategory('${cat.slug}')" style="
              padding: 16px 20px;
              font-size: 12px;
              font-weight: 500;
              letter-spacing: 0.1em;
              text-transform: uppercase;
              border-bottom: 2px solid ${state.shopFilters.category === cat.slug ? 'var(--black)' : 'transparent'};
              color: ${state.shopFilters.category === cat.slug ? 'var(--black)' : 'var(--gray-500)'};
              white-space: nowrap;
              transition: color 0.2s, border-color 0.2s;
            ">${cat.name}</button>`).join('')}
        </div>
      </div>

      <!-- Layout -->
      <div class="container">
        <div class="shop-layout">
          <!-- Sidebar -->
          <aside class="filters-sidebar">
            <div class="filters-title">
              Фильтры
              <span class="filters-clear" onclick="clearFilters()">Сбросить</span>
            </div>

            <!-- Color Filter -->
            <div class="filter-group">
              <div class="filter-group-header ${state.shopFilterOpen.color ? 'open' : ''}" onclick="toggleFilterGroup('color')">
                <span class="filter-group-label">Цвет</span>
                <span class="filter-group-toggle">+</span>
              </div>
              <div class="filter-options ${state.shopFilterOpen.color ? 'open' : ''}">
                ${COLORS_ALL.map(c => `
                  <label class="filter-option" onclick="toggleColorFilter('${c}')">
                    <div class="filter-color-swatch ${c}"></div>
                    <span class="filter-option-label">${COLOR_LABELS[c]}</span>
                    <div class="filter-checkbox ${state.shopFilters.colors.includes(c) ? 'checked' : ''}" style="margin-left:auto;"></div>
                  </label>`).join('')}
              </div>
            </div>

            <!-- Size Filter -->
            <div class="filter-group">
              <div class="filter-group-header ${state.shopFilterOpen.size ? 'open' : ''}" onclick="toggleFilterGroup('size')">
                <span class="filter-group-label">Размер</span>
                <span class="filter-group-toggle">+</span>
              </div>
              <div class="filter-options ${state.shopFilterOpen.size ? 'open' : ''}">
                ${['XS', 'S', 'M', 'L', 'XL'].map(s => `
                  <label class="filter-option" onclick="toggleSizeFilter('${s}')">
                    <span class="filter-option-label">${s}</span>
                    <div class="filter-checkbox ${state.shopFilters.sizes.includes(s) ? 'checked' : ''}" style="margin-left:auto;"></div>
                  </label>`).join('')}
              </div>
            </div>
          </aside>

          <!-- Product Grid -->
          <div>
            <div class="shop-toolbar">
              <div class="body-sm" style="color:var(--gray-500);">Показано: ${filtered.length} товаров</div>
              <select class="sort-select" onchange="setShopSort(this.value)">
                <option value="newest" ${state.shopFilters.sort === 'newest' ? 'selected' : ''}>Сначала новые</option>
                <option value="price-asc" ${state.shopFilters.sort === 'price-asc' ? 'selected' : ''}>Цена: по возрастанию</option>
                <option value="price-desc" ${state.shopFilters.sort === 'price-desc' ? 'selected' : ''}>Цена: по убыванию</option>
              </select>
            </div>
            ${filtered.length === 0 ? `
              <div style="text-align:center;padding:100px 0;color:var(--gray-500);">
                <div style="font-size:40px;margin-bottom:16px;">○</div>
                <div style="font-size:18px;font-weight:600;margin-bottom:8px;">Товары не найдены</div>
                <div style="font-size:14px;">Попробуйте изменить фильтры</div>
              </div>
            ` : `
              <div class="products-grid products-grid-3 stagger">
                ${filtered.map(p => renderProductCard(p)).join('')}
              </div>
            `}
          </div>
        </div>
      </div>
    </div>`;
}

function handleShopSearch(val) {
  state.shopFilters.search = val;
  document.querySelector('.shop-count').textContent = getFilteredProducts().length + ' товаров';
  const grid = document.querySelector('.products-grid');
  if (grid) {
    const filtered = getFilteredProducts();
    grid.innerHTML = filtered.map(p => renderProductCard(p)).join('');
    initScrollAnimations();
  }
  const countEl = document.querySelector('[class*="shop-count"]');
}

function setShopCategory(slug) {
  state.shopFilters.category = slug;
  renderShopArea();
}

function setShopSort(val) {
  state.shopFilters.sort = val;
  renderShopArea();
}

function toggleColorFilter(color) {
  const idx = state.shopFilters.colors.indexOf(color);
  if (idx === -1) state.shopFilters.colors.push(color);
  else state.shopFilters.colors.splice(idx, 1);
  renderShopArea();
}

function toggleSizeFilter(size) {
  const idx = state.shopFilters.sizes.indexOf(size);
  if (idx === -1) state.shopFilters.sizes.push(size);
  else state.shopFilters.sizes.splice(idx, 1);
  renderShopArea();
}

function toggleFilterGroup(group) {
  state.shopFilterOpen[group] = !state.shopFilterOpen[group];
  renderShopArea();
}

function clearFilters() {
  state.shopFilters = { category: 'all', colors: [], sizes: [], sort: 'newest', search: '' };
  renderShopArea();
}

function renderShopArea() {
  const page = document.getElementById('page-shop');
  if (page) page.innerHTML = renderShopPage();
  initScrollAnimations();
}

// ============================================
// PRODUCT PAGE
// ============================================
function renderProductPage() {
  const product = PRODUCTS.find(p => p.id === state.currentProductId);
  if (!product) return '<div class="container" style="padding-top:200px;text-align:center;">Товар не найден</div>';

  if (!state.currentProductColor || !product.colors.includes(state.currentProductColor)) {
    state.currentProductColor = product.colors[0];
  }
  if (!state.currentProductSize) state.currentProductSize = null;

  const color = state.currentProductColor;
  const imgClass = product.imgColor[color] || 'pip-black';
  const related = PRODUCTS.filter(p => p.id !== product.id && p.categorySlug === product.categorySlug).slice(0, 4);
  const isWish = isWishlisted(product.id);

  const thumbColors = product.colors.map((c, i) => {
    const cls = product.imgColor[c] || 'pip-black';
    return `<div class="product-gallery-thumb ${c === color ? 'active' : ''}" onclick="setProductColor('${c}')">
      <div class="product-img-placeholder ${cls}" style="width:100%;height:100%;"></div>
    </div>`;
  });

  while (thumbColors.length < 5) {
    const cls = product.imgColor[product.colors[0]] || 'pip-black';
    thumbColors.push(`<div class="product-gallery-thumb ${thumbColors.length === 0 ? 'active' : ''}" onclick="">
      <div class="product-img-placeholder ${cls}" style="width:100%;height:100%;opacity:0.5;"></div>
    </div>`);
  }

  return `
    <div class="product-page">
      <div class="product-layout">
        <!-- Gallery -->
        <div class="product-gallery">
          <div class="product-gallery-main" id="product-gallery-main">
            <div class="product-img-placeholder ${imgClass}" style="width:100%;height:100%;" data-category="${product.category}" id="main-product-img"></div>
          </div>
          <div class="product-gallery-thumbs">
            ${thumbColors.slice(0, 5).join('')}
          </div>
        </div>

        <!-- Info -->
        <div class="product-info">
          <div class="product-breadcrumb">
            <a href="#" onclick="navigate('home')">Главная</a>
            <span>›</span>
            <a href="#" onclick="navigate('shop')">Каталог</a>
            <span>›</span>
            <span>${product.name}</span>
          </div>

          <div class="caption" style="color:var(--gray-500);margin-bottom:12px;">${product.category}</div>
          <h1 class="product-name">${product.name}</h1>

          <div class="product-price-row">
            <span class="product-price">${formatPrice(product.price)}</span>
            ${product.badge === 'Хит' ? '<span class="product-card-badge">Хит</span>' : ''}
          </div>

          <div class="product-divider"></div>

          <!-- Color -->
          ${product.colors.length > 1 ? `
          <div class="product-option-label">
            Цвет: ${product.colorNames[color]}
          </div>
          <div class="color-options">
            ${product.colors.map(c => `
              <button class="color-btn ${c === color ? 'active' : ''}" onclick="setProductColor('${c}')" title="${product.colorNames[c]}">
                <div class="color-swatch ${c}"></div>
              </button>`).join('')}
          </div>
          ` : `<div class="product-option-label mb-16">Цвет: ${product.colorNames[color]}</div>`}

          <!-- Sizes -->
          <div class="product-option-label">
            Размер
            <span class="size-guide-link" onclick="openSizeGuide()">Таблица размеров</span>
          </div>
          <div class="size-options">
            ${product.sizes.map(s => `
              <button class="size-btn ${s === state.currentProductSize ? 'active' : ''} ${(product.stock[s] || 0) === 0 ? 'out-of-stock' : ''}"
                onclick="setProductSize('${s}')"
                ${(product.stock[s] || 0) === 0 ? 'disabled' : ''}>
                ${s}
              </button>`).join('')}
          </div>

          <!-- Add to Cart -->
          <div class="product-add-row">
            <button class="btn btn-primary btn-full btn-lg" onclick="handleAddToCart(${product.id})">
              Добавить в корзину
            </button>
            <button class="product-wishlist-btn ${isWish ? 'active' : ''}" data-wishlist="${product.id}" onclick="toggleWishlist(${product.id})">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWish ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
          </div>

          <div class="product-divider"></div>

          <!-- Description -->
          <p class="product-desc">${product.description}</p>

          <!-- Accordion -->
          <div class="product-accordion mt-24">
            ${[
              ['Состав и уход', 'Хлопок 100%, плотность 350-400г/м². Стирка при 30°C. Не отбеливать. Гладить при низкой температуре.'],
              ['Доставка и возврат', 'Доставка по России 3-7 рабочих дней. Бесплатно при заказе от 8000 ₽. Возврат в течение 14 дней.'],
              ['Размерная сетка', 'S — 44-46, M — 48-50, L — 52-54, XL — 56-58. При выборе оверсайз-посадки рекомендуем выбрать свой размер.']
            ].map(([title, content]) => `
              <div class="product-accordion-item">
                <div class="product-accordion-header" onclick="toggleProductAccordion(this)">
                  <span>${title}</span>
                  <span class="product-accordion-icon">+</span>
                </div>
                <div class="product-accordion-body">
                  <div class="product-accordion-content">${content}</div>
                </div>
              </div>`).join('')}
          </div>
        </div>
      </div>

      <!-- Related Products -->
      ${related.length > 0 ? `
        <div class="section" style="border-top: 1px solid var(--gray-200);">
          <div class="container">
            <div class="section-header fade-up">
              <h2 class="heading-xl">Вам также понравится</h2>
              <button class="btn btn-secondary" onclick="navigate('shop')">Весь каталог</button>
            </div>
            <div class="products-grid products-grid-4 stagger">
              ${related.map(p => renderProductCard(p)).join('')}
            </div>
          </div>
        </div>
      ` : ''}
    </div>`;
}

function setProductColor(color) {
  state.currentProductColor = color;
  const product = PRODUCTS.find(p => p.id === state.currentProductId);
  if (!product) return;
  const imgClass = product.imgColor[color] || 'pip-black';
  const main = document.getElementById('main-product-img');
  if (main) {
    main.className = `product-img-placeholder ${imgClass}`;
    main.setAttribute('data-category', product.category);
  }
  document.querySelectorAll('.color-btn').forEach(btn => {
    btn.classList.toggle('active', btn.title === product.colorNames[color]);
  });
  document.querySelectorAll('.product-gallery-thumb').forEach((t, i) => {
    t.classList.toggle('active', i === product.colors.indexOf(color));
  });
  const colorLabel = document.querySelector('.product-option-label');
  if (colorLabel && product.colors.length > 1) {
    colorLabel.textContent = `Цвет: ${product.colorNames[color]}`;
  }
}

function setProductSize(size) {
  state.currentProductSize = size;
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim() === size);
  });
}

function handleAddToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  if (product.sizes[0] !== 'ONE SIZE' && !state.currentProductSize) {
    showToast('Пожалуйста, выберите размер', '❗');
    document.querySelector('.size-options')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
  const size = product.sizes[0] === 'ONE SIZE' ? 'ONE SIZE' : state.currentProductSize;
  addToCart(productId, size, state.currentProductColor || product.colors[0]);
}

function toggleProductAccordion(header) {
  const item = header.parentElement;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.product-accordion-item').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

function openSizeGuide() {
  const modal = document.getElementById('size-guide-modal');
  if (modal) { modal.classList.add('open'); document.body.style.overflow = 'hidden'; }
}

// ============================================
// QUICK VIEW
// ============================================
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const color = product.colors[0];
  const imgClass = product.imgColor[color] || 'pip-black';
  const modal = document.getElementById('quick-view-modal');
  if (!modal) return;
  modal.querySelector('.modal-grid').innerHTML = `
    <div class="modal-img">
      <div class="product-img-placeholder ${imgClass}" style="width:100%;height:100%;" data-category="${product.category}"></div>
    </div>
    <div class="modal-info">
      <div class="modal-category">${product.category}</div>
      <div class="modal-name">${product.name}</div>
      <div class="modal-price">${formatPrice(product.price)}</div>
      <div class="product-option-label mb-8">Размер</div>
      <div class="size-options" id="quick-size-opts">
        ${product.sizes.map(s => `<button class="size-btn" onclick="selectQuickSize(this, '${s}', ${productId})">${s}</button>`).join('')}
      </div>
      <div class="mt-24" style="display:flex;flex-direction:column;gap:12px;">
        <button class="btn btn-primary btn-full btn-lg" onclick="addQuickToCart(${productId})">Добавить в корзину</button>
        <button class="btn btn-secondary btn-full" onclick="closeQuickView(); navigate('product', {productId:${productId}})">Подробнее</button>
      </div>
    </div>`;
  modal._selectedSize = null;
  modal._productId = productId;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function selectQuickSize(btn, size, productId) {
  document.querySelectorAll('#quick-size-opts .size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('quick-view-modal')._selectedSize = size;
}

function addQuickToCart(productId) {
  const modal = document.getElementById('quick-view-modal');
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const size = product.sizes[0] === 'ONE SIZE' ? 'ONE SIZE' : modal._selectedSize;
  if (!size) { showToast('Выберите размер', '❗'); return; }
  addToCart(productId, size, product.colors[0]);
  closeQuickView();
}

function closeQuickView() {
  document.getElementById('quick-view-modal')?.classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================
// ABOUT PAGE
// ============================================
function renderAboutPage() {
  return `
    <div class="about-hero">
      <div class="about-hero-bg"></div>
      <div class="about-hero-content">
        <div class="caption" style="color:rgba(255,255,255,0.5);margin-bottom:16px;">О нас</div>
        <h1 class="display-lg" style="color:var(--white);max-width:800px;">Мы создаём одежду для тех, кто думает.</h1>
      </div>
    </div>

    <section class="about-story">
      <div class="container">
        <div class="about-story-grid">
          <div class="about-story-text fade-up">
            <div class="section-eyebrow">История бренда</div>
            <h2 class="about-story-title">DAMIRO — это про минимализм и смысл</h2>
            <div class="about-story-body">
              <p>DAMIRO появился в 2020 году как ответ на переполненный рынок, где бренды кричат, а не говорят. Мы выбрали тишину — и в этой тишине нашли свой голос.</p>
              <p>Наша одежда создана для городской жизни: от утреннего кофе до поздних прогулок. Каждый предмет — это продуманная вещь без лишнего. Никаких логотипов ради логотипов, никаких принтов ради трендов.</p>
              <p>Мы верим, что стиль — это не то, что ты надеваешь. Это то, как ты это носишь. И мы делаем вещи, которые дают вам эту свободу.</p>
            </div>
          </div>
          <div class="about-img fade-in">
            <div class="product-img-placeholder pip-black" style="width:100%;height:100%;" data-category="DAMIRO 2020"></div>
          </div>
        </div>
      </div>
    </section>

    <div class="about-full-img fade-in">
      <div class="product-img-placeholder pip-gray" style="width:100%;height:100%;opacity:0.7;" data-category=""></div>
      <div class="about-full-img-caption">
        <div class="caption" style="color:rgba(255,255,255,0.5);margin-bottom:8px;">Кампания 2025</div>
        <div class="display-md" style="color:var(--white);">Less is More</div>
      </div>
    </div>

    <section class="about-values">
      <div class="container">
        <div class="section-header-center fade-up">
          <div class="section-eyebrow">Наши принципы</div>
          <h2 class="heading-xl">Что нами движет</h2>
        </div>
        <div class="about-values-grid stagger">
          <div>
            <div class="about-value-num">01</div>
            <div class="about-value-title">Качество без компромиссов</div>
            <p class="about-value-text">Мы используем только первоклассные ткани — плотный хлопок, органический флис, технические материалы. Каждый шов выверен, каждая деталь продумана.</p>
          </div>
          <div>
            <div class="about-value-num">02</div>
            <div class="about-value-title">Минимализм как язык</div>
            <p class="about-value-text">Мы убираем всё лишнее. Остаётся только форма, силуэт, посадка. В этом — наша сила. Ничего случайного, всё на своём месте.</p>
          </div>
          <div>
            <div class="about-value-num">03</div>
            <div class="about-value-title">Городской ритм</div>
            <p class="about-value-text">DAMIRO создан для города. Для тех, кто постоянно в движении, кто ценит удобство и внешний вид одновременно. Функциональность и стиль — неотделимы.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background:var(--black);color:var(--white);">
      <div class="container text-center">
        <div class="section-eyebrow" style="color:rgba(255,255,255,0.4);margin-bottom:24px;">Присоединяйтесь</div>
        <h2 class="display-md" style="margin-bottom:32px;">Станьте частью DAMIRO</h2>
        <p class="body-lg" style="color:rgba(255,255,255,0.6);max-width:500px;margin:0 auto 40px;">Следите за нашими каналами, чтобы первыми узнавать о новых дропах и коллаборациях.</p>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
          <button class="btn btn-ghost btn-lg">Instagram</button>
          <button class="btn btn-ghost btn-lg">Telegram</button>
          <button class="btn btn-white btn-lg" onclick="navigate('shop')">Смотреть каталог</button>
        </div>
      </div>
    </section>`;
}

// ============================================
// CONTACT PAGE
// ============================================
function renderContactPage() {
  return `
    <div class="contact-page">
      <div class="container">
        <div class="contact-grid">
          <div class="fade-up">
            <div class="section-eyebrow">Контакты</div>
            <h1 class="contact-info-title">Свяжитесь с нами</h1>
            <p class="contact-info-sub">Остались вопросы? Мы всегда на связи. Напишите нам — ответим в течение 24 часов.</p>
            <div class="contact-detail">
              <div class="contact-detail-item">
                <div class="contact-detail-icon">✉</div>
                <div>
                  <div class="contact-detail-label">Email</div>
                  <div class="contact-detail-value">hello@damiro.ru</div>
                </div>
              </div>
              <div class="contact-detail-item">
                <div class="contact-detail-icon">◎</div>
                <div>
                  <div class="contact-detail-label">Адрес</div>
                  <div class="contact-detail-value">Москва, ул. Арбат, 24<br>Пн-Пт 10:00–20:00</div>
                </div>
              </div>
              <div class="contact-detail-item">
                <div class="contact-detail-icon">☎</div>
                <div>
                  <div class="contact-detail-label">Телефон</div>
                  <div class="contact-detail-value">+7 (495) 123-45-67</div>
                </div>
              </div>
            </div>
            <div class="contact-socials">
              <button class="contact-social-btn">Instagram</button>
              <button class="contact-social-btn">Telegram</button>
              <button class="contact-social-btn">VK</button>
            </div>
          </div>

          <div class="fade-up" style="transition-delay:0.2s;">
            <form class="contact-form" onsubmit="handleContactSubmit(event)">
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Имя</label>
                  <input type="text" class="form-input" placeholder="Ваше имя" required>
                </div>
                <div class="form-group">
                  <label class="form-label">Email</label>
                  <input type="email" class="form-input" placeholder="email@example.com" required>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Тема</label>
                <select class="form-select">
                  <option value="">Выберите тему...</option>
                  <option>Вопрос о заказе</option>
                  <option>Возврат и обмен</option>
                  <option>Сотрудничество</option>
                  <option>Другое</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Сообщение</label>
                <textarea class="form-textarea" placeholder="Ваше сообщение..." required></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-full btn-lg">Отправить сообщение</button>
            </form>
          </div>
        </div>
      </div>
    </div>`;
}

function handleContactSubmit(e) {
  e.preventDefault();
  showToast('Сообщение отправлено! Ответим в течение 24 часов.', '✓');
  e.target.reset();
}

// ============================================
// CART PAGE
// ============================================
function renderCartPage() {
  const cartEl = document.getElementById('page-cart');
  if (cartEl) cartEl.innerHTML = getCartHTML();
}

function getCartHTML() {
  if (state.cart.length === 0) {
    return `
      <div class="cart-page">
        <div class="container">
          <h1 class="cart-title">Корзина</h1>
          <div class="cart-empty">
            <div class="cart-empty-icon">○</div>
            <div class="cart-empty-title">Корзина пуста</div>
            <p class="cart-empty-sub">Добавьте товары из каталога</p>
            <button class="btn btn-primary btn-lg mt-24" onclick="navigate('shop')">Перейти в каталог</button>
          </div>
        </div>
      </div>`;
  }

  const subtotal = getCartTotal();
  const shipping = subtotal >= 8000 ? 0 : 390;
  const total = subtotal + shipping;

  return `
    <div class="cart-page">
      <div class="container">
        <h1 class="cart-title">Корзина (${getCartCount()})</h1>
        <div class="cart-layout">
          <!-- Items -->
          <div>
            <div class="cart-items">
              ${state.cart.map(item => {
                const product = PRODUCTS.find(p => p.id === item.productId);
                if (!product) return '';
                const imgClass = product.imgColor[item.color] || 'pip-black';
                return `
                  <div class="cart-item" data-key="${item.key}">
                    <div class="cart-item-img" onclick="navigate('product',{productId:${item.productId}})" style="cursor:pointer;">
                      <div class="product-img-placeholder ${imgClass}" style="width:100%;height:100%;"></div>
                    </div>
                    <div>
                      <div class="cart-item-name">${product.name}</div>
                      <div class="cart-item-meta">
                        Цвет: ${product.colorNames[item.color] || item.color}<br>
                        Размер: ${item.size}
                      </div>
                      <div class="cart-item-qty">
                        <button class="qty-btn" onclick="updateCartQty('${item.key}', -1)">−</button>
                        <div class="qty-value">${item.qty}</div>
                        <button class="qty-btn" onclick="updateCartQty('${item.key}', 1)">+</button>
                      </div>
                      <div class="cart-item-remove" onclick="removeFromCart('${item.key}')">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="3 6 5 6 21 6"/><path d="m19 6-.867 14.142A2 2 0 0 1 16.138 22H7.862a2 2 0 0 1-1.995-1.858L5 6m5 0V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2"/></svg>
                        Удалить
                      </div>
                    </div>
                    <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
                  </div>`;
              }).join('')}
            </div>
          </div>

          <!-- Summary -->
          <div class="cart-summary">
            <div class="cart-summary-title">Итого</div>
            <div class="cart-summary-row"><span class="cart-summary-label">Подытог</span><span class="cart-summary-value">${formatPrice(subtotal)}</span></div>
            <div class="cart-summary-row"><span class="cart-summary-label">Доставка</span><span class="cart-summary-value">${shipping === 0 ? 'Бесплатно' : formatPrice(shipping)}</span></div>
            ${shipping > 0 ? `<div style="font-size:12px;color:var(--gray-500);padding:8px 0;">До бесплатной доставки: ${formatPrice(8000 - subtotal)}</div>` : ''}
            <div class="promo-row">
              <input type="text" class="promo-input" placeholder="Промокод">
              <button class="promo-btn" onclick="applyPromo()">Применить</button>
            </div>
            <div class="cart-summary-total"><span>К оплате</span><span>${formatPrice(total)}</span></div>
            <button class="btn btn-primary btn-full btn-lg mt-16" onclick="navigate('checkout')">Оформить заказ</button>
            <div class="mt-16 text-center">
              <button class="body-sm" style="color:var(--gray-500);text-decoration:underline;" onclick="navigate('shop')">Продолжить покупки</button>
            </div>
            <div style="display:flex;gap:8px;justify-content:center;margin-top:20px;">
              ${['Visa','Mastercard','МИР'].map(c => `<div class="card-logo">${c}</div>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

function applyPromo() {
  showToast('Промокод не найден', '✗');
}

// ============================================
// CHECKOUT PAGE
// ============================================
function renderCheckoutPage() {
  return `
    <div class="checkout-page">
      <div class="checkout-nav">
        <div class="checkout-nav-logo">DAMIRO</div>
        <div class="checkout-steps">
          <div class="checkout-step ${state.checkoutStep >= 1 ? 'active' : ''}">
            <div class="checkout-step-num">1</div>
            <span>Данные</span>
          </div>
          <div class="checkout-step-sep"></div>
          <div class="checkout-step ${state.checkoutStep >= 2 ? 'active' : ''}">
            <div class="checkout-step-num">2</div>
            <span>Доставка</span>
          </div>
          <div class="checkout-step-sep"></div>
          <div class="checkout-step ${state.checkoutStep >= 3 ? 'active' : ''}">
            <div class="checkout-step-num">3</div>
            <span>Оплата</span>
          </div>
        </div>
        <button onclick="navigate('cart')" style="font-size:13px;font-weight:500;color:var(--gray-500);">← Корзина</button>
      </div>

      <div class="checkout-layout">
        <!-- Form -->
        <div class="checkout-form-area">
          <!-- Step 1: Contact Info -->
          <div class="checkout-section">
            <div class="checkout-section-title">Контактные данные</div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Имя</label>
                <input type="text" class="form-input" placeholder="Имя" value="${state.user?.name?.split(' ')[0] || ''}">
              </div>
              <div class="form-group">
                <label class="form-label">Фамилия</label>
                <input type="text" class="form-input" placeholder="Фамилия" value="${state.user?.name?.split(' ')[1] || ''}">
              </div>
            </div>
            <div class="form-group mt-16">
              <label class="form-label">Email</label>
              <input type="email" class="form-input" placeholder="email@example.com" value="${state.user?.email || ''}">
            </div>
            <div class="form-group mt-16">
              <label class="form-label">Телефон</label>
              <input type="tel" class="form-input" placeholder="+7 (___) ___-__-__">
            </div>
          </div>

          <!-- Step 2: Shipping -->
          <div class="checkout-section">
            <div class="checkout-section-title">Адрес доставки</div>
            <div class="form-group">
              <label class="form-label">Город</label>
              <input type="text" class="form-input" placeholder="Город">
            </div>
            <div class="form-group mt-16">
              <label class="form-label">Улица, дом, квартира</label>
              <input type="text" class="form-input" placeholder="ул. Пушкина, д. 10, кв. 5">
            </div>
            <div class="form-row mt-16">
              <div class="form-group">
                <label class="form-label">Индекс</label>
                <input type="text" class="form-input" placeholder="123456">
              </div>
              <div class="form-group">
                <label class="form-label">Регион</label>
                <input type="text" class="form-input" placeholder="Московская обл.">
              </div>
            </div>
          </div>

          <!-- Shipping Method -->
          <div class="checkout-section">
            <div class="checkout-section-title">Способ доставки</div>
            <div class="shipping-options">
              ${[
                { id: 'standard', name: 'Стандартная доставка', eta: '5-7 рабочих дней', price: getCartTotal() >= 8000 ? 0 : 390 },
                { id: 'express', name: 'Экспресс доставка', eta: '1-2 рабочих дня', price: 790 },
                { id: 'pickup', name: 'Самовывоз — Москва, Арбат 24', eta: 'Готов к выдаче: сегодня', price: 0 }
              ].map(opt => `
                <div class="shipping-option ${state.selectedShipping === opt.id ? 'active' : ''}" onclick="selectShipping('${opt.id}')">
                  <div class="shipping-radio"></div>
                  <div>
                    <div class="shipping-name">${opt.name}</div>
                    <div class="shipping-eta">${opt.eta}</div>
                  </div>
                  <div class="shipping-price">${opt.price === 0 ? 'Бесплатно' : formatPrice(opt.price)}</div>
                </div>`).join('')}
            </div>
          </div>

          <!-- Payment -->
          <div class="checkout-section">
            <div class="checkout-section-title">Способ оплаты</div>
            <div class="payment-methods">
              <button class="payment-method ${state.selectedPaymentMethod === 'card' ? 'active' : ''}" onclick="selectPayment('card')">Банковская карта</button>
              <button class="payment-method ${state.selectedPaymentMethod === 'sbp' ? 'active' : ''}" onclick="selectPayment('sbp')">СБП</button>
            </div>

            ${state.selectedPaymentMethod === 'card' ? `
              <div class="card-logos">
                ${['Visa','Mastercard','МИР'].map(c => `<div class="card-logo">${c}</div>`).join('')}
              </div>
              <div class="form-group">
                <label class="form-label">Номер карты</label>
                <input type="text" class="form-input" placeholder="0000 0000 0000 0000" maxlength="19" oninput="formatCardNumber(this)">
              </div>
              <div class="form-row mt-16">
                <div class="form-group">
                  <label class="form-label">Срок действия</label>
                  <input type="text" class="form-input" placeholder="MM/YY" maxlength="5">
                </div>
                <div class="form-group">
                  <label class="form-label">CVV</label>
                  <input type="text" class="form-input" placeholder="•••" maxlength="4">
                </div>
              </div>
              <div class="form-group mt-16">
                <label class="form-label">Имя владельца</label>
                <input type="text" class="form-input" placeholder="IVAN IVANOV">
              </div>` : `
              <div style="padding:24px;background:var(--gray-50);border:1px solid var(--gray-200);text-align:center;">
                <div style="font-size:32px;margin-bottom:12px;">📱</div>
                <div style="font-size:14px;color:var(--gray-700);">После оформления заказа вы получите ссылку для оплаты через СБП</div>
              </div>`}
          </div>

          <button class="btn btn-primary btn-full btn-lg" onclick="placeOrder()">
            Подтвердить заказ — ${formatPrice(getCheckoutTotal())}
          </button>
          <p style="font-size:12px;color:var(--gray-500);text-align:center;margin-top:16px;">
            Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
          </p>
        </div>

        <!-- Order Summary -->
        <div class="checkout-order-summary">
          <div id="checkout-summary-content">
            ${getCheckoutSummaryHTML()}
          </div>
        </div>
      </div>
    </div>`;
}

function getCheckoutSummaryHTML() {
  const subtotal = getCartTotal();
  const shipping = state.selectedShipping === 'express' ? 790 : (subtotal >= 8000 ? 0 : 390);
  const total = subtotal + (state.selectedShipping === 'pickup' ? 0 : shipping);

  return `
    <div class="checkout-summary-title">Ваш заказ</div>
    ${state.cart.map(item => {
      const product = PRODUCTS.find(p => p.id === item.productId);
      if (!product) return '';
      const imgClass = product.imgColor[item.color] || 'pip-black';
      return `
        <div class="checkout-order-item">
          <div class="checkout-order-img" style="position:relative;">
            <div class="product-img-placeholder ${imgClass}" style="width:100%;height:100%;"></div>
            <div class="checkout-order-badge">${item.qty}</div>
          </div>
          <div>
            <div class="checkout-order-name">${product.name}</div>
            <div class="checkout-order-meta">${product.colorNames[item.color]} · ${item.size}</div>
          </div>
          <div class="checkout-order-price">${formatPrice(item.price * item.qty)}</div>
        </div>`;
    }).join('')}
    <div class="checkout-totals">
      <div class="checkout-total-row"><span>Подытог</span><span>${formatPrice(subtotal)}</span></div>
      <div class="checkout-total-row"><span>Доставка</span><span>${state.selectedShipping === 'pickup' ? 'Бесплатно' : (shipping === 0 ? 'Бесплатно' : formatPrice(shipping))}</span></div>
      <div class="checkout-grand-total"><span>Итого</span><span>${formatPrice(state.selectedShipping === 'pickup' ? subtotal : subtotal + shipping)}</span></div>
    </div>
    <div class="trust-badges">
      <div class="trust-badge"><div class="trust-badge-icon">🔒</div><span>Безопасная оплата SSL</span></div>
      <div class="trust-badge"><div class="trust-badge-icon">↩</div><span>Возврат в течение 14 дней</span></div>
      <div class="trust-badge"><div class="trust-badge-icon">📦</div><span>Бесплатная доставка от 8000 ₽</span></div>
    </div>`;
}

function getCheckoutTotal() {
  const subtotal = getCartTotal();
  const shipping = state.selectedShipping === 'express' ? 790 : (state.selectedShipping === 'pickup' ? 0 : (subtotal >= 8000 ? 0 : 390));
  return subtotal + shipping;
}

function renderCheckoutSummary() {
  const el = document.getElementById('checkout-summary-content');
  if (el) el.innerHTML = getCheckoutSummaryHTML();
}

function selectShipping(id) {
  state.selectedShipping = id;
  document.querySelectorAll('.shipping-option').forEach(el => {
    el.classList.toggle('active', el.getAttribute('onclick').includes(id));
  });
  renderCheckoutSummary();
  const btn = document.querySelector('.checkout-form-area > .btn-primary');
  if (btn) btn.textContent = `Подтвердить заказ — ${formatPrice(getCheckoutTotal())}`;
}

function selectPayment(method) {
  state.selectedPaymentMethod = method;
  const checkoutPage = document.getElementById('page-checkout');
  if (checkoutPage) checkoutPage.innerHTML = renderCheckoutPage();
}

function formatCardNumber(input) {
  let val = input.value.replace(/\D/g, '').substring(0, 16);
  input.value = val.replace(/(\d{4})(?=\d)/g, '$1 ');
}

function placeOrder() {
  if (state.cart.length === 0) { showToast('Корзина пуста', '❗'); return; }
  const orderId = 'DMR-' + Date.now().toString().slice(-6);
  const order = {
    id: orderId,
    date: new Date().toLocaleDateString('ru-RU'),
    items: [...state.cart],
    total: getCheckoutTotal(),
    status: 'processing'
  };
  state.orders.unshift(order);
  state.cart = [];
  saveState();
  updateCartCount();
  showToast(`Заказ ${orderId} оформлен!`, '✓');
  setTimeout(() => navigate('account'), 1000);
}

// ============================================
// ACCOUNT PAGE
// ============================================
function renderAccountPage() {
  if (!state.user) return renderLoginPage();
  return `
    <div class="account-page">
      <div class="container">
        <div class="account-layout">
          <!-- Sidebar -->
          <aside class="account-sidebar">
            <div class="account-sidebar-user">
              <div class="account-avatar">${state.user.name.slice(0, 2).toUpperCase()}</div>
              <div>
                <div class="account-name">${state.user.name}</div>
                <div class="account-email">${state.user.email}</div>
              </div>
            </div>
            <nav class="account-nav">
              ${[
                { tab: 'overview', icon: '⊟', label: 'Обзор' },
                { tab: 'orders', icon: '📦', label: 'Заказы' },
                { tab: 'wishlist', icon: '♡', label: 'Избранное' },
                { tab: 'profile', icon: '◎', label: 'Профиль' }
              ].map(item => `
                <div class="account-nav-item ${state.accountTab === item.tab ? 'active' : ''}" onclick="setAccountTab('${item.tab}')">
                  <span class="account-nav-icon">${item.icon}</span>
                  <span>${item.label}</span>
                </div>`).join('')}
              <div class="account-nav-item" onclick="logout()" style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:16px;">
                <span class="account-nav-icon">→</span>
                <span>Выйти</span>
              </div>
            </nav>
          </aside>

          <!-- Content -->
          <div>
            ${renderAccountTab()}
          </div>
        </div>
      </div>
    </div>`;
}

function renderAccountTab() {
  switch (state.accountTab) {
    case 'overview': return renderAccountOverview();
    case 'orders': return renderAccountOrders();
    case 'wishlist': return renderAccountWishlist();
    case 'profile': return renderAccountProfile();
    default: return renderAccountOverview();
  }
}

function renderAccountOverview() {
  const recentOrder = state.orders[0];
  return `
    <div>
      <h2 class="account-panel-title">Добро пожаловать, ${state.user.name.split(' ')[0]}!</h2>
      <div class="account-overview-grid">
        <div class="account-stat-card">
          <div class="account-stat-num">${state.orders.length}</div>
          <div class="account-stat-label">Заказов</div>
        </div>
        <div class="account-stat-card">
          <div class="account-stat-num">${state.wishlist.length}</div>
          <div class="account-stat-label">В избранном</div>
        </div>
        <div class="account-stat-card">
          <div class="account-stat-num">${formatPrice(state.orders.reduce((s, o) => s + o.total, 0)).replace(' ₽','')}</div>
          <div class="account-stat-label">Потрачено ₽</div>
        </div>
      </div>
      ${recentOrder ? `
        <div>
          <h3 class="heading-md mb-16">Последний заказ</h3>
          <div style="border:1.5px solid var(--gray-200);padding:24px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
              <span style="font-weight:600;">${recentOrder.id}</span>
              <span class="order-status ${recentOrder.status}">${recentOrder.status === 'processing' ? 'Обрабатывается' : recentOrder.status === 'delivered' ? 'Доставлен' : 'Отправлен'}</span>
            </div>
            <div style="font-size:13px;color:var(--gray-500);margin-bottom:12px;">${recentOrder.date} · ${recentOrder.items.length} товар(а)</div>
            <div style="font-size:18px;font-weight:700;">${formatPrice(recentOrder.total)}</div>
          </div>
        </div>
      ` : `<div style="text-align:center;padding:60px 0;color:var(--gray-500);">
        <div style="font-size:40px;margin-bottom:16px;">○</div>
        <div>Заказов пока нет</div>
        <button class="btn btn-primary mt-24" onclick="navigate('shop')">Перейти в каталог</button>
      </div>`}
    </div>`;
}

function renderAccountOrders() {
  return `
    <div>
      <h2 class="account-panel-title">История заказов</h2>
      ${state.orders.length === 0 ? `
        <div style="text-align:center;padding:60px 0;color:var(--gray-500);">
          <div style="font-size:40px;margin-bottom:16px;">○</div>
          <div style="font-size:16px;">Заказов пока нет</div>
          <button class="btn btn-primary mt-24" onclick="navigate('shop')">Перейти в каталог</button>
        </div>
      ` : `
        <div style="border-top:2px solid var(--black);">
          ${state.orders.map(order => `
            <div class="order-item">
              <div>
                <div class="order-id">${order.id}</div>
                <div class="order-date">${order.date}</div>
              </div>
              <div class="order-items-preview">${order.items.length} товар(а)</div>
              <div class="order-status ${order.status}">${order.status === 'processing' ? 'Обрабатывается' : order.status === 'delivered' ? 'Доставлен' : 'Отправлен'}</div>
              <div class="order-total">${formatPrice(order.total)}</div>
            </div>`).join('')}
        </div>`}
    </div>`;
}

function renderAccountWishlist() {
  const wishProducts = PRODUCTS.filter(p => state.wishlist.includes(p.id));
  return `
    <div>
      <h2 class="account-panel-title">Избранное (${wishProducts.length})</h2>
      ${wishProducts.length === 0 ? `
        <div style="text-align:center;padding:60px 0;color:var(--gray-500);">
          <div style="font-size:40px;margin-bottom:16px;">♡</div>
          <div>Список желаний пуст</div>
          <button class="btn btn-primary mt-24" onclick="navigate('shop')">Перейти в каталог</button>
        </div>
      ` : `
        <div class="wishlist-grid">
          ${wishProducts.map(p => renderProductCard(p)).join('')}
        </div>`}
    </div>`;
}

function renderAccountProfile() {
  return `
    <div>
      <h2 class="account-panel-title">Профиль</h2>
      <div style="max-width:480px;">
        <form class="contact-form" onsubmit="saveProfile(event)">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Имя</label>
              <input type="text" class="form-input" value="${state.user.name.split(' ')[0] || ''}" id="profile-firstname">
            </div>
            <div class="form-group">
              <label class="form-label">Фамилия</label>
              <input type="text" class="form-input" value="${state.user.name.split(' ')[1] || ''}" id="profile-lastname">
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Email</label>
            <input type="email" class="form-input" value="${state.user.email}" id="profile-email">
          </div>
          <div class="form-group">
            <label class="form-label">Телефон</label>
            <input type="tel" class="form-input" placeholder="+7 (___) ___-__-__" value="${state.user.phone || ''}">
          </div>
          <div class="product-divider"></div>
          <div class="form-group">
            <label class="form-label">Новый пароль</label>
            <input type="password" class="form-input" placeholder="Оставьте пустым, чтобы не менять">
          </div>
          <button type="submit" class="btn btn-primary btn-lg">Сохранить изменения</button>
        </form>
      </div>
    </div>`;
}

function saveProfile(e) {
  e.preventDefault();
  const fname = document.getElementById('profile-firstname')?.value || '';
  const lname = document.getElementById('profile-lastname')?.value || '';
  const email = document.getElementById('profile-email')?.value || '';
  state.user.name = `${fname} ${lname}`.trim();
  state.user.email = email;
  saveState();
  showToast('Профиль сохранён', '✓');
}

function setAccountTab(tab) {
  state.accountTab = tab;
  const content = document.querySelector('.account-layout > div:last-child');
  if (content) content.innerHTML = renderAccountTab();
  document.querySelectorAll('.account-nav-item').forEach(el => {
    el.classList.toggle('active', el.getAttribute('onclick') === `setAccountTab('${tab}')`);
  });
  initScrollAnimations();
}

function renderLoginPage() {
  return `
    <div class="account-page">
      <div class="container">
        <div class="login-panel">
          <h1 class="login-panel-title">Войти в аккаунт</h1>
          <p class="login-panel-sub">Войдите, чтобы отслеживать заказы и управлять профилем</p>
          <form class="login-form" onsubmit="handleLogin(event)">
            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" class="form-input" id="login-email" placeholder="email@example.com" required>
            </div>
            <div class="form-group">
              <label class="form-label">Пароль</label>
              <input type="password" class="form-input" id="login-password" placeholder="••••••••" required>
            </div>
            <button type="submit" class="btn btn-primary btn-full btn-lg">Войти</button>
          </form>
          <div class="login-divider">или</div>
          <form class="login-form" onsubmit="handleRegister(event)">
            <div class="form-group">
              <label class="form-label">Имя</label>
              <input type="text" class="form-input" id="reg-name" placeholder="Ваше имя" required>
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" class="form-input" id="reg-email" placeholder="email@example.com" required>
            </div>
            <div class="form-group">
              <label class="form-label">Пароль</label>
              <input type="password" class="form-input" id="reg-password" placeholder="••••••••" required>
            </div>
            <button type="submit" class="btn btn-secondary btn-full btn-lg">Зарегистрироваться</button>
          </form>
        </div>
      </div>
    </div>`;
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  state.user = { name: email.split('@')[0], email, phone: '' };
  saveState();
  showToast('Добро пожаловать!', '✓');
  renderApp();
}

function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById('reg-name').value;
  const email = document.getElementById('reg-email').value;
  state.user = { name, email, phone: '' };
  saveState();
  showToast(`Аккаунт создан, ${name}!`, '✓');
  renderApp();
}

function logout() {
  state.user = null;
  localStorage.removeItem('damiro_user');
  showToast('Вы вышли из аккаунта', '');
  renderApp();
}

// ============================================
// MAIN RENDER
// ============================================
function renderApp() {
  const pages = { home: 'page-home', shop: 'page-shop', product: 'page-product', about: 'page-about', contact: 'page-contact', cart: 'page-cart', checkout: 'page-checkout', account: 'page-account' };
  Object.values(pages).forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.style.display = 'none'; el.classList.remove('active'); }
  });

  const currentId = pages[state.currentPage];
  const currentEl = document.getElementById(currentId);
  if (!currentEl) return;

  switch (state.currentPage) {
    case 'home': currentEl.innerHTML = renderHomePage(); break;
    case 'shop': currentEl.innerHTML = renderShopPage(); break;
    case 'product': currentEl.innerHTML = renderProductPage(); break;
    case 'about': currentEl.innerHTML = renderAboutPage(); break;
    case 'contact': currentEl.innerHTML = renderContactPage(); break;
    case 'cart': currentEl.innerHTML = getCartHTML(); break;
    case 'checkout': currentEl.innerHTML = renderCheckoutPage(); break;
    case 'account': currentEl.innerHTML = renderAccountPage(); break;
  }

  currentEl.style.display = 'block';
  currentEl.classList.add('active');

  // Hide footer on checkout page
  const footer = document.getElementById('main-footer');
  if (footer) footer.style.display = state.currentPage === 'checkout' ? 'none' : '';

  updateNav();
  initScrollAnimations();
  updateCartCount();
}

// ============================================
// NAV SCROLL EFFECT
// ============================================
function handleNavScroll() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  if (state.currentPage === 'home') {
    if (window.scrollY > 80) {
      nav.className = 'nav nav-solid';
    } else {
      nav.className = 'nav nav-transparent';
    }
  } else {
    nav.className = 'nav nav-solid';
  }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up, .fade-in, .stagger').forEach(el => {
    observer.observe(el);
  });
}

// ============================================
// MOBILE MENU
// ============================================
function openMobileMenu() {
  document.getElementById('mobile-menu')?.classList.add('open');
  document.getElementById('mobile-overlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  document.getElementById('mobile-menu')?.classList.remove('open');
  document.getElementById('mobile-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

function mobileNavigate(page) {
  closeMobileMenu();
  navigate(page);
}

// ============================================
// SIZE GUIDE MODAL
// ============================================
function closeSizeGuide() {
  document.getElementById('size-guide-modal')?.classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();
});
