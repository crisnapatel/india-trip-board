const places = [
  // Delhi - cafes/restaurants
  { id: "cafe-de-flora", name: "Cafe De Flora", city: "Delhi", category: "Cafe", priority: "high", notes: "Lunch option; choose outlet later. One outlet is near Lodhi Garden." },
  { id: "diggin-sadiq", name: "Diggin Cafe, Sadiq Nagar", city: "Delhi", category: "Cafe", priority: "medium", notes: "Dinner option from the 29 June draft." },
  { id: "spezia-bistro", name: "Spezia Bistro", city: "Delhi", category: "Restaurant", priority: "high", notes: "30 June draft lunch/cafe option." },
  { id: "norwang", name: "Norwang Cafe and Restaurant", city: "Delhi", category: "Restaurant", priority: "high", notes: "30 June dinner option." },
  { id: "hard-rock", name: "Hard Rock Cafe", city: "Delhi NCR", category: "Nightlife", priority: "low", notes: "Club/pub wishlist." },
  { id: "raasta", name: "Raasta", city: "Delhi", category: "Nightlife", priority: "low", notes: "Club/pub wishlist; check current events." },
  { id: "summer-house", name: "Summer House Cafe", city: "Delhi", category: "Nightlife", priority: "low", notes: "Source spelling was 'Sumner House'." },
  { id: "privee", name: "Privee", city: "Delhi", category: "Nightlife", priority: "low", notes: "Club wishlist; verify event and crowd before booking." },
  { id: "pebble-street", name: "Pebble Street", city: "Delhi", category: "Nightlife", priority: "low", notes: "Pub/karaoke candidate; verify current karaoke day." },

  // Delhi - monuments/museums/outdoor
  { id: "gandhi-smriti", name: "Gandhi Smriti", city: "Delhi", category: "Museum", priority: "high", notes: "Good museum/history slot for 30 June; closed Mondays." },
  { id: "national-museum", name: "National Museum", city: "Delhi", category: "Museum", priority: "high", notes: "From 29 June draft; check current hours before final plan." },
  { id: "ngma", name: "National Gallery of Modern Art", city: "Delhi", category: "Museum", priority: "medium", notes: "Art/museum option near India Gate." },
  { id: "red-fort", name: "Red Fort", city: "Delhi", category: "Monument", priority: "high", notes: "Can be moved to another day if 29 June is too packed." },
  { id: "qutub-minar", name: "Qutub Minar", city: "Delhi", category: "Monument", priority: "high", notes: "Major monument; geographically separate from Old Delhi." },
  { id: "humayun-tomb", name: "Humayun's Tomb", city: "Delhi", category: "Monument", priority: "medium", notes: "Strong monument option near Nizamuddin/Lodhi side." },
  { id: "india-gate", name: "India Gate", city: "Delhi", category: "Monument", priority: "medium", notes: "Works well as evening drive/walk if weather allows." },
  { id: "lotus-temple", name: "Lotus Temple", city: "Delhi", category: "Religious", priority: "medium", notes: "Check weekly closure and queue before scheduling." },
  { id: "lodhi-garden", name: "Lodhi Garden", city: "Delhi", category: "Garden", priority: "high", notes: "Relaxed fallback instead of Red Fort; pairs with Cafe De Flora and Lodhi Art District." },
  { id: "lodhi-art", name: "Lodhi Art District", city: "Delhi", category: "Photo spot", priority: "high", notes: "30 June street-art/photoshoot idea." },
  { id: "national-zoo", name: "National Zoological Park", city: "Delhi", category: "Outdoor", priority: "medium", notes: "Open Mondays, closed Fridays; good only if heat/rain is manageable." },
  { id: "purana-qila-boating", name: "Purana Qila Lake boating", city: "Delhi", category: "Outdoor", priority: "medium", notes: "Adjacent to zoo; reconfirm same-day operation." },

  // Delhi - temples/religious sites
  { id: "birla-mandir", name: "Birla Mandir / Lakshmi Narayan Temple", city: "Delhi", category: "Religious", priority: "high", notes: "Likely from the draft spelling 'lal lakshmi...needest sheck'." },
  { id: "hanuman-cp", name: "Hanuman Mandir, Connaught Place", city: "Delhi", category: "Religious", priority: "high", notes: "Tuesday can be crowded but lively; also near CP flower market." },
  { id: "jama-masjid", name: "Jama Masjid", city: "Delhi", category: "Religious", priority: "medium", notes: "Religious/Old Delhi option; dress modestly." },
  { id: "akshardham", name: "Akshardham", city: "Delhi", category: "Religious", priority: "medium", notes: "Large time block; strict security and no phones inside." },
  { id: "bangla-sahib", name: "Gurudwara Bangla Sahib", city: "Delhi", category: "Religious", priority: "medium", notes: "Source text: 'Bangla shahi Gurudwara'." },
  { id: "iskcon-delhi", name: "ISKCON Temple Delhi", city: "Delhi", category: "Religious", priority: "low", notes: "Temple wishlist." },
  { id: "chhatarpur", name: "Chhatarpur Temple", city: "Delhi", category: "Religious", priority: "low", notes: "Large temple complex; farther south." },

  // Delhi - markets/shopping
  { id: "dilli-haat", name: "Dilli Haat INA", city: "Delhi", category: "Shopping", priority: "high", notes: "Good match for colorful Indian crafts, accessories, and food." },
  { id: "lajpat-nagar", name: "Lajpat Nagar Central Market", city: "Delhi", category: "Shopping", priority: "high", notes: "Affordable Indian wear and easy mehendi option." },
  { id: "janpath", name: "Janpath Market", city: "Delhi", category: "Shopping", priority: "medium", notes: "Budget accessories and boho shopping." },
  { id: "khan-market", name: "Khan Market", city: "Delhi", category: "Shopping", priority: "medium", notes: "Nice but premium; may not fit 'not too expensive'." },
  { id: "aerocity-worldmark", name: "Worldmark Aerocity", city: "Delhi", category: "Shopping", priority: "medium", notes: "Likely 'mall in Aerocity'; convenient/upmarket." },
  { id: "shahpur-jat", name: "Shahpur Jat", city: "Delhi", category: "Shopping", priority: "medium", notes: "Boutique/designer Indian wear; prices vary widely." },
  { id: "chandni-chowk", name: "Chandni Chowk", city: "Delhi", category: "Market", priority: "medium", notes: "Includes Chatta Chowk, Dariba Kalan, Fatehpuri area." },
  { id: "daryaganj-books", name: "Daryaganj Sunday Book Market", city: "Delhi", category: "Market", priority: "low", notes: "Sunday-specific; verify current location/timing." },
  { id: "ghazipur-flower", name: "Ghazipur Flower Market", city: "Delhi", category: "Market", priority: "medium", notes: "Bigger flower market, but adds travel time." },
  { id: "cp-flower", name: "CP / Hanuman Mandir Flower Market", city: "Delhi", category: "Market", priority: "high", notes: "Best fit for 30 June route if doing Hanuman Mandir." },
  { id: "mehendi", name: "Mehendi", city: "Delhi", category: "Experience", priority: "high", notes: "Can pair with Lajpat Nagar or another market." },
  { id: "karaoke", name: "Karaoke booking", city: "Delhi NCR", category: "Experience", priority: "medium", notes: "Need to choose private room vs open bar karaoke." },

  // Jaipur
  { id: "hawa-mahal", name: "Hawa Mahal", city: "Jaipur", category: "Monument", priority: "high", notes: "Classic Jaipur stop." },
  { id: "amber-palace", name: "Amber / Amer Palace", city: "Jaipur", category: "Monument", priority: "high", notes: "Source spelling was 'Ambet Palace'. Sheesh Mahal is inside this complex." },
  { id: "jal-mahal", name: "Jal Mahal / Man Sagar Lake", city: "Jaipur", category: "Photo spot", priority: "high", notes: "Photo stop; Man Sagar Lake is same area." },
  { id: "jaigarh-fort", name: "Jaigarh Fort", city: "Jaipur", category: "Monument", priority: "medium", notes: "Can pair with Amber side if time allows." },
  { id: "panna-meena", name: "Panna Meena ka Kund", city: "Jaipur", category: "Photo spot", priority: "medium", notes: "Near Amber area." },
  { id: "galtaji", name: "Galtaji / Monkey Temple", city: "Jaipur", category: "Religious", priority: "medium", notes: "Source spelling was 'Mankey Temple'." },
  { id: "albert-hall", name: "Albert Hall Museum", city: "Jaipur", category: "Museum", priority: "medium", notes: "Central Jaipur museum." },
  { id: "patrika-gate", name: "Patrika Gate", city: "Jaipur", category: "Photo spot", priority: "medium", notes: "Colorful photo stop." },
  { id: "anokhi-museum", name: "Anokhi Museum of Hand Printing", city: "Jaipur", category: "Museum", priority: "medium", notes: "Good textile/printing interest stop." },
  { id: "dera-amer", name: "Dera Amer / Elephant Joy", city: "Jaipur", category: "Experience", priority: "low", notes: "Review animal-welfare angle before including." }
];

