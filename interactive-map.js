const categories = [
    { name: "Restaurants", color: "#d62828" },
    { name: "Officials", color: "#111111" },
    { name: "Shopping", color: "#1f8f47" },
    { name: "Culture", color: "#ff9933" },
    { name: "YogaDance", color: "#2f9e44" },
    { name: "Other", color: "#7a7a7a" }
];


const locale = window.location.pathname.startsWith("/uk/")
    ? "uk"
    : window.location.pathname.startsWith("/hi/")
        ? "hi"
        : "en";

const categoryLabels = {
    en: {
        All: "All",
        Restaurants: "Restaurants",
        Officials: "Officials",
        Shopping: "Shopping",
        Culture: "Culture",
        YogaDance: "Yoga & Dance",
        Other: "Other"
    },
    uk: {
        All: "Усі",
        Restaurants: "Ресторани",
        Officials: "Офіційні",
        Shopping: "Покупки",
        Culture: "Культура",
        YogaDance: "Йога та танці",
        Other: "Інше"
    },
    hi: {
        All: "सभी",
        Restaurants: "रेस्तरां",
        Officials: "अधिकारी",
        Shopping: "खरीदारी",
        Culture: "संस्कृति",
        YogaDance: "योग और नृत्य",
        Other: "अन्य"
    }
};

const uiLabels = {
    en: { address: "Address", website: "Website link", phone: "Phone", noLocations: "No locations available for this category yet." },
    uk: { address: "Адреса", website: "Посилання", phone: "Телефон", noLocations: "Для цієї категорії поки немає локацій." },
    hi: { address: "पता", website: "वेबसाइट", phone: "फ़ोन", noLocations: "इस श्रेणी के लिए अभी कोई स्थान उपलब्ध नहीं है।" }
};

const locations = [
    {
        title: "Himalaya Restaurant",
        titleUk: "Ресторан «Гімалаї»",
        titleHi: "हिमालय रेस्टोरेंट",
        category: "Restaurants",
        address: "Velyka Vasylkivska St, 80, Kyiv, 03150",
        addressUk: "вулиця Велика Васильківська, 80, Київ, 03150",
        addressHi: "वेलिका वासिल्किव्स्का स्ट्रीट, 80, कीव, 03150",
        description: "Indian cuisine restaurant in central Kyiv.",
        descriptionUk: "Ресторан індійської кухні в центрі Києва.",
        descriptionHi: "केंद्रिय कीव में भारतीय भोजन का रेस्टोरेंट।",
        website: "https://maps.app.goo.gl/evYe9dRk2WshTLZAA",
        phone: "+380 73 466 6707",
        lat: 50.4269,
        lng: 30.5162
    }
];

function localizedLocationField(location, field) {
    if (locale === "uk" && location[`${field}Uk`]) return location[`${field}Uk`];
    if (locale === "hi" && location[`${field}Hi`]) return location[`${field}Hi`];
    return location[field];
}

const categoryColorMap = Object.fromEntries(categories.map((category) => [category.name, category.color]));
let activeCategory = "All";
let markersLayer;

const map = L.map("map", {
    center: [50.4501, 30.5234],
    zoom: 6,
    zoomControl: true,
    scrollWheelZoom: true,
    minZoom: 5,
    maxZoom: 15
});

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    subdomains: "abcd",
    maxZoom: 20,
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
}).addTo(map);

function getMarkerIcon(color) {
    return L.divIcon({
        className: "",
        html: `<span class="map-marker" style="background-color:${color};"></span>`,
        iconSize: [34, 34],
        iconAnchor: [17, 17],
        popupAnchor: [0, -14]
    });
}

function locationPopup(location) {
    const title = localizedLocationField(location, "title");
    const address = localizedLocationField(location, "address");
    const description = localizedLocationField(location, "description");

    return `
        <div class="map-popup">
            <a class="map-place-link" href="${location.website}" target="_blank" rel="noopener noreferrer">${title}</a><br />
            <span class="map-popup-category">${categoryLabels[locale][location.category] || location.category}</span><br />
            <span><strong>${uiLabels[locale].address}:</strong> ${address}</span><br />
            <span>${description}</span>
        </div>
    `;
}

function filteredLocations() {
    return activeCategory === "All"
        ? locations
        : locations.filter((location) => location.category === activeCategory);
}

function renderMarkers() {
    if (markersLayer) {
        markersLayer.remove();
    }

    markersLayer = L.layerGroup();

    filteredLocations().forEach((location) => {
        L.marker([location.lat, location.lng], {
            icon: getMarkerIcon(categoryColorMap[location.category] || "#555")
        })
            .bindPopup(locationPopup(location), { maxWidth: 320 })
            .addTo(markersLayer);
    });

    markersLayer.addTo(map);
}

function renderFilters() {
    const filterWrap = document.getElementById("categoryFilters");
    const withAll = [{ name: "All" }, ...categories];

    filterWrap.innerHTML = withAll
        .map(
            (category) =>
                `<button class="category-chip ${category.name === activeCategory ? "active" : ""}" data-category="${category.name}">
                    ${categoryLabels[locale][category.name] || category.name}
                </button>`
        )
        .join("");

    filterWrap.querySelectorAll(".category-chip").forEach((button) => {
        button.addEventListener("click", () => {
            activeCategory = button.dataset.category;
            renderFilters();
            renderMarkers();
            renderLocationCards();
        });
    });
}

function renderLocationCards() {
    const cardsWrap = document.getElementById("locationCards");
    const cards = filteredLocations().slice(0, 6);

    cardsWrap.innerHTML = cards
        .map(
            (location) => {
                const title = localizedLocationField(location, "title");
                const address = localizedLocationField(location, "address");
                const description = localizedLocationField(location, "description");

                return `
                <article class="location-card">
                    <h3>🍎 ${title}</h3>
                    <span class="location-meta" style="background-color:${categoryColorMap[location.category]};">${categoryLabels[locale][location.category] || location.category}</span>
                    <p><strong>${uiLabels[locale].address}:</strong> ${address}</p>
                    <p>${description}</p>
                    <div class="location-links">
                        <a href="${location.website}" target="_blank" rel="noopener noreferrer">${uiLabels[locale].website}</a>
                        <span><strong>${uiLabels[locale].phone}:</strong> ${location.phone}</span>
                    </div>
                </article>
            `;
            }
        )
        .join("");

    if (!cards.length) {
        cardsWrap.innerHTML = `<p>${uiLabels[locale].noLocations}</p>`;
    }
}

renderFilters();
renderMarkers();
renderLocationCards();
