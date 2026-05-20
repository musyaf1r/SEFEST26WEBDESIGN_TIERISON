/* ═══════════════════════════════════════════════════════
   SPECRE — App Logic
   Custom PC Builder
═══════════════════════════════════════════════════════ */

'use strict';

/* ─── ASSET PATHS ─── */
const ICONS = {
  cpu:      'assets/icons/cpu.png',
  gpu:      'assets/icons/gpu.png',
  mb:       'assets/icons/motherboard.png',
  ram:      'assets/icons/memory.png',
  storage:  'assets/icons/hosting.png',
  psu:      'assets/icons/power.png',
  case:     'assets/icons/computer-case.png',
  cooling:  'assets/icons/cooling-system.png',
  ai:       'assets/icons/artificial-intelligence.png',
  calc:     'assets/icons/calculator.png',
  check:    'assets/icons/check-mark.png',
  close:    'assets/icons/close.png',
  config:   'assets/icons/configuration.png',
  link:     'assets/icons/link.png',
  price:    'assets/icons/price-tag.png',
  premium:  'assets/icons/premium.png',
  share:    'assets/icons/share.png',
  arrow:    'assets/icons/right-arrow.png',
  photo:    'assets/icons/photography.png',
  power:    'assets/icons/power.png',
};

/* ─── PRODUCT IMAGES ─── */
const PRODUCT_IMAGES = {
  /* CPU */
  'Intel i3':          'assets/images/intel i3.jpg',
  'Intel i5':          'assets/images/Intel i5.webp',
  'Intel i7 X':        'assets/images/intel i7 x series.webp',
  'Intel i9':          'assets/images/intel i9.jpg',
  'Intel Xeon':        'assets/images/intel xeon.jpg',
  'Pentium':           'assets/images/skylake-pentium-large.jpg',
  'Ryzen 3':           'assets/images/2505503-ryzen-3-8300g.avif',
  'Ryzen 5 G':         'assets/images/Ryzen 5 g.webp',
  'Ryzen 9':           'assets/images/ryzen 9.webp',
  /* GPU */
  'RTX 2070':          'assets/images/RTX 2070.jpg',
  'RTX 3060':          'assets/images/RTX 3060.webp',
  'RTX 4060':          'assets/images/RTX 4060.png',
  'RTX 4090':          'assets/images/RTX 4090.webp',
  'RTX 5050':          'assets/images/RTX 5050.jpg',
  'RTX 5060':          'assets/images/RTX 5060.webp',
  'RTX 5080':          'assets/images/RTX 5080.webp',
  /* RAM */
  'Corsair 32GB':      'assets/images/Corsair 32 gb.webp',
  'Kingston 16GB':     'assets/images/Kingston 16gb fury.webp',
  'PNY 16GB':          'assets/images/PNY 16gb XLR8.webp',
  'Patriot Extreme 5': 'assets/images/Patriot extream 5.webp',
  /* Motherboard */
  'ASUS Prime':        'assets/images/ASUS prime.webp',
  'ASUS X570':         'assets/images/Asus x570.jpg',
  'ASRock B550':       'assets/images/ASRock b550.webp',
  'Gigabyte B550M':    'assets/images/b550m-ds3h.png',
  'MSI PRO':           'assets/images/MSI PRO.webp',
  'MB LGA1700':        'assets/images/mb LGA1700.webp',
  /* Storage */
  'Adata XPG':         'assets/images/Adata XPG Gammix s70.webp',
  'M2 NVMe Gen4':      'assets/images/M2 NVME gen4.webp',
  'SSD Solid State':   'assets/images/Solid state drive ssd.webp',
  'V-Gen SSD':         'assets/images/v-gen ssd m.2 sata.webp',
  /* PSU */
  'MSI MAG A650GL':    'assets/images/MSI MAG A650GL.webp',
  'ASROCK SL-850G':    'assets/images/ASROCK SL-850g.webp',
  'MAG A550BN':        'assets/images/mag a550bn.jpg',
  /* Cooling */
  'Corsair iCUE H150i':'assets/images/Corsair ICue H150i RGB ELITE 360mm.webp',
  'Thermalright':      'assets/images/Thermalright Trofeo Vision 360.webp',
  'CUBE LUMINEX':      'assets/images/CUBE GAMING LUMINEX 240 ARGB BLACK.webp',
  'CUBE NOVACORE':     'assets/images/CUBE GAMING NOVACORE 360 ARGB BLACK.webp',
  /* Case */
  'NZXT H7':           'assets/images/NZXT CM-H71FW-01 H7.webp',
  'Cube Othra':        'assets/images/cube gaming othra white.webp',
  'Lian Li':           'assets/images/Lian Li Lancool lan217x.webp',
  'Armaggeddon':       'assets/images/Armaggeddon tritrin pro 300 atx.webp',
  /* Accessories */
  'Imperion':          'assets/images/imperion.webp',
};

