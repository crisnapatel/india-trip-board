const wikiOverrides = {
  "purana-qila": {
    intro:
      "Purana Qila, or the Old Fort, is one of Delhi's most atmospheric fort complexes. It is linked with the Mughal emperor Humayun and Sher Shah Suri, and works well as a short history stop because the gates, walls, lake, and open grounds are easy to appreciate without needing a full-day plan.",
    context: [
      "The site is commonly associated with the 16th-century power struggle between Humayun and Sher Shah Suri.",
      "The fort has three major surviving gates: Bara Darwaza, or Big Gate; Humayun Darwaza; and Talaqi Darwaza, often read as the Forbidden Gate.",
      "Its walls rise to roughly 18 metres in places, so the site reads first as a fortified enclosure, then as a set of monuments."
    ],
    notice: [
      "Look at the heavy fort walls first; they explain the site as a defensive enclosure, not only a palace-like monument.",
      "Notice how each gate frames the fort differently: entry, procession, and controlled access.",
      "Inside, keep an eye out for Qila-i-Kuhna Mosque and Sher Mandal; they help connect the fort to Sher Shah Suri and Humayun."
    ],
    try: [
      "Walk from the main gate slowly and look back at the scale of the entrance.",
      "Pair it with National Zoological Park or the lake boating rather than treating it as a separate long commute.",
      "Use it as a 30-60 minute history stop if the day is already packed."
    ]
  },
  "red-fort": {
    intro:
      "Red Fort is Delhi's major Mughal imperial fort, known for its red sandstone walls, ceremonial scale, and association with Shah Jahan's capital, Shahjahanabad.",
    context: [
      "It represents the Mughal idea of a fortified imperial city rather than a single standalone building.",
      "The fort's public memory is also modern: India's Independence Day address is delivered from its ramparts.",
      "The surrounding Old Delhi area can make the visit feel dense, noisy, and historically layered."
    ],
    notice: [
      "Start by looking at the wall scale before going inside.",
      "Compare public ceremonial spaces with more private palace-like areas.",
      "If energy is low, the outside plus Old Delhi lanes may be enough for the day."
    ],
    try: ["Keep the visit route short.", "Combine with Chandni Chowk only if the group has energy.", "Use comfortable shoes; distances inside feel longer than expected."]
  },
  "qutub-minar": {
    intro:
      "Qutub Minar is Delhi's most recognizable minaret and the anchor of an early Indo-Islamic monument complex. It is best appreciated as a cluster, not just as one tower.",
    context: [
      "The complex shows early Sultanate architecture, reused materials, inscriptions, and changing construction styles.",
      "The tower's height makes it visually dominant, but the surrounding ruins carry much of the historical texture.",
      "It sits far south compared with Old Delhi, so routing matters."
    ],
    notice: [
      "Look at the changing bands and carving styles on the tower.",
      "Spend time around the mosque remains and iron pillar area.",
      "Use the lawns for photos, but avoid making it only a photo stop."
    ],
    try: ["Go when light is softer if possible.", "Keep it as a south Delhi block.", "Pair with Mehrauli-side food or another nearby south Delhi stop."]
  },
  "humayun-tomb": {
    intro:
      "Humayun's Tomb is a Mughal garden tomb and one of Delhi's most elegant monument stops. It is useful for understanding the architectural language that later culminates in the Taj Mahal.",
    context: [
      "The tomb sits inside a formal charbagh-style garden layout.",
      "Its red sandstone, white marble, high platform, and symmetry create a calm, ordered monument experience.",
      "The wider complex includes smaller tombs and garden structures worth noticing."
    ],
    notice: [
      "Approach slowly through the garden axis to feel the symmetry.",
      "Look at the platform height and how it changes the view of the monument.",
      "Notice smaller tombs around the main structure instead of rushing only to the central dome."
    ],
    try: ["Good for photos and a slower walk.", "Pair with Lodhi Garden or Nizamuddin side.", "Avoid peak heat if possible."]
  },
  "lodhi-garden": {
    intro:
      "Lodhi Garden is a relaxed park where Delhi's everyday life and medieval tomb architecture sit together. It is a strong fallback when the day needs less friction.",
    context: [
      "The park contains tombs and structures from the Sayyid and Lodhi periods.",
      "It is also a normal city park, so the mood is softer than a ticketed monument.",
      "The area pairs well with Lodhi Art District and cafes."
    ],
    notice: [
      "Look at how tombs are integrated into daily walking routes.",
      "Notice the domes, arches, and garden framing rather than treating it as only a park.",
      "Use shaded paths and water bodies for breaks."
    ],
    try: ["Slow walk.", "Photos around tombs and trees.", "Pair with Cafe De Flora or Lodhi Art District."]
  },
  "amber-palace": {
    intro:
      "Amber Palace is Jaipur's major palace-fort experience, known for courtyards, hill views, mirrored interiors, gateways, and layered Rajput-Mughal court architecture.",
    context: [
      "The complex is large; it rewards a planned route more than random wandering.",
      "Sheesh Mahal is inside this palace complex, so it does not need to be planned as a separate distant stop.",
      "Amber side can also combine with Panna Meena ka Kund, Jaigarh Fort, and Anokhi Museum."
    ],
    notice: [
      "Move courtyard by courtyard; each space has a different public/private function.",
      "Notice mirror work, painted surfaces, jali screens, and hill positioning.",
      "Look outward from the fort to understand why the location mattered."
    ],
    try: ["Start early.", "Keep water handy.", "Use this as the anchor stop for the Amber cluster."]
  },
  "hawa-mahal": {
    intro:
      "Hawa Mahal is Jaipur's famous five-storey facade, built as a screen-like structure that allowed royal women to observe city life while remaining unseen.",
    context: [
      "Its value is mostly architectural and visual: the honeycomb facade, small windows, and street-facing urban setting.",
      "It works best as a short photo/history stop, not a long standalone visit.",
      "The surrounding old city traffic can be intense."
    ],
    notice: [
      "Look at the repeated jharokha windows and how the facade catches light.",
      "Step across the road carefully for the classic full-front view.",
      "Notice how narrow and vertical the building feels compared with palace complexes."
    ],
    try: ["Early morning photos.", "Short stop before/after City Palace area.", "Nearby cafe viewpoint if available and not too crowded."]
  },
  "anokhi-museum": {
    intro:
      "Anokhi Museum is a small, focused stop about hand block printing. It is especially useful if the group cares about textiles, craft, design, or how printed Indian fabrics are actually made.",
    context: [
      "The museum helps connect Jaipur shopping with the craft process behind block-printed textiles.",
      "It is smaller and calmer than the major forts.",
      "It pairs naturally with the Amber area."
    ],
    notice: [
      "Look for blocks, dyes, pattern repeats, and fabric examples.",
      "Notice the difference between handmade irregularity and factory-perfect prints.",
      "Use it to make later textile shopping more meaningful."
    ],
    try: ["Short craft-focused visit.", "Ask about demonstrations if available.", "Use as a calm break after Amber-side monuments."]
  }
};