const placeDescriptions = {
  "cafe-de-flora": "Pretty cafe option for a slower lunch or coffee stop. Best use is ambience, photos, and a relaxed break near the Lodhi side of the city.",
  "diggin-sadiq": "Known for its cozy, leafy cafe feel and Italian-leaning comfort food. Good for pasta, pizza, coffee, and a low-pressure dinner after sightseeing.",
  "spezia-bistro": "Casual bistro choice for a broad menu, mocktails, and cafe-style plates. Useful when the group wants something easy rather than a formal restaurant.",
  "norwang": "Tibetan/Himalayan-style dinner option. Good for momos, thukpa/noodle soups, and a different food mood from typical Delhi cafe menus.",
  "hard-rock": "Familiar live-music/pub style option. Good when the goal is predictable food, loud music, and a casual night out rather than a local hidden spot.",
  "raasta": "Reggae-themed bar/cafe known for music, cocktails/mocktails, and a relaxed party vibe. Better as an evening option than a food-first choice.",
  "summer-house": "Popular nightlife/cafe style venue for drinks, music, and a social crowd. Best checked for the event lineup before deciding.",
  "privee": "Club option for a dressed-up late-night plan. Works only if the current event, entry rules, and crowd match the mood.",
  "pebble-street": "Pub-style option with casual food and drinks. Worth considering for a more relaxed evening than a full club night.",

  "gandhi-smriti": "Historically important site connected with Mahatma Gandhi's last days. Best for a quiet, meaningful museum stop rather than a monument-heavy visit.",
  "national-museum": "Major museum for Indian history, sculpture, textiles, arms, and cultural objects. Good when the weather is poor or when a deeper history stop is needed.",
  "ngma": "Art-focused stop near India Gate with modern and contemporary Indian works. Good for a calmer indoor break if she wants galleries.",
  "red-fort": "Iconic Mughal-era fort and Old Delhi landmark, known for its red sandstone walls, imperial history, and large-scale architecture.",
  "qutub-minar": "UNESCO-listed monument complex known for the tall minaret, early Indo-Islamic architecture, and strong photo value.",
  "humayun-tomb": "UNESCO-listed Mughal garden tomb and a visual precursor to the Taj Mahal style. Good for architecture, gardens, and photos.",
  "india-gate": "Ceremonial war memorial and evening walk/drive-by spot. Best used as a light outdoor stop rather than a long visit.",
  "lotus-temple": "Baháʼí House of Worship known for its lotus-like architecture and quiet prayer-hall experience. Best if queues and closure day fit.",
  "lodhi-garden": "Green, relaxed park with tombs, walking paths, and photo corners. Strong fallback when the plan needs something easy and low-cost.",
  "lodhi-art": "Open-air street art district with murals spread across Lodhi Colony. Best for photos, walking, and a less monument-heavy Delhi experience.",
  "national-zoo": "Large outdoor zoo beside Purana Qila. Best only if weather is manageable; otherwise it can become tiring in heat or rain.",
  "purana-qila-boating": "Boating option beside Purana Qila. Good as a light add-on near the zoo, but operation should be checked same day.",

  "birla-mandir": "Lakshmi Narayan temple known for its central location, devotional atmosphere, and bright temple architecture.",
  "hanuman-cp": "Busy Hanuman temple near Connaught Place. Tuesdays can be especially lively, so it is good for atmosphere but may be crowded.",
  "jama-masjid": "One of Delhi's major mosques, known for scale, Old Delhi setting, and views from the surrounding area. Modest clothing matters.",
  "akshardham": "Large modern temple complex known for intricate carving, exhibitions, and strict security. Needs a dedicated time block.",
  "bangla-sahib": "Important Sikh gurdwara known for its peaceful sarovar, community kitchen, and central Delhi location.",
  "iskcon-delhi": "Temple complex known for Krishna devotion, kirtan, and vegetarian food options nearby or inside the complex.",
  "chhatarpur": "Large temple complex in South Delhi. Better if already travelling south; otherwise it can consume extra transit time.",

  "dilli-haat": "Good shopping stop for Indian crafts, textiles, jewellery, souvenirs, and regional food stalls. Tourist-friendly and easier than chaotic street markets.",
  "lajpat-nagar": "Practical market for affordable Indian wear, accessories, sandals, and mehendi. Good for birthday outfit hunting on a budget.",
  "janpath": "Central bargain market for accessories, boho clothing, bags, and small gifts. Best with patience and bargaining.",
  "khan-market": "Upscale market with bookstores, cafes, boutiques, and reliable food. Nice area, but usually not the cheapest shopping fit.",
  "aerocity-worldmark": "Polished mall/restaurant zone near the airport. Convenient and clean, but more premium and less local-market style.",
  "shahpur-jat": "Boutique/designer cluster for Indian wear, occasion outfits, and indie labels. Prices vary, so it is better for browsing with a budget in mind.",
  "chandni-chowk": "Dense Old Delhi market area known for lanes, jewellery, food, fabrics, and historic chaos. Best done with a clear micro-route.",
  "daryaganj-books": "Sunday book-market idea for browsing cheap and second-hand books. Timing/location should be checked before planning around it.",
  "ghazipur-flower": "Wholesale-style flower market with strong early-morning photo value. Bigger and more raw, but it adds travel time.",
  "cp-flower": "Easier flower-market option around Connaught Place/Hanuman Mandir. Smaller but more convenient for a central Delhi route.",
  "mehendi": "Good add-on to shopping day, especially around market areas. Lajpat Nagar is practical for quick mehendi with outfit shopping.",
  "karaoke": "Evening experience option. Decide between private-room karaoke and open bar karaoke depending on how social or relaxed the group wants it.",

  "hawa-mahal": "Jaipur's famous honeycomb-like facade, built for royal women to observe street life. Best as a photo stop from outside and nearby viewpoints.",
  "amber-palace": "Major Jaipur palace-fort complex known for courtyards, views, mirror work, and royal architecture. One of the strongest Jaipur priorities.",
  "jal-mahal": "Water palace photo stop in Man Sagar Lake. Best for a short scenic pause rather than a long visit.",
  "jaigarh-fort": "Hill fort above Amber known for views, defensive architecture, and the Jaivana cannon. Works well if time allows on the Amber side.",
  "panna-meena": "Historic stepwell near Amber, known for geometric stairs and photos. Best as a short add-on in the Amber cluster.",
  "galtaji": "Temple complex in the hills, often called Monkey Temple. Known for water tanks, monkeys, and a different landscape from Jaipur city.",
  "albert-hall": "Central Jaipur museum known for Indo-Saracenic architecture and collections. Also visually strong from outside in the evening.",
  "patrika-gate": "Colorful, highly photogenic gateway with painted archways. Good quick stop if the route passes that side.",
  "anokhi-museum": "Small specialist museum on hand block printing. Good for textile, craft, and design interest near the Amber side.",
  "dera-amer": "Outdoor/elephant-related experience option near Jaipur. Include only after checking animal-welfare comfort and the exact activity."
};