/* ─── CATEGORIES ─── */
const CATEGORIES = [
  { id: 'cpu',     label: 'CPU',          icon: ICONS.cpu,     desc: 'Processor — the brain of your build' },
  { id: 'gpu',     label: 'GPU',          icon: ICONS.gpu,     desc: 'Graphics card — visuals & compute power' },
  { id: 'mb',      label: 'Motherboard',  icon: ICONS.mb,      desc: 'The hub connecting all components' },
  { id: 'ram',     label: 'Memory',       icon: ICONS.ram,     desc: 'RAM — speed & multitasking capacity' },
  { id: 'storage', label: 'Storage',      icon: ICONS.storage, desc: 'SSD / HDD — speed & capacity' },
  { id: 'psu',     label: 'Power Supply', icon: ICONS.psu,     desc: 'PSU — stable, efficient power delivery' },
  { id: 'case',    label: 'Case',         icon: ICONS.case,    desc: 'Chassis — airflow & aesthetics' },
  { id: 'cooling', label: 'Cooling',      icon: ICONS.cooling, desc: 'CPU cooler — thermals & quiet operation' },
];

/* ─── COMPONENTS DATA ─── */
const COMPONENTS = {
  cpu: [
    { id: 'pentium',    name: 'Intel Pentium G4560',    specs: '2 Cores / 4 Threads · 3.5GHz · LGA1151',  price: 59,  score: 30, socket: 'lga1151', tdp: 54,  tag: 'Budget',     image: PRODUCT_IMAGES['Pentium'] },
    { id: 'i3-12100',   name: 'Intel Core i3-12100',    specs: '4 Cores / 8 Threads · 4.3GHz · LGA1700',  price: 129, score: 48, socket: 'lga1700', tdp: 60,  tag: 'Entry',      image: PRODUCT_IMAGES['Intel i3'] },
    { id: 'i5-14600k',  name: 'Intel Core i5-14600K',   specs: '14 Cores / 20 Threads · 5.3GHz · LGA1700',price: 299, score: 72, socket: 'lga1700', tdp: 125, tag: 'Best Value', image: PRODUCT_IMAGES['Intel i5'] },
    { id: 'i7-14700k',  name: 'Intel Core i7-14700K',   specs: '20 Cores / 28 Threads · 5.6GHz · LGA1700',price: 409, score: 83, socket: 'lga1700', tdp: 125,                    image: PRODUCT_IMAGES['Intel i7 X'] },
    { id: 'i9-14900k',  name: 'Intel Core i9-14900K',   specs: '24 Cores / 32 Threads · 6.0GHz · LGA1700',price: 589, score: 93, socket: 'lga1700', tdp: 253, tag: 'Flagship',   image: PRODUCT_IMAGES['Intel i9'] },
    { id: 'xeon-w3',    name: 'Intel Xeon W3-2423',     specs: '6 Cores / 12 Threads · 4.2GHz · LGA4677', price: 349, score: 75, socket: 'lga4677', tdp: 120, tag: 'Workstation', image: PRODUCT_IMAGES['Intel Xeon'] },
    { id: 'r3-8300g',   name: 'AMD Ryzen 3 8300G',      specs: '4 Cores / 8 Threads · 4.9GHz · AM5',      price: 149, score: 50, socket: 'am5',     tdp: 65,  tag: 'Entry',      image: PRODUCT_IMAGES['Ryzen 3'] },
    { id: 'r5-7600x',   name: 'AMD Ryzen 5 7600X',      specs: '6 Cores / 12 Threads · 5.3GHz · AM5',     price: 229, score: 70, socket: 'am5',     tdp: 105, tag: 'Best Value', image: PRODUCT_IMAGES['Ryzen 5 G'] },
    { id: 'r9-7950x',   name: 'AMD Ryzen 9 7950X',      specs: '16 Cores / 32 Threads · 5.7GHz · AM5',    price: 699, score: 96, socket: 'am5',     tdp: 170, tag: 'Workstation', image: PRODUCT_IMAGES['Ryzen 9'] },
  ],
  gpu: [
    { id: 'rtx-2070',   name: 'NVIDIA GeForce RTX 2070',      specs: '8GB GDDR6 · 2304 CUDA Cores · 175W',   price: 199, score: 48, tag: 'Used/Budget',  image: PRODUCT_IMAGES['RTX 2070'] },
    { id: 'rtx-3060',   name: 'NVIDIA GeForce RTX 3060',      specs: '12GB GDDR6 · 3584 CUDA Cores · 170W',  price: 249, score: 55, tag: '1080p',         image: PRODUCT_IMAGES['RTX 3060'] },
    { id: 'rtx-4060',   name: 'NVIDIA GeForce RTX 4060',      specs: '8GB GDDR6 · 3072 CUDA Cores · 115W',   price: 299, score: 62, tag: '1080p',         image: PRODUCT_IMAGES['RTX 4060'] },
    { id: 'rtx-4090',   name: 'NVIDIA GeForce RTX 4090',      specs: '24GB GDDR6X · 16384 CUDA Cores · 450W',price: 1599,score: 98, tag: 'Ultimate',      image: PRODUCT_IMAGES['RTX 4090'] },
    { id: 'rtx-5050',   name: 'NVIDIA GeForce RTX 5050',      specs: '8GB GDDR7 · 2560 CUDA Cores · 130W',   price: 279, score: 58, tag: 'New Gen Entry', image: PRODUCT_IMAGES['RTX 5050'] },
    { id: 'rtx-5060',   name: 'NVIDIA GeForce RTX 5060',      specs: '8GB GDDR7 · 3840 CUDA Cores · 150W',   price: 349, score: 70, tag: 'New Gen',       image: PRODUCT_IMAGES['RTX 5060'] },
    { id: 'rtx-5080',   name: 'NVIDIA GeForce RTX 5080',      specs: '16GB GDDR7 · 10752 CUDA Cores · 360W', price: 999, score: 95, tag: 'Flagship',      image: PRODUCT_IMAGES['RTX 5080'] },
  ],
  mb: [
    { id: 'asus-prime',  name: 'ASUS Prime B550-Plus',        specs: 'AM4 Socket · DDR4 · PCIe 4.0 · ATX',    price: 149, score: 68, socket: 'am4',     image: PRODUCT_IMAGES['ASUS Prime'] },
    { id: 'asus-x570',   name: 'ASUS ROG Strix X570-E',       specs: 'AM4 Socket · DDR4 · PCIe 4.0 · ATX',    price: 249, score: 80, socket: 'am4',     tag: 'Premium', image: PRODUCT_IMAGES['ASUS X570'] },
    { id: 'asrock-b550', name: 'ASRock B550 Phantom Gaming',  specs: 'AM4 Socket · DDR4 · PCIe 4.0 · ATX',    price: 129, score: 65, socket: 'am4',     image: PRODUCT_IMAGES['ASRock B550'] },
    { id: 'gb-b550m',    name: 'Gigabyte B550M DS3H',         specs: 'AM4 Socket · DDR4 · PCIe 4.0 · mATX',   price: 99,  score: 60, socket: 'am4',     tag: 'Budget', image: PRODUCT_IMAGES['Gigabyte B550M'] },
    { id: 'msi-pro',     name: 'MSI PRO Z690-A',              specs: 'LGA1700 Socket · DDR5 · PCIe 5.0 · ATX', price: 199, score: 74, socket: 'lga1700', image: PRODUCT_IMAGES['MSI PRO'] },
    { id: 'mb-lga1700',  name: 'Generic LGA1700 ATX Board',   specs: 'LGA1700 Socket · DDR4 · PCIe 4.0 · ATX', price: 119, score: 60, socket: 'lga1700', image: PRODUCT_IMAGES['MB LGA1700'] },
  ],
  ram: [
    { id: 'corsair-32',  name: 'Corsair Vengeance 32GB DDR4', specs: '2×16GB · DDR4-3200 · CL16',             price: 79,  score: 70, image: PRODUCT_IMAGES['Corsair 32GB'] },
    { id: 'kingston-16', name: 'Kingston Fury Beast 16GB',    specs: '2×8GB · DDR4-3200 · CL16',              price: 49,  score: 60, image: PRODUCT_IMAGES['Kingston 16GB'] },
    { id: 'pny-16',      name: 'PNY XLR8 16GB DDR4',         specs: '2×8GB · DDR4-3600 · CL18 · RGB',        price: 55,  score: 63, image: PRODUCT_IMAGES['PNY 16GB'] },
    { id: 'patriot-5',   name: 'Patriot Extreme 5 32GB DDR5', specs: '2×16GB · DDR5-6000 · CL30',             price: 129, score: 82, tag: 'DDR5', image: PRODUCT_IMAGES['Patriot Extreme 5'] },
  ],
  storage: [
    { id: 'adata-xpg',   name: 'Adata XPG Gammix S70 1TB',   specs: '7400 MB/s Read · PCIe 4.0 NVMe',        price: 89,  score: 80, image: PRODUCT_IMAGES['Adata XPG'] },
    { id: 'm2-gen4',     name: 'M.2 NVMe Gen4 2TB',          specs: '7000 MB/s Read · PCIe 4.0 NVMe',        price: 139, score: 85, tag: 'Recommended', image: PRODUCT_IMAGES['M2 NVMe Gen4'] },
    { id: 'ssd-sata',    name: 'Solid State Drive 1TB SATA',  specs: '550 MB/s Read · SATA III · 2.5"',       price: 59,  score: 55, image: PRODUCT_IMAGES['SSD Solid State'] },
    { id: 'vgen-ssd',    name: 'V-Gen SSD M.2 SATA 512GB',   specs: '550 MB/s Read · M.2 SATA',              price: 39,  score: 50, image: PRODUCT_IMAGES['V-Gen SSD'] },
  ],
  psu: [
    { id: 'msi-a650',    name: 'MSI MAG A650GL 650W',        specs: '80+ Gold · Semi-Modular · 650W',         price: 79,  score: 72, wattage: 650, image: PRODUCT_IMAGES['MSI MAG A650GL'] },
    { id: 'asrock-850',  name: 'ASROCK SL-850G 850W',        specs: '80+ Gold · Fully Modular · 850W',        price: 109, score: 80, wattage: 850, tag: 'Recommended', image: PRODUCT_IMAGES['ASROCK SL-850G'] },
    { id: 'mag-a550',    name: 'MAG A550BN 550W',            specs: '80+ Bronze · Non-Modular · 550W',        price: 59,  score: 60, wattage: 550, image: PRODUCT_IMAGES['MAG A550BN'] },
  ],
  case: [
    { id: 'nzxt-h7',     name: 'NZXT H7 Flow',               specs: 'ATX Mid-Tower · Perforated · Tempered Glass', price: 139, score: 82, tag: 'Popular', image: PRODUCT_IMAGES['NZXT H7'] },
    { id: 'cube-othra',  name: 'Cube Gaming Othra White',     specs: 'ATX Mid-Tower · ARGB · Tempered Glass',  price: 89,  score: 70, image: PRODUCT_IMAGES['Cube Othra'] },
    { id: 'lian-li',     name: 'Lian Li Lancool 217X',        specs: 'ATX Mid-Tower · High-Airflow · Dual Chamber', price: 169, score: 88, tag: 'Premium', image: PRODUCT_IMAGES['Lian Li'] },
    { id: 'armaggeddon', name: 'Armaggeddon Tritron Pro 300', specs: 'ATX Mid-Tower · ARGB · Tempered Glass',  price: 69,  score: 62, image: PRODUCT_IMAGES['Armaggeddon'] },
  ],
  cooling: [
    { id: 'corsair-h150', name: 'Corsair iCUE H150i RGB 360mm', specs: '360mm AIO · 3×120mm PWM · LCD Screen', price: 179, score: 90, tag: 'High-End', image: PRODUCT_IMAGES['Corsair iCUE H150i'] },
    { id: 'thermalright', name: 'Thermalright Trofeo Vision 360', specs: '360mm AIO · 3×120mm · ARGB',         price: 89,  score: 78, tag: 'Value', image: PRODUCT_IMAGES['Thermalright'] },
    { id: 'cube-luminex', name: 'CUBE GAMING LUMINEX 240 ARGB',  specs: '240mm AIO · 2×120mm · ARGB Black',   price: 59,  score: 68, image: PRODUCT_IMAGES['CUBE LUMINEX'] },
    { id: 'cube-nova',    name: 'CUBE GAMING NOVACORE 360 ARGB', specs: '360mm AIO · 3×120mm · ARGB Black',   price: 79,  score: 74, image: PRODUCT_IMAGES['CUBE NOVACORE'] },
  ],
};