const categoryWiki = {
  Cafe: {
    tryTitle: "What to order / use it for",
    context: ["Best treated as a rest stop, conversation space, and photo-friendly pause.", "Use the cafe to reduce fatigue between heavier sightseeing blocks."],
    notice: ["Ambience, seating comfort, crowd level, and whether it lets the group slow down.", "Whether the location fits the route without forcing a long detour."],
    try: ["Coffee or mocktails.", "One shareable snack or dessert.", "Use it as a reset point rather than overloading the day."]
  },
  Restaurant: {
    tryTitle: "What to try",
    context: ["Best used as an anchor meal, not a quick snack stop.", "Choose based on route, cuisine mood, and how tired the group is."],
    notice: ["Crowd, waiting time, portion size, and whether the menu suits everyone.", "Whether it is better for lunch or dinner."],
    try: ["Order one safe main dish plus one local/special dish.", "Keep a backup nearby if booking is uncertain.", "Avoid very heavy food before long outdoor walks."]
  },
  Nightlife: {
    tryTitle: "How to decide",
    context: ["Nightlife places change by event, crowd, music, and entry rules.", "Current event and reservation status matter more than old recommendations."],
    notice: ["Music style, entry policy, closing time, and crowd comfort.", "Distance from the hotel for the return journey."],
    try: ["Check Instagram/Google before going.", "Prefer a place with clear entry rules.", "Keep the return transport plan simple."]
  },
  Museum: {
    tryTitle: "How to visit",
    context: ["Good when weather is difficult or the day needs a quieter indoor block.", "A focused 45-90 minute visit is usually better than trying to see everything."],
    notice: ["Pick one theme: history, art, craft, Gandhi, textiles, or architecture.", "Read fewer labels carefully rather than skimming every room."],
    try: ["Choose 3-5 objects or rooms to remember.", "Use it as an indoor recovery slot.", "Check closure day and last entry."]
  },
  Monument: {
    tryTitle: "Things to do / see",
    context: ["The useful question is: what function did this place serve, and who moved through it?", "Architecture becomes easier to read when you notice gates, axes, walls, courtyards, and view lines."],
    notice: ["Entry sequence and gate design.", "Materials, carving, symmetry, and how public/private spaces are separated.", "Views from high points or across gardens/water."],
    try: ["Walk slowly at the entrance.", "Take one wide photo and one detail photo.", "Read the site as a sequence, not a checklist."]
  },
  Religious: {
    tryTitle: "How to visit respectfully",
    context: ["Best appreciated through atmosphere, ritual, music, food, architecture, and how people use the space.", "Dress and photography rules matter."],
    notice: ["Shoes/head covering rules, queues, prayer spaces, and whether photography is appropriate.", "Sounds, offerings, community service, and movement patterns."],
    try: ["Dress modestly.", "Pause quietly instead of only taking photos.", "Ask before photographing people or rituals."]
  },
  Garden: {
    tryTitle: "Things to do",
    context: ["Best for a low-pressure walk, shade, photos, and conversation.", "Useful when the itinerary is getting too monument-heavy."],
    notice: ["Shade, paths, old structures, water, birds, and quiet corners.", "How locals use the place."],
    try: ["Walk without rushing.", "Use it as a reset block.", "Pair with a nearby cafe."]
  },
  Outdoor: {
    tryTitle: "Things to check",
    context: ["Outdoor stops depend strongly on heat, rain, and same-day operation.", "They work best as flexible add-ons rather than rigid anchors."],
    notice: ["Shade, water availability, queues, and walking distance.", "Whether the activity is actually running that day."],
    try: ["Check weather first.", "Carry water.", "Keep a fallback indoor place nearby."]
  },
  "Photo spot": {
    tryTitle: "Photo plan",
    context: ["Best used as a short visual stop.", "Light, crowd, and route fit matter more than long duration."],
    notice: ["Symmetry, colors, backgrounds, and safe standing points.", "Whether the stop is worth its travel time."],
    try: ["Take a wide shot, a portrait, and one detail shot.", "Go early if possible.", "Do not over-allocate time."]
  },
  Shopping: {
    tryTitle: "What to look for",
    context: ["Best handled with a budget and a target: outfit, accessories, gifts, or browsing.", "Indian wear shopping gets easier when fabric, fit, alteration time, and comfort are checked early."],
    notice: ["Fabric feel, stitching, return policy, alteration availability, and whether the price matches quality.", "Crowd level and bargaining style."],
    try: ["Set a budget first.", "Photograph shortlisted outfits.", "Check walking comfort and weather suitability."]
  },
  Market: {
    tryTitle: "How to use it",
    context: ["Markets are best for atmosphere, browsing, food, flowers, books, jewellery, textiles, or small gifts.", "They can be tiring, so a tight micro-route helps."],
    notice: ["Lane layout, crowd flow, shop clusters, and where the good photo/food moments are.", "Pickpocket and traffic awareness."],
    try: ["Go with a clear target.", "Carry less.", "Keep bargaining friendly and simple."]
  },
  Experience: {
    tryTitle: "How to decide",
    context: ["Experience items need more current verification than monuments because vendors, slots, and quality change quickly.", "Book only when timing and comfort level are clear."],
    notice: ["Reviews, safety, cancellation rules, and exact inclusions.", "Whether the activity fits the group's energy that day."],
    try: ["Confirm price and duration.", "Keep a backup.", "Avoid over-scheduling around it."]
  }
};