const dayIdeas = [
  {
    date: "29 Jun",
    title: "Arrival afternoon",
    items: ["Cafe De Flora", "Zoo or Lodhi Garden", "Purana Qila boating if running", "Red Fort only if time allows"]
  },
  {
    date: "30 Jun",
    title: "Flowers + art + temples",
    items: ["Flower market", "Lodhi Art District", "Gandhi Smriti", "Spezia Bistro", "Birla Mandir + Hanuman Mandir", "Norwang dinner"]
  },
  {
    date: "1 Jul",
    title: "Shopping + birthday prep",
    items: ["Dilli Haat / Lajpat / Shahpur Jat", "Mehendi", "Cafe/lunch", "Park or museum", "Dinner", "Karaoke if booked"]
  },
  {
    date: "4-5 Jul",
    title: "Jaipur weekend",
    items: ["Cab to Jaipur Saturday morning", "Amber side cluster", "Old city/photo stops", "Return train Sunday evening"]
  }
];

const stateKey = "india-trip-board-v1";
const viewKey = "india-trip-board-view";
const placeOrder = new Map(places.map((place, index) => [place.id, index]));
const filters = {
  city: "all",
  category: "all",
  status: "all"
};
const doubleTapWindowMs = 300;
const singleTapDelayMs = 310;
const state = loadState();
const lastTap = { id: null, time: 0, x: 0, y: 0 };
const detailState = { placeId: null, openTimer: null };

