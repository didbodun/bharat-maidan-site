const categories = [
    { name: "Culture", color: "#8e44ad" },
    { name: "Education", color: "#1f77b4" },
    { name: "Business", color: "#f39c12" },
    { name: "Officials", color: "#e74c3c" },
    { name: "Shopping", color: "#27ae60" },
    { name: "Other", color: "#34495e" }
];

const locations = [
    {
        title: "Embassy of India in Kyiv",
        category: "Officials",
        address: "Velyka Vasylkivska St, 20, Kyiv",
        description: "Official diplomatic mission supporting bilateral relations and consular services.",
        website: "https://www.indianembassykyiv.gov.in/",
        phone: "+380 44 279 6047",
        lat: 50.4347,
        lng: 30.5147
    },
    {
        title: "Indian Cultural Centre Kyiv",
        category: "Culture",
        address: "Yaroslaviv Val St, Kyiv",
        description: "Community hub for yoga sessions, cultural evenings and India-focused workshops.",
        website: "https://www.instagram.com/bharat_maidan",
        phone: "+380 68 221 6231",
        lat: 50.4548,
        lng: 30.5111
    },
    {
        title: "Kyiv School of Economics – India Desk",
        category: "Education",
        address: "Mykola Shpaka St, 3, Kyiv",
        description: "Academic exchange support and policy dialogue focused on India–Ukraine cooperation.",
        website: "https://kse.ua/",
        phone: "+380 44 492 8012",
        lat: 50.4511,
        lng: 30.4622
    },
    {
        title: "Lviv India Business Forum",
        category: "Business",
        address: "Rynok Square, Lviv",
        description: "Platform connecting Ukrainian and Indian companies for trade and investment initiatives.",
        website: "https://lvivbusinessforum.com/",
        phone: "+380 32 235 7744",
        lat: 49.8419,
        lng: 24.0315
    },
    {
        title: "Odessa Spice Market",
        category: "Shopping",
        address: "Deribasivska St, Odesa",
        description: "Specialty store with Indian groceries, spices and household essentials.",
        website: "https://example.com/odessa-spice-market",
        phone: "+380 48 701 1122",
        lat: 46.4846,
        lng: 30.7326
    },
    {
        title: "Kharkiv India Student Support",
        category: "Other",
        address: "Sumska St, Kharkiv",
        description: "Volunteer-led support point helping students with adaptation and legal guidance.",
        website: "https://example.com/kharkiv-student-support",
        phone: "+380 57 744 0033",
        lat: 49.9935,
        lng: 36.2304
    }
];

const categoryColorMap = Object.fromEntries(categories.map((category) => [category.name, category.color]));
let activeCategory = "All";
let markersLayer;

const map = L.map("map", {
    center: [50.4501, 30.5234],
    zoom: 6,
    zoomControl: true,
    scrollWheelZoom: true,
    minZoom: 5,
    maxZoom: 10
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
        iconSize: [18, 18],
        iconAnchor: [9, 9],
        popupAnchor: [0, -6]
    });
}

function locationPopup(location) {
    return `
        <div class="map-popup">
            <strong>${location.title}</strong><br />
            <span><b>Category:</b> ${location.category}</span><br />
            <span><b>Address:</b> ${location.address}</span><br />
            <span><b>Description:</b> ${location.description}</span><br />
            <span><b>Website:</b> <a href="${location.website}" target="_blank" rel="noopener noreferrer">Visit site</a></span><br />
            <span><b>Phone:</b> ${location.phone}</span>
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
            .bindPopup(locationPopup(location), { maxWidth: 280 })
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
                    ${category.name}
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
            (location) => `
                <article class="location-card">
                    <h3>🍎 ${location.title}</h3>
                    <span class="location-meta" style="background-color:${categoryColorMap[location.category]};">${location.category}</span>
                    <p><strong>Address:</strong> ${location.address}</p>
                    <p>${location.description}</p>
                    <div class="location-links">
                        <a href="${location.website}" target="_blank" rel="noopener noreferrer">Website link</a>
                        <span><strong>Phone:</strong> ${location.phone}</span>
                    </div>
                </article>
            `
        )
        .join("");

    if (!cards.length) {
        cardsWrap.innerHTML = "<p>No locations available for this category yet.</p>";
    }
}

renderFilters();
renderMarkers();
renderLocationCards();