/* ─── STATIC CONTENT DATA ─── */
const FEATURES_DATA = [
  { icon: ICONS.link,    title: 'Real-Time Compatibility Checker', desc: 'Instantly verifies socket compatibility, power requirements, and clearance specs as you select components. Zero chance of mismatch.' },
  { icon: ICONS.calc,    title: 'Live Price Calculation',          desc: 'Watch your total update with every selection. Transparent pricing with no hidden fees — always know your exact budget.' },
  { icon: ICONS.premium, title: 'Premium Components Only',         desc: 'Curated selection from the world\'s top brands — Intel, AMD, NVIDIA, ASUS, Noctua, NZXT, Corsair, and more.' },
  { icon: ICONS.ai,      title: 'AI Performance Estimation',       desc: 'Get predicted framerates, render times, and workload benchmarks based on your component selection — before you buy.' },
  { icon: ICONS.power,   title: 'Thermal & Power Monitoring',      desc: 'Tracks estimated TDP, cooling headroom, and PSU load so your system runs cool, quiet, and efficient under any workload.' },
  { icon: ICONS.share,   title: 'Save & Share Builds',             desc: 'Export your build as a shareable link or PDF spec sheet. Compare multiple builds side-by-side before finalizing.' },
];

const PRICING_DATA = [
  {
    tier: 'Entry Level', name: 'Starter Build', from: 799, to: 1200, perf: 45, perfLabel: '1080p Gaming', featured: false,
    items: ['Intel Core i5 or Ryzen 5', 'RTX 4060 or RX 7600 GPU', '16GB DDR5 Memory', '1TB NVMe SSD', '650W 80+ Gold PSU', 'Compact Mid-Tower Case'],
    btnClass: 'outline'
  },
  {
    tier: 'Mid-High Range', name: 'Creator Build', from: 1800, to: 2800, perf: 75, perfLabel: '1440p / 4K', featured: true, badge: 'Most Popular',
    items: ['Intel Core i7 or Ryzen 7', 'RTX 5060 or RX 7900 XT', '32GB DDR5 Memory', '2TB NVMe Gen4 SSD', '850W 80+ Gold PSU', 'Premium Mid-Tower + 360 AIO'],
    btnClass: 'cyan'
  },
  {
    tier: 'Flagship', name: 'Ultimate Gaming Build', from: 3500, to: 6000, perf: 98, perfLabel: '4K / No Limits', featured: false,
    items: ['Intel Core i9 or Ryzen 9', 'NVIDIA RTX 5080 16GB', '64GB DDR5-6000 Memory', '4TB NVMe Gen4 RAID Setup', '1200W 80+ Titanium PSU', 'Full-Tower + Custom Loop'],
    btnClass: 'dark'
  }
];