const els = {
  search: document.querySelector("#searchInput"),
  city: document.querySelector("#cityFilter"),
  category: document.querySelector("#categoryFilter"),
  status: document.querySelector("#statusFilter"),
  cityOptions: document.querySelector("#cityOptions"),
  categoryOptions: document.querySelector("#categoryOptions"),
  statusOptions: document.querySelector("#statusOptions"),
  placeList: document.querySelector("#placeList"),
  resultCount: document.querySelector("#resultCount"),
  planToggle: document.querySelector("#planToggle"),
  planPanel: document.querySelector("#planPanel"),
  dayPlan: document.querySelector("#dayPlan"),
  template: document.querySelector("#placeTemplate"),
  phoneView: document.querySelector("#phoneView"),
  desktopView: document.querySelector("#desktopView"),
  detailShell: document.querySelector("#detailShell"),
  detailBackdrop: document.querySelector("#detailBackdrop"),
  detailClose: document.querySelector("#detailClose"),
  detailMeta: document.querySelector("#detailMeta"),
  detailTitle: document.querySelector("#detailTitle"),
  detailHero: document.querySelector("#detailHero"),
  detailNotes: document.querySelector("#detailNotes"),
  detailPriority: document.querySelector("#detailPriority"),
  detailStatus: document.querySelector("#detailStatus"),
  detailVisited: document.querySelector("#detailVisited"),
  detailMap: document.querySelector("#detailMap")
};

