const categories = [
    { name: "Culture", color: "#e7ab2f" },
    { name: "Education", color: "#2f7f5c" },
    { name: "Business", color: "#f39c12" },
    { name: "Officials", color: "#6d6d6d" },
    { name: "Shopping", color: "#12910f" },
    { name: "Other", color: "#1a2857" }
];


const locale = window.location.pathname.startsWith("/uk/")
    ? "uk"
    : window.location.pathname.startsWith("/hi/")
        ? "hi"
        : "en";

const categoryLabels = {
    en: { All: "All", Culture: "Culture", Education: "Education", Business: "Business", Officials: "Officials", Shopping: "Shopping", Other: "Other" },
    uk: { All: "Усі", Culture: "Культура", Education: "Освіта", Business: "Бізнес", Officials: "Офіційні", Shopping: "Покупки", Other: "Інше" },
    hi: { All: "सभी", Culture: "संस्कृति", Education: "शिक्षा", Business: "बिज़नेस", Officials: "अधिकारी", Shopping: "खरीदारी", Other: "अन्य" }
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
        category: "Other",
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
    },
    {
        title: "Embassy of India in Kyiv",
        category: "Officials",
        address: "Velyka Vasylkivska St, 20, Kyiv",
        description: "Official diplomatic mission and consular support center.",
        website: "https://www.indianembassykyiv.gov.in/",
        phone: "+380 44 279 6047",
        lat: 50.4347,
        lng: 30.5147
    },
    {
        title: "Indian Cultural Centre Kyiv",
        category: "Culture",
        address: "Yaroslaviv Val St, Kyiv",
        description: "Yoga, culture events and India-focused community activities.",
        website: "https://www.instagram.com/bharat_maidan",
        phone: "+380 68 221 6231",
        lat: 50.4548,
        lng: 30.5111
    },
    {
        title: "Kyiv School of Economics – India Desk",
        category: "Education",
        address: "Mykola Shpaka St, 3, Kyiv",
        description: "Academic exchange and policy dialogue initiatives.",
        website: "https://kse.ua/",
        phone: "+380 44 492 8012",
        lat: 50.4511,
        lng: 30.4622
    },
    {
        title: "Lviv India Business Forum",
        category: "Business",
        address: "Rynok Square, Lviv",
        description: "Trade and investment networking platform.",
        website: "https://lvivbusinessforum.com/",
        phone: "+380 32 235 7744",
        lat: 49.8419,
        lng: 24.0315
    },
    {
        title: "Odessa Spice Market",
        category: "Shopping",
        address: "Deribasivska St, Odesa",
        description: "Indian groceries, spices and household products.",
        website: "https://example.com/odessa-spice-market",
        phone: "+380 48 701 1122",
        lat: 46.4846,
        lng: 30.7326
    },
    {
        title: "Kharkiv India Student Support",
        category: "Other",
        address: "Sumska St, Kharkiv",
        description: "Volunteer support point for students in the city.",
        website: "https://example.com/kharkiv-student-support",
        phone: "+380 57 744 0033",
        lat: 49.9935,
        lng: 36.2304
    },
    {
        title: "ISKCON Kyiv Temple",
        category: "Culture",
        address: "Velyka Zhytomyrska St, 9, Kyiv",
        description: "Temple and cultural center with community events.",
        website: "https://iskcon.ua/",
        phone: "+380 44 000 0001",
        lat: 50.4572,
        lng: 30.5170
    },
    {
        title: "Dnipro Education Hub",
        category: "Education",
        address: "Dmytra Yavornytskoho Ave, Dnipro",
        description: "Student advising and exchange preparation support.",
        website: "https://example.com/dnipro-education-hub",
        phone: "+380 56 000 0002",
        lat: 48.4647,
        lng: 35.0462
    },
    {
        title: "Khmelnytskyi Trade Point",
        category: "Business",
        address: "Proskurivska St, Khmelnytskyi",
        description: "Business matchmaking for SME partnerships.",
        website: "https://example.com/khm-trade-point",
        phone: "+380 38 000 0003",
        lat: 49.4229,
        lng: 26.9871
    },
    {
        title: "Honorary Consul Liaison Odesa",
        category: "Officials",
        address: "Prymorskyi Blvd, Odesa",
        description: "Regional liaison point for official cooperation requests.",
        website: "https://example.com/odesa-consul-liaison",
        phone: "+380 48 000 0004",
        lat: 46.4858,
        lng: 30.7438
    },
    {
        title: "Poltava Indian Store",
        category: "Shopping",
        address: "Sobornosti St, Poltava",
        description: "Retail shop with Indian food and essentials.",
        website: "https://example.com/poltava-indian-store",
        phone: "+380 53 000 0005",
        lat: 49.5883,
        lng: 34.5514
    },
    {
        title: "Chernihiv Community Meetup",
        category: "Other",
        address: "Myru Ave, Chernihiv",
        description: "Local meetup and integration support for diaspora families.",
        website: "https://example.com/chernihiv-community-meetup",
        phone: "+380 46 000 0006",
        lat: 51.4982,
        lng: 31.2893
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