const TESTIMONIALS_DATA = [
  { name: 'Alex M.',  role: 'Professional Streamer',  text: 'The compatibility checker saved me from a costly mistake — I had picked an AM5 CPU with an Intel board. SPECRE flagged it instantly. Incredible tool, looks stunning too.' },
  { name: 'Sarah J.', role: '3D Artist & Animator',   text: 'I\'d been using PCPartPicker for years, but SPECRE\'s performance estimation is on another level. Knew exactly what render times to expect before spending a dime.' },
  { name: 'Kai P.',   role: 'Competitive Gamer',      text: 'The UI is something else — feels like Apple designed a PC builder. I\'ve recommended it to my entire gaming community. Clean, fast, reliable.' },
  { name: 'Ryan L.',  role: 'Software Engineer',      text: 'Built my dev workstation through SPECRE. The thermal and power monitoring gave me confidence that my PSU was properly specced. Zero issues after 8 months of heavy use.' },
  { name: 'Maya N.',  role: 'First-Time Builder',     text: 'I had zero knowledge about PC building. SPECRE made it approachable, even enjoyable. The real-time feedback felt like having an expert by my side the whole time.' },
];

const FAQ_DATA = [
  { q: 'How does the compatibility checker work?', a: 'Our engine cross-references CPU socket types, chipset support, power delivery, physical form factors, and thermal constraints in real time. When you select a component that conflicts with another, you\'re alerted immediately with a clear explanation and compatible alternatives suggested.' },
  { q: 'Can I save my build for later?', a: 'Yes — every build can be exported as a shareable link or downloadable PDF spec sheet. You can return to it anytime, make changes, or share it with friends for feedback. No account required to save locally.' },
  { q: 'Are component prices updated in real-time?', a: 'Prices are pulled from our database which syncs daily with major retailers. We show the lowest current market price with links to multiple purchasing options so you can compare and choose where to buy.' },
  { q: 'Is SPECRE mobile friendly?', a: 'Absolutely. The entire platform — including the PC builder — is fully responsive and optimized for mobile devices. Whether you\'re on a phone, tablet, laptop, or desktop monitor, SPECRE adapts and works flawlessly.' },
  { q: 'Can I compare multiple builds side by side?', a: 'Yes. You can create and save multiple build configurations then launch a side-by-side comparison view that shows price differences, performance deltas, and compatibility status at a glance.' },
  { q: 'How accurate is the AI performance estimation?', a: 'Our performance model is trained on thousands of real-world benchmarks. Estimates are accurate within ±5% for gaming workloads and ±8% for creative workloads. We show confidence intervals so you always know how precise the estimate is.' },
];