init();

function init() {
  hydrateFromUrl();
  initViewMode();
  populateFilters();
  renderDayIdeas();
  render();

  els.search.addEventListener("input", render);
  els.city.addEventListener("click", (event) => toggleFilterMenu("city", event));
  els.category.addEventListener("click", (event) => toggleFilterMenu("category", event));
  els.status.addEventListener("click", (event) => toggleFilterMenu("status", event));
  els.planToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    togglePlanPanel();
  });
  els.planPanel.addEventListener("click", (event) => event.stopPropagation());
  document.addEventListener("click", () => {
    closePlanPanel();
    closeFilterMenus();
  });
  els.phoneView.addEventListener("click", () => setViewMode("phone"));
  els.desktopView.addEventListener("click", () => setViewMode("desktop"));
  els.detailBackdrop.addEventListener("click", handleDetailBackdropClick);
  els.detailClose.addEventListener("click", closePlaceDetail);
  els.detailVisited.addEventListener("click", () => {
    if (!detailState.placeId) return;
    toggleVisited(detailState.placeId);
    renderPlaceDetail();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePlaceDetail();
      closePlanPanel();
      closeFilterMenus();
    }
  });
}

function togglePlanPanel() {
  const willOpen = els.planPanel.hidden;
  els.planPanel.hidden = !willOpen;
  els.planToggle.setAttribute("aria-expanded", String(willOpen));
}

function closePlanPanel() {
  if (els.planPanel.hidden) return;
  els.planPanel.hidden = true;
  els.planToggle.setAttribute("aria-expanded", "false");
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(stateKey) || "{}");
    return {
      visited: new Set(saved.visited || [])
    };
  } catch {
    return { visited: new Set() };
  }
}

function initViewMode() {
  const saved = localStorage.getItem(viewKey);
  const mode = saved || (matchMedia("(max-width: 700px)").matches ? "phone" : "desktop");
  setViewMode(mode);
}

function setViewMode(mode) {
  const safeMode = mode === "phone" ? "phone" : "desktop";
  document.body.classList.toggle("view-phone", safeMode === "phone");
  document.body.classList.toggle("view-desktop", safeMode === "desktop");
  els.phoneView.setAttribute("aria-pressed", String(safeMode === "phone"));
  els.desktopView.setAttribute("aria-pressed", String(safeMode === "desktop"));
  localStorage.setItem(viewKey, safeMode);
  renderPlaceDetail();
}

function saveState() {
  localStorage.setItem(
    stateKey,
    JSON.stringify({
      visited: [...state.visited]
    })
  );
}

function populateFilters() {
  const cities = unique(places.map((place) => place.city)).sort();
  const categories = unique(places.map((place) => place.category)).sort();

  populateFilterOptions("city", [{ value: "all", label: "All cities" }, ...cities.map((city) => ({ value: city, label: city }))]);
  populateFilterOptions("category", [
    { value: "all", label: "All categories" },
    ...categories.map((category) => ({ value: category, label: category }))
  ]);
  populateFilterOptions("status", [
    { value: "all", label: "All" },
    { value: "not_visited", label: "Not visited" },
    { value: "visited", label: "Visited" }
  ]);
}