renderWikiPage();

function renderWikiPage() {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const place = places.find((item) => item.id === id);

  if (!place) {
    renderMissingPage();
    return;
  }

  const override = wikiOverrides[place.id] || {};
  const category = categoryWiki[place.category] || categoryWiki.Experience;

  document.title = `${place.name} · Place wiki`;
  setText("#wikiMeta", `${place.city} · ${place.category}`);
  setText("#wikiTitle", place.name);
  setText("#wikiIcon", getCategoryIcon(place.category));
  setText("#wikiIntro", override.intro || placeDescriptions[place.id] || place.notes);
  setText("#wikiTryTitle", category.tryTitle || "Things to do / try");
  setText("#wikiPlanning", buildPlanningNote(place));

  document.querySelector("#wikiMap").href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.name} ${place.city}`)}`;

  renderList("#wikiContext", override.context || category.context);
  renderList("#wikiNotice", override.notice || category.notice);
  renderList("#wikiTry", override.try || category.try);
}

function renderMissingPage() {
  document.title = "Place not found";
  document.querySelector("#wikiMap").hidden = true;
  setText("#wikiMeta", "Missing page");
  setText("#wikiTitle", "Place not found");
  setText("#wikiIcon", "📍");
  setText("#wikiIntro", "This wiki page does not match a place in the current trip list.");
  setText("#wikiTryTitle", "What to do");
  setText("#wikiPlanning", "Go back to the place list and open the wiki icon from a place card.");
  renderList("#wikiContext", ["The link may be old, mistyped, or from a removed place."]);
  renderList("#wikiNotice", ["Use the Back link to return to the current list."]);
  renderList("#wikiTry", ["Open a place card's ⓘ icon again."]);
}

function buildPlanningNote(place) {
  const routeNote = place.notes || "Useful stop for this trip.";
  return `${routeNote} Verify current opening hours, closure day, tickets, and weather before final scheduling.`;
}

function renderList(selector, items) {
  const list = document.querySelector(selector);
  list.replaceChildren();
  for (const item of items) {
    const li = document.createElement("li");
    li.textContent = item;
    list.append(li);
  }
}

function setText(selector, text) {
  document.querySelector(selector).textContent = text;
}