/* ─── AVATAR GRADIENT PALETTE ─── */
const AVATAR_GRADIENTS = [
  'linear-gradient(135deg, #00d4ff, #0066ff)',
  'linear-gradient(135deg, #ff6b6b, #ee5a24)',
  'linear-gradient(135deg, #a29bfe, #6c5ce7)',
  'linear-gradient(135deg, #55efc4, #00b894)',
  'linear-gradient(135deg, #fdcb6e, #e17055)',
];

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

function getAvatarGradient(index) {
  return AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length];
}

/* ─── STATE ─── */
const build = { cpu: null, gpu: null, mb: null, ram: null, storage: null, psu: null, case: null, cooling: null };
let currentCat = 'cpu';
let carouselIndex = 0;

/* ─── RENDER: FEATURES ─── */
function renderFeatures() {
  const grid = document.getElementById('featuresGrid');
  if (!grid) return;
  grid.innerHTML = FEATURES_DATA.map((f, i) => `
    <div class="feature-card reveal${i > 0 ? ` reveal-delay-${Math.min(i, 4)}` : ''}" role="listitem">
      <div class="feature-icon">
        <img src="${f.icon}" alt="" width="22" height="22" loading="lazy">
      </div>
      <div class="feature-title">${f.title}</div>
      <div class="feature-desc">${f.desc}</div>
    </div>
  `).join('');
  observeReveal();
}

/* ─── RENDER: PRICING ─── */
function renderPricing() {
  const grid = document.getElementById('pricingGrid');
  if (!grid) return;
  grid.innerHTML = PRICING_DATA.map((p, i) => `
    <div class="pricing-card${p.featured ? ' featured' : ''} reveal${i > 0 ? ` reveal-delay-${i}` : ''}" role="listitem">
      ${p.badge ? `<div class="pricing-badge">${p.badge}</div>` : ''}
      <div class="pricing-tier">${p.tier}</div>
      <div class="pricing-name">${p.name}</div>
      <div class="pricing-range">
        <span class="price-from">from</span>
        <span class="price-num">$${p.from.toLocaleString()}</span>
        <span class="price-to">– $${p.to.toLocaleString()}</span>
      </div>
      <div class="pricing-perf">
        <div class="perf-bar-wrap"><div class="perf-bar" style="width:${p.perf}%"></div></div>
        <span class="perf-label">${p.perfLabel}</span>
      </div>
      <ul class="pricing-list">
        ${p.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
      <button class="btn-pricing ${p.btnClass}" onclick="openBuilder()">Configure Build</button>
    </div>
  `).join('');
  observeReveal();
}

/* ─── RENDER: TESTIMONIALS ─── */
function renderTestimonials() {
  const track = document.getElementById('testimonialsTrack');
  if (!track) return;
  track.innerHTML = TESTIMONIALS_DATA.map((t, i) => `
    <div class="testimonial-card" role="listitem">
      <div class="t-header">
        <div class="t-avatar" style="background:${getAvatarGradient(i)}" aria-label="${t.name}">
          ${getInitials(t.name)}
        </div>
        <div>
          <div class="t-name">${t.name}</div>
          <div class="t-role">${t.role}</div>
        </div>
      </div>
      <div class="t-stars" aria-label="5 stars">
        <span aria-hidden="true">★★★★★</span>
      </div>
      <div class="t-text">${t.text}</div>
    </div>
  `).join('');
  buildCarouselDots();
}