function populateFilterOptions(name, options) {
  const optionsEl = els[`${name}Options`];
  optionsEl.replaceChildren();

  for (const option of options) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-option";
    button.dataset.value = option.value;
    button.textContent = option.label;
    button.setAttribute("aria-selected", String(filters[name] === option.value));
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      filters[name] = option.value;
      updateFilterButton(name);
      closeFilterMenus();
      render();
    });
    optionsEl.append(button);
  }

  updateFilterButton(name);
}

function toggleFilterMenu(name, event) {
  event.stopPropagation();
  closePlanPanel();
  const optionsEl = els[`${name}Options`];
  const willOpen = optionsEl.hidden;
  closeFilterMenus();
  optionsEl.hidden = !willOpen;
  els[name].setAttribute("aria-expanded", String(willOpen));
}

function closeFilterMenus() {
  for (const name of ["city", "category", "status"]) {
    els[`${name}Options`].hidden = true;
    els[name].setAttribute("aria-expanded", "false");
  }
}

function updateFilterButton(name) {
  const selected = els[`${name}Options`].querySelector(`[data-value="${cssEscape(filters[name])}"]`);
  els[name].textContent = selected ? selected.textContent : "All";

  for (const option of els[`${name}Options`].querySelectorAll(".filter-option")) {
    option.setAttribute("aria-selected", String(option.dataset.value === filters[name]));
  }
}

function render() {
  renderPlaceList();
}

function renderPlaceList() {
  const filtered = getFilteredPlaces();
  const visitedCount = places.filter((place) => state.visited.has(place.id)).length;
  els.resultCount.textContent = `${filtered.length} shown · ${visitedCount} visited`;
  els.placeList.replaceChildren();

  if (!filtered.length) {
    els.placeList.innerHTML = `<p class="empty">No places match this filter.</p>`;
    return;
  }

  for (const place of filtered) {
    els.placeList.append(renderPlaceCard(place));
  }
}

function renderPlaceCard(place) {
  const card = els.template.content.firstElementChild.cloneNode(true);
  const isVisited = state.visited.has(place.id);

  card.classList.toggle("visited", isVisited);
  card.querySelector(".meta").textContent = `${place.city} · ${place.category}`;
  card.querySelector("h3").textContent = place.name;

  const badge = card.querySelector(".badge");
  badge.hidden = !isVisited;
  badge.textContent = isVisited ? "visited" : "";
  badge.classList.toggle("visited", isVisited);

  card.title = isVisited ? "Double tap to mark not visited" : "Double tap to mark visited";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-pressed", String(isVisited));
  card.addEventListener("click", (event) => handlePlaceTap(place.id, event));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleVisited(place.id);
    }
  });

  return card;
}

function renderDayIdeas() {
  els.dayPlan.replaceChildren();
  for (const day of dayIdeas) {
    const card = document.createElement("article");
    card.className = "day-card";
    card.innerHTML = `
      <p class="meta">${day.date}</p>
      <h3>${day.title}</h3>
      <ul>${day.items.map((item) => `<li>${item}</li>`).join("")}</ul>
    `;
    els.dayPlan.append(card);
  }
}

function getFilteredPlaces() {
  const query = els.search.value.trim().toLowerCase();
  return places.filter((place) => {
    const haystack = `${place.name} ${place.city} ${place.category} ${place.notes}`.toLowerCase();
    const matchesSearch = !query || haystack.includes(query);
    const matchesCity = filters.city === "all" || place.city === filters.city;
    const matchesCategory = filters.category === "all" || place.category === filters.category;
    const matchesStatus =
      filters.status === "all" ||
      (filters.status === "not_visited" && !state.visited.has(place.id)) ||
      (filters.status === "visited" && state.visited.has(place.id));
    return matchesSearch && matchesCity && matchesCategory && matchesStatus;
  }).sort((a, b) => Number(state.visited.has(a.id)) - Number(state.visited.has(b.id)) || placeOrder.get(a.id) - placeOrder.get(b.id));
}

function toggleVisited(id) {
  if (state.visited.has(id)) {
    state.visited.delete(id);
  } else {
    state.visited.add(id);
  }
  saveState();
  render();
  renderPlaceDetail();
}

