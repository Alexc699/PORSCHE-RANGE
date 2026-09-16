const models = [
  {
    id: "taycan",
    label: "Taycan",
    category: "Electric sports car",
    title: "Taycan Turbo S",
    description:
      "Pure electric performance, delivered with the everyday practicality of a four-door sports car.",
    detailTitle: "Electrified, not diluted.",
    detailCopy:
      "The Taycan brings instantaneous response and long-distance usability into a distinctly Porsche driving experience.",
    image:
      "https://images.unsplash.com/photo-1772772876593-9d54e5f05a5b?auto=format&fit=crop&fm=jpg&q=85&w=2400",
    imageAlt: "Porsche Taycan parked outdoors",
    photoUrl:
      "https://unsplash.com/photos/a-dark-gray-porsche-taycan-parked-outdoors-under-palm-trees-e_Dz3B9khXs",
    photoCredit: "Photo: timou turner via Unsplash",
    stats: {
      power: "952 PS",
      acceleration: "2.4 s",
      speed: "260 km/h",
      engine: "Electric",
    },
    specs: [
      ["Drive", "All-wheel drive"],
      ["Battery", "Performance Battery Plus"],
      ["Range", "Up to 630 km WLTP"],
      ["Charging", "800-volt architecture"],
    ],
  },
  {
    id: "992",
    label: "911 (992)",
    category: "Everyday sports car",
    title: "911 Carrera (992)",
    description:
      "The timeless rear-engined icon, evolved for speed, comfort and daily use.",
    detailTitle: "The original benchmark.",
    detailCopy:
      "A balanced blend of rear-engined traction, precision and the unmistakable silhouette that defines the 911.",
    image:
      "https://images.unsplash.com/photo-1715733966749-6af454716d83?auto=format&fit=crop&fm=jpg&q=85&w=2400",
    imageAlt: "Porsche 911 992 parked beside a road",
    photoUrl:
      "https://unsplash.com/photos/a-black-sports-car-parked-on-the-side-of-the-road-ZfHYUpILwJk",
    photoCredit: "Photo: Franco Debartolo via Unsplash",
    stats: {
      power: "394 PS",
      acceleration: "4.1 s",
      speed: "294 km/h",
      engine: "3.0 L",
    },
    specs: [
      ["Engine", "Twin-turbo flat-six"],
      ["Drive", "Rear-wheel drive"],
      ["Transmission", "8-speed PDK"],
      ["Seats", "2 + 2"],
    ],
  },
  {
    id: "panamera",
    label: "Panamera",
    category: "Performance saloon",
    title: "Panamera 4 E-Hybrid",
    description:
      "Four-door comfort with a plug-in hybrid powertrain and genuine grand-touring pace.",
    detailTitle: "Performance, expanded.",
    detailCopy:
      "The Panamera combines a spacious cabin, electric capability and the long-distance confidence of a performance saloon.",
    image:
      "https://images.unsplash.com/photo-1570394267724-8e1fb5c4e6c6?auto=format&fit=crop&fm=jpg&q=85&w=2400",
    imageAlt: "Porsche Panamera 4 photographed in Madrid",
    photoUrl:
      "https://unsplash.com/photos/maroon-porsche-panamera-4-N-QE7CIF5Ec",
    photoCredit: "Photo: Javier Esteban via Unsplash",
    stats: {
      power: "470 PS",
      acceleration: "4.1 s",
      speed: "280 km/h",
      engine: "Hybrid",
    },
    specs: [
      ["Engine", "V6 with electric motor"],
      ["Drive", "All-wheel drive"],
      ["Transmission", "8-speed PDK"],
      ["Body", "Four-door saloon"],
    ],
  },
  {
    id: "718",
    label: "718",
    category: "Mid-engined sports car",
    title: "718 Cayman GT4 RS",
    description:
      "A focused mid-engined car shaped by motorsport and built for the circuit.",
    detailTitle: "Mid-engine, maximum focus.",
    detailCopy:
      "Light, agile and direct: the Cayman GT4 RS puts the driver at the centre of a chassis tuned for track precision.",
    image:
      "https://images.unsplash.com/photo-1777965877876-160c0ca48be2?auto=format&fit=crop&fm=jpg&q=85&w=2400",
    imageAlt: "Porsche 718 Cayman GT4 RS on a race track",
    photoUrl:
      "https://unsplash.com/photos/red-sports-car-and-driver-on-a-race-track-7pdxNyk4h4M",
    photoCredit: "Photo: Roman via Unsplash",
    stats: {
      power: "500 PS",
      acceleration: "3.4 s",
      speed: "315 km/h",
      engine: "4.0 L",
    },
    specs: [
      ["Engine", "Naturally aspirated flat-six"],
      ["Drive", "Rear-wheel drive"],
      ["Transmission", "7-speed PDK"],
      ["Layout", "Mid-engine"],
    ],
  },
  {
    id: "911-gt3",
    label: "911 GT3",
    category: "Track-bred sports car",
    title: "911 GT3",
    description:
      "A high-revving, naturally aspirated 911 engineered for drivers who live for the apex.",
    detailTitle: "Built for the apex.",
    detailCopy:
      "Motorsport-derived aerodynamics, a naturally aspirated engine and uncompromising feedback define the 911 GT3.",
    image:
      "https://images.unsplash.com/photo-1716738662381-a249fc0e9cb3?auto=format&fit=crop&fm=jpg&q=85&w=2400",
    imageAlt: "Porsche 911 GT3 driving on a race track",
    photoUrl:
      "https://unsplash.com/photos/a-black-sports-car-driving-down-a-race-track-V2Gs2mZzK5c",
    photoCredit: "Photo: Nejc Soklič via Unsplash",
    stats: {
      power: "510 PS",
      acceleration: "3.4 s",
      speed: "320 km/h",
      engine: "4.0 L",
    },
    specs: [
      ["Engine", "Naturally aspirated flat-six"],
      ["Drive", "Rear-wheel drive"],
      ["Transmission", "7-speed PDK"],
      ["Top speed", "320 km/h"],
    ],
  },
];
const el = {
  tabs: document.querySelector("#model-tabs"),
  image: document.querySelector("#hero-image"),
  category: document.querySelector("#model-category"),
  name: document.querySelector("#model-name"),
  description: document.querySelector("#model-description"),
  detailTitle: document.querySelector("#detail-title"),
  detailCopy: document.querySelector("#detail-copy"),
  specs: document.querySelector("#spec-list"),
  credit: document.querySelector("#photo-credit"),
  stats: {
    power: document.querySelector("#power-value"),
    acceleration: document.querySelector("#acceleration-value"),
    speed: document.querySelector("#speed-value"),
    engine: document.querySelector("#engine-value"),
  },
};
function renderTabs() {
  el.tabs.innerHTML = models
    .map(
      (m, i) =>
        `<button class="model-tab" role="tab" aria-selected="${i === 0}" data-model="${m.id}"><span class="model-tab__number">0${i + 1}</span><span class="model-tab__name">${m.label}</span></button>`,
    )
    .join("");
}
function renderModel(m) {
  el.image.src = m.image;
  el.image.alt = m.imageAlt;
  el.category.textContent = m.category;
  el.name.textContent = m.title;
  el.description.textContent = m.description;
  el.detailTitle.textContent = m.detailTitle;
  el.detailCopy.textContent = m.detailCopy;
  el.credit.href = m.photoUrl;
  el.credit.textContent = m.photoCredit;
  Object.entries(m.stats).forEach(
    ([key, value]) => (el.stats[key].textContent = value),
  );
  el.specs.innerHTML = m.specs
    .map(
      ([term, definition]) =>
        `<div class="spec-row"><dt>${term}</dt><dd>${definition}</dd></div>`,
    )
    .join("");
  document
    .querySelectorAll(".model-tab")
    .forEach((tab) =>
      tab.setAttribute("aria-selected", String(tab.dataset.model === m.id)),
    );
}
renderTabs();
renderModel(models[0]);
el.tabs.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-model]");
  const model = tab && models.find((item) => item.id === tab.dataset.model);
  if (model) renderModel(model);
});