/* ─── RENDER: FAQ ─── */
function renderFAQ() {
  const list = document.getElementById('faqList');
  if (!list) return;
  list.innerHTML = FAQ_DATA.map(faq => `
    <div class="faq-item" role="listitem">
      <button class="faq-q" aria-expanded="false">
        ${faq.q}
        <span class="faq-icon" aria-hidden="true">+</span>
      </button>
      <div class="faq-a" role="region">
        <div class="faq-a-inner">${faq.a}</div>
      </div>
    </div>
  `).join('');

  list.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => toggleFaq(btn));
  });
}

function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
  });
  if (!isOpen) {
    item.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
}

/* ─── BUILDER: OPEN / CLOSE ─── */
function openBuilder() {
  const overlay = document.getElementById('builderOverlay');
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  renderSidebar();
  renderCategory('cpu');
}

function closeBuilder() {
  const overlay = document.getElementById('builderOverlay');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ─── BUILDER: SIDEBAR ─── */
function renderSidebar() {
  const sidebar = document.getElementById('builderSidebar');
  if (!sidebar) return;

  sidebar.innerHTML = `<div class="sidebar-title">Components</div>`;

  CATEGORIES.forEach(cat => {
    const hasSelection = build[cat.id] !== null;
    const btn = document.createElement('button');
    btn.className = 'cat-btn' + (cat.id === currentCat ? ' active' : '') + (hasSelection ? ' selected' : '');
    btn.setAttribute('aria-label', `${cat.label}${hasSelection ? ' (selected)' : ''}`);
    btn.innerHTML = `
      <div class="cat-icon">
        <img src="${cat.icon}" alt="" width="16" height="16" loading="lazy">
      </div>
      <span>${cat.label}</span>
      ${hasSelection ? '<div class="cat-check" aria-hidden="true">✓</div>' : ''}
    `;
    btn.addEventListener('click', () => renderCategory(cat.id));
    sidebar.appendChild(btn);
  });
}

/* ─── BUILDER: CATEGORY ─── */
function renderCategory(catId) {
  currentCat = catId;
  const cat = CATEGORIES.find(c => c.id === catId);
  const comps = COMPONENTS[catId];

  const label = document.getElementById('builderCatLabel');
  if (label) label.textContent = cat.label;

  const main = document.getElementById('builderMain');
  if (!main) return;

  let compatWarnHtml = '';
  if (catId === 'mb' && build.cpu) {
    compatWarnHtml = `
      <div class="compat-warning show" role="alert">
        ⚠ Your CPU uses <strong>${build.cpu.socket.toUpperCase()}</strong> socket. Only compatible motherboards are highlighted.
      </div>`;
  }

  main.innerHTML = `
    <div class="builder-cat-title">${cat.label}</div>
    <div class="builder-cat-sub">${cat.desc}</div>
    ${compatWarnHtml}
    <div class="components-grid" id="compGrid" role="list"></div>
  `;

  const grid = document.getElementById('compGrid');
  if (!grid) return;

  comps.forEach(comp => {
    const isSelected = build[catId] && build[catId].id === comp.id;
    const isIncompat = catId === 'mb' && build.cpu && comp.socket !== build.cpu.socket;

    const card = document.createElement('div');
    card.className = 'comp-card' + (isSelected ? ' selected' : '');
    card.setAttribute('role', 'listitem');
    card.setAttribute('aria-label', `${comp.name} — $${comp.price}`);
    if (isIncompat) {
      card.style.opacity = '0.3';
      card.style.pointerEvents = 'none';
      card.setAttribute('aria-disabled', 'true');
    }

    card.innerHTML = `
      <div class="selected-check" aria-hidden="true">✓</div>
      <div class="comp-product-image">
        <img src="${comp.image || ''}" alt="${comp.name}" loading="lazy" onerror="this.style.opacity='0.2'">
      </div>
      <div class="comp-card-header">
        <div class="comp-icon">
          <img src="${cat.icon}" alt="" width="18" height="18" loading="lazy">
        </div>
        ${comp.tag ? `<div class="comp-tag">${comp.tag}</div>` : ''}
      </div>
      <div class="comp-name">${comp.name}</div>
      <div class="comp-specs">${comp.specs}</div>
      <div class="comp-footer">
        <div class="comp-price">$${comp.price.toLocaleString()}</div>
        <div class="comp-score-bar" aria-hidden="true">
          <div class="comp-score-fill" style="width:${comp.score}%"></div>
        </div>
        <div class="comp-score-val">${comp.score}/100</div>
      </div>
    `;

    card.addEventListener('click', () => selectComponent(catId, comp));
    grid.appendChild(card);
  });

  renderSidebar();
}

/* ─── BUILDER: SELECT COMPONENT ─── */
function selectComponent(catId, comp) {
  build[catId] = comp;
  updatePanel();
  renderCategory(catId);

  const idx = CATEGORIES.findIndex(c => c.id === catId);
  if (idx < CATEGORIES.length - 1) {
    setTimeout(() => renderCategory(CATEGORIES[idx + 1].id), 280);
  }
}

/* ─── BUILDER: UPDATE PANEL ─── */
function updatePanel() {
  let total = 0;
  let selected = 0;
  Object.values(build).forEach(c => { if (c) { total += c.price; selected++; } });

  const priceEl = document.getElementById('priceTotal');
  const partsEl = document.getElementById('priceParts');
  if (priceEl) priceEl.textContent = total.toLocaleString();
  if (partsEl) partsEl.textContent = `${selected} of 8 components selected`;

  renderBuildItems();
  updateCompatibility();
  updatePerformance();
  updatePower();
}

function renderBuildItems() {
  const container = document.getElementById('buildItems');
  if (!container) return;
  container.innerHTML = '';

  CATEGORIES.forEach(cat => {
    const comp = build[cat.id];
    const item = document.createElement('div');
    item.className = 'build-item' + (!comp ? ' empty-slot' : '');
    item.setAttribute('role', 'listitem');
    item.innerHTML = `
      <div class="build-item-icon">
        <img src="${cat.icon}" alt="" width="14" height="14" loading="lazy">
      </div>
      <div class="build-item-info">
        <div class="build-item-cat">${cat.label}</div>
        <div class="build-item-name">${comp ? comp.name : 'Not selected'}</div>
      </div>
      <div class="build-item-price">${comp ? '$' + comp.price.toLocaleString() : '—'}</div>
    `;
    item.addEventListener('click', () => renderCategory(cat.id));
    container.appendChild(item);
  });
}

function updateCompatibility() {
  const dot = document.getElementById('compatDot');
  const textEl = document.getElementById('compatText');
  const subEl = document.getElementById('compatSub');
  if (!dot || !textEl || !subEl) return;

  const issues = [];
  if (build.cpu && build.mb && build.cpu.socket !== build.mb.socket) {
    issues.push(`CPU socket (${build.cpu.socket.toUpperCase()}) doesn't match motherboard (${build.mb.socket.toUpperCase()})`);
  }

  dot.className = 'compat-dot';
  if (issues.length > 0) {
    dot.classList.add('compat-dot--err');
    textEl.textContent = 'Incompatibility Detected';
    subEl.textContent = issues[0];
  } else if (Object.values(build).filter(Boolean).length >= 2) {
    dot.classList.add('compat-dot--ok');
    textEl.textContent = 'All Clear';
    subEl.textContent = 'No compatibility issues detected';
  } else {
    dot.classList.add('compat-dot--warn');
    textEl.textContent = 'Building...';
    subEl.textContent = 'Select components to begin';
  }
}

function updatePerformance() {
  const ids = ['perfGame', 'perfCreate', 'perfAI', 'perfStream'];
  const valIds = ['perfGameVal', 'perfCreateVal', 'perfAIVal', 'perfStreamVal'];

  if (!build.cpu && !build.gpu) {
    ids.forEach(id => { const el = document.getElementById(id); if (el) el.style.width = '0%'; });
    valIds.forEach(id => { const el = document.getElementById(id); if (el) el.textContent = '—'; });
    return;
  }

  const cpuScore = build.cpu ? build.cpu.score : 50;
  const gpuScore = build.gpu ? build.gpu.score : 50;
  const ramScore = build.ram ? build.ram.score : 50;

  const scores = [
    Math.min(100, Math.round(gpuScore * 0.55 + cpuScore * 0.3 + ramScore * 0.15)),
    Math.min(100, Math.round(cpuScore * 0.5  + gpuScore * 0.3 + ramScore * 0.2)),
    Math.min(100, Math.round(gpuScore * 0.65 + cpuScore * 0.25 + ramScore * 0.1)),
    Math.min(100, Math.round(cpuScore * 0.55 + gpuScore * 0.25 + ramScore * 0.2)),
  ];

  requestAnimationFrame(() => {
    ids.forEach((id, i) => {
      const el = document.getElementById(id);
      if (el) el.style.width = scores[i] + '%';
    });
    valIds.forEach((id, i) => {
      const el = document.getElementById(id);
      if (el) el.textContent = scores[i] + '/100';
    });
  });
}

function updatePower() {
  const pwrEl = document.getElementById('pwrStatus');
  if (!pwrEl) return;

  if (!build.psu) {
    pwrEl.innerHTML = '<span class="pwr-idle">Select a PSU to check power.</span>';
    return;
  }

  const psuWatts = build.psu.wattage;
  const cpuTdp = build.cpu ? (build.cpu.tdp || 125) : 0;
  const gpuTdpMap = { 'rtx-2070': 175, 'rtx-3060': 170, 'rtx-4060': 115, 'rtx-4090': 450, 'rtx-5050': 130, 'rtx-5060': 150, 'rtx-5080': 360 };
  const gpuTdp = build.gpu ? (gpuTdpMap[build.gpu.id] || 200) : 0;
  const estimatedLoad = cpuTdp + gpuTdp + 100;
  const usage = Math.round((estimatedLoad / psuWatts) * 100);
  const headroom = psuWatts - estimatedLoad;

  if (usage > 85) {
    pwrEl.innerHTML = `<span class="pwr-warn">⚠ ${usage}% PSU load — consider a larger PSU</span>`;
  } else if (estimatedLoad > 0) {
    pwrEl.innerHTML = `<span class="pwr-ok">✓ ${usage}% load · ${headroom}W headroom</span>`;
  } else {
    pwrEl.innerHTML = `<span class="pwr-idle">${psuWatts}W PSU selected</span>`;
  }
}

/* ─── SAVE / SHARE ─── */
function saveBuild() {
  const count = Object.values(build).filter(Boolean).length;
  if (count === 0) { showToast('Select at least one component first'); return; }
  showToast('✓ Build saved successfully!');
}

function shareBuild() {
  const count = Object.values(build).filter(Boolean).length;
  if (count === 0) { showToast('Select components to share'); return; }
  showToast('🔗 Share link copied to clipboard!');
}

/* ─── TOAST ─── */
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

/* ─── CAROUSEL ─── */
const TOTAL_CARDS = TESTIMONIALS_DATA.length;
const visibleCards = () => window.innerWidth > 900 ? 3 : window.innerWidth > 600 ? 2 : 1;
const maxIndex = () => Math.max(0, TOTAL_CARDS - visibleCards());

function buildCarouselDots() {
  const container = document.getElementById('carouselDots');
  if (!container) return;
  container.innerHTML = '';
  const max = maxIndex();
  for (let i = 0; i <= max; i++) {
    const d = document.createElement('button');
    d.className = 'carousel-dot' + (i === carouselIndex ? ' active' : '');
    d.setAttribute('role', 'tab');
    d.setAttribute('aria-label', `Review page ${i + 1}`);
    d.setAttribute('aria-selected', i === carouselIndex ? 'true' : 'false');
    d.addEventListener('click', () => { carouselIndex = i; applyCarousel(); });
    container.appendChild(d);
  }
}

function moveCarousel(dir) {
  carouselIndex = Math.max(0, Math.min(maxIndex(), carouselIndex + dir));
  applyCarousel();
}

function applyCarousel() {
  const track = document.getElementById('testimonialsTrack');
  if (!track) return;
  const cardWidth = 340 + 20;
  track.style.transform = `translateX(-${carouselIndex * cardWidth}px)`;
  buildCarouselDots();
}

let autoplayTimer = setInterval(() => {
  carouselIndex = carouselIndex >= maxIndex() ? 0 : carouselIndex + 1;
  applyCarousel();
}, 5000);

/* ─── NAVBAR SCROLL ─── */
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ─── MOBILE MENU ─── */
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('hamburgerBtn');
  if (!menu || !btn) return;
  const isOpen = menu.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
  btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  menu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
}