function handlePlaceTap(id, event) {
  const now = Date.now();
  if (lastTap.id === id && now - lastTap.time < doubleTapWindowMs) {
    clearTimeout(detailState.openTimer);
    toggleVisited(id);
    resetLastTap();
    return;
  }

  lastTap.id = id;
  lastTap.time = now;
  lastTap.x = event.clientX;
  lastTap.y = event.clientY;
  clearTimeout(detailState.openTimer);
  detailState.openTimer = setTimeout(() => {
    if (lastTap.id === id) {
      openPlaceDetail(id);
      resetLastTap();
    }
  }, singleTapDelayMs);
}

function handleDetailBackdropClick(event) {
  if (isSecondTapOnSameSpot(event)) {
    toggleVisited(lastTap.id);
    resetLastTap();
    closePlaceDetail();
    return;
  }

  resetLastTap();
  closePlaceDetail();
}

function isSecondTapOnSameSpot(event) {
  if (!lastTap.id) return false;
  if (Date.now() - lastTap.time >= doubleTapWindowMs) return false;

  const dx = Math.abs(event.clientX - lastTap.x);
  const dy = Math.abs(event.clientY - lastTap.y);
  return dx < 36 && dy < 36;
}

function resetLastTap() {
  lastTap.id = null;
  lastTap.time = 0;
  lastTap.x = 0;
  lastTap.y = 0;
}

function openPlaceDetail(id) {
  detailState.placeId = id;
  closePlanPanel();
  closeFilterMenus();
  renderPlaceDetail();
  els.detailShell.classList.add("open");
  els.detailShell.setAttribute("aria-hidden", "false");
}

function closePlaceDetail() {
  detailState.placeId = null;
  clearTimeout(detailState.openTimer);
  els.detailShell.classList.remove("open");
  els.detailShell.setAttribute("aria-hidden", "true");
}

function renderPlaceDetail() {
  if (!detailState.placeId) return;

  const place = places.find((item) => item.id === detailState.placeId);
  if (!place) return;

  const isVisited = state.visited.has(place.id);
  els.detailMeta.textContent = `${place.city} · ${place.category}`;
  els.detailTitle.textContent = place.name;
  els.detailHero.textContent = getCategoryIcon(place.category);
  els.detailNotes.textContent = getPlaceDescription(place);
  els.detailPriority.textContent = getGoodFor(place);
  els.detailStatus.textContent = isVisited ? "Visited" : "Not visited";
  els.detailVisited.textContent = isVisited ? "Mark not visited" : "Mark visited";
  els.detailMap.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.name} ${place.city}`)}`;
}

function getPlaceDescription(place) {
  return placeDescriptions[place.id] || place.notes || "Useful stop for this trip; verify timing and route before final scheduling.";
}

function getGoodFor(place) {
  const goodFor = {
    Cafe: "Coffee, snack break, photos",
    Restaurant: "Meal stop",
    Nightlife: "Evening plan",
    Museum: "Indoor culture/history",
    Monument: "Architecture and photos",
    Religious: "Temple/gurdwara/mosque visit",
    Garden: "Relaxed walk",
    Outdoor: "Open-air activity",
    "Photo spot": "Photos",
    Shopping: "Clothes and accessories",
    Market: "Browsing and local atmosphere",
    Experience: "Activity"
  };

  return goodFor[place.category] || "Trip option";
}

function getCategoryIcon(category) {
  const icons = {
    Cafe: "☕",
    Restaurant: "🍽️",
    Nightlife: "🎧",
    Museum: "🖼️",
    Monument: "🏛️",
    Religious: "🛕",
    Garden: "🌿",
    Outdoor: "🌤️",
    "Photo spot": "📸",
    Shopping: "🛍️",
    Market: "🧺",
    Experience: "✨"
  };

  return icons[category] || "📍";
}

function hydrateFromUrl() {
  if (!location.hash.startsWith("#state=")) return;

  try {
    const payload = location.hash.replace("#state=", "");
    const parsed = JSON.parse(decodeURIComponent(atob(payload)));
    state.visited = new Set(parsed.visited || []);
    saveState();
    history.replaceState(null, "", location.pathname);
  } catch {
    console.warn("Ignored invalid shared state.");
  }
}

function unique(values) {
  return [...new Set(values)];
}

function cssEscape(value) {
  return String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