function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('hamburgerBtn');
  if (!menu || !btn) return;
  menu.classList.remove('open');
  btn.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-hidden', 'true');
}

/* ─── REVEAL ON SCROLL ─── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

function observeReveal() {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
}

/* ─── EVENT LISTENERS ─── */
function bindEvents() {
  // Navbar CTA
  const navCta = document.getElementById('navCtaBtn');
  if (navCta) navCta.addEventListener('click', openBuilder);

  // Hero buttons
  const heroCta = document.getElementById('heroCtaBtn');
  if (heroCta) heroCta.addEventListener('click', openBuilder);

  const heroExplore = document.getElementById('heroExploreBtn');
  if (heroExplore) heroExplore.addEventListener('click', () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Strip CTA
  const stripCta = document.getElementById('stripCtaBtn');
  if (stripCta) stripCta.addEventListener('click', openBuilder);

  // Final CTA
  const ctaFinal = document.getElementById('ctaFinalBtn');
  if (ctaFinal) ctaFinal.addEventListener('click', openBuilder);

  // Mobile CTA
  const mobileCta = document.getElementById('mobileCta');
  if (mobileCta) mobileCta.addEventListener('click', () => { closeMobileMenu(); openBuilder(); });

  // Hamburger
  const hamburger = document.getElementById('hamburgerBtn');
  if (hamburger) hamburger.addEventListener('click', toggleMobileMenu);

  // Mobile links — close menu on click
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Builder close
  const closeBtn = document.getElementById('builderCloseBtn');
  if (closeBtn) closeBtn.addEventListener('click', closeBuilder);

  // Builder save/share
  const saveBtn = document.getElementById('saveBuildBtn');
  if (saveBtn) saveBtn.addEventListener('click', saveBuild);

  const shareBtn = document.getElementById('shareBuildBtn');
  if (shareBtn) shareBtn.addEventListener('click', shareBuild);

  // Carousel
  const prevBtn = document.getElementById('carouselPrev');
  if (prevBtn) prevBtn.addEventListener('click', () => moveCarousel(-1));

  const nextBtn = document.getElementById('carouselNext');
  if (nextBtn) nextBtn.addEventListener('click', () => moveCarousel(1));

  // Close builder on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const overlay = document.getElementById('builderOverlay');
      if (overlay && overlay.classList.contains('open')) closeBuilder();
    }
  });

  // Resize
  window.addEventListener('resize', () => {
    applyCarousel();
    buildCarouselDots();
  }, { passive: true });
}

/* ─── INIT ─── */
window.addEventListener('load', () => {
  renderFeatures();
  renderPricing();
  renderTestimonials();
  renderFAQ();
  updatePanel();
  bindEvents();
  observeReveal();
});
