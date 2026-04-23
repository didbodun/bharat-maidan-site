const categories = [
    { name: "Restaurants", color: "#d62828" },
    { name: "Officials", color: "#111111" },
    { name: "Education", color: "#2f9e44" },
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
        Education: "Education",
        Shopping: "Shopping",
        Culture: "Culture",
        YogaDance: "Yoga & Dance",
        Other: "Other"
    },
    uk: {
        All: "Усі",
        Restaurants: "Ресторани",
        Officials: "Офіційні",
        Education: "Освіта",
        Shopping: "Покупки",
        Culture: "Культура",
        YogaDance: "Йога та танці",
        Other: "Інше"
    },
    hi: {
        All: "सभी",
        Restaurants: "रेस्तरां",
        Officials: "अधिकारी",
        Education: "शिक्षा",
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
        title: "Hindi & Indian Literature Center",
        titleUk: "Центр гінді та індійської літератури",
        titleHi: "हिंदी और भारतीय साहित्य केंद्र",
        category: "Education",
        address: "Tarasa Shevchenka Blvd, 14, Kyiv",
        addressUk: "бульвар Тараса Шевченка, 14, Київ",
        addressHi: "तारास शेवचेंको बुलेवार्ड, 14, कीव",
        description: "A key academic space for exploring Hindi language and Indian literary traditions in Ukraine.",
        descriptionUk: "Ключовий академічний простір для вивчення мови гінді та індійських літературних традицій в Україні.",
        descriptionHi: "यूक्रेन में हिंदी भाषा और भारतीय साहित्यिक परंपराओं के अध्ययन के लिए एक प्रमुख अकादमिक स्थान।",
        website: "https://maps.app.goo.gl/amGz6f6cLSytmbis5",
        phone: "+380 44 239 3302",
        lat: 50.4416,
        lng: 30.5092,
        emoji: "📚",
        featured: true
    },
    {
        title: "Embassy of India in Ukraine",
        titleUk: "Посольство Індії в Україні",
        titleHi: "यूक्रेन में भारत का दूतावास",
        category: "Officials",
        address: "Maksyma Berlynskoho St, 20-B, Kyiv, 01901",
        addressUk: "вулиця Максима Берлинського, 20-Б, Київ, 01901",
        addressHi: "माक्सिमा बेरलिन्स्कोहा स्ट्रीट, 20-B, कीव, 01901",
        description: "The official Embassy of India in Ukraine, supporting diplomatic relations, visas, and consular services.",
        descriptionUk: "Офіційне Посольство Індії в Україні, яке підтримує дипломатичні відносини, візові та консульські послуги.",
        descriptionHi: "यूक्रेन में भारत का आधिकारिक दूतावास, जो कूटनीतिक संबंधों, वीज़ा और कांसुलर सेवाओं का समर्थन करता है।",
        website: "https://maps.app.goo.gl/pJ2XPL2CZJXvW6jJ",
        phone: "+380 44 468 6661",
        lat: 50.4730,
        lng: 30.4632,
        emoji: "🏛️",
        featured: true
    },
    {
        title: "MAHARANI THE QUEEN",
        titleUk: "MAHARANI THE QUEEN",
        titleHi: "महारानी क्वीन",
        category: "Culture",
        address: "Mercure Congress Kyiv, Vadima Hetmana St, 6, Kyiv, Ukraine",
        addressUk: "Mercure Congress, Київ, вулиця Вадима Гетьмана, 6, Київ, Україна",
        addressHi: "Mercure Congress Kyiv, वादीमा हेतमाना स्ट्रीट, 6, कीव, यूक्रेन",
        description: "The first grand Indian beauty and dance pageant in history, taking place in Kyiv on June 6–7, 2026. “Maharani” is an international premium platform celebrating confidence, individuality, and talent.",
        descriptionUk: "Перший в історії грандіозний індійський конкурс краси та танцю, який відбудеться в Києві 6 та 7 червня 2026. Конкурс краси та танцю «Махарані» - це міжнародна преміальна платформа, що відзначає впевненість, індивідуальність та талант.",
        descriptionHi: "इतिहास का पहला भव्य भारतीय ब्यूटी और डांस पेजेंट, जो 6–7 जून 2026 को कीव में आयोजित होगा। “महारानी” एक अंतरराष्ट्रीय प्रीमियम मंच है, जो आत्मविश्वास, व्यक्तित्व और प्रतिभा का उत्सव मनाता है।",
        website: "https://www.instagram.com/maharanibeautypageant?igsh=MTJmbTg1aTFzZ2llcg%3D%3D",
        linkLabel: "Instagram",
        linkLabelUk: "Instagram",
        linkLabelHi: "Instagram",
        phone: "—",
        lat: 50.4503,
        lng: 30.4466,
        emoji: "👑",
        featured: true
    },
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
        lng: 30.5162,
        emoji: "🍎"
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
    const cards = locations.filter((location) => location.featured).slice(0, 3);

    cardsWrap.innerHTML = cards
        .map(
            (location) => {
                const title = localizedLocationField(location, "title");
                const address = localizedLocationField(location, "address");
                const description = localizedLocationField(location, "description");
                const emoji = location.emoji || "📍";
                const linkLabel = localizedLocationField(location, "linkLabel") || uiLabels[locale].website;

                return `
                <article class="location-card">
                    <h3>${emoji} ${title}</h3>
                    <span class="location-meta" style="background-color:${categoryColorMap[location.category]};">${categoryLabels[locale][location.category] || location.category}</span>
                    <p><strong>${uiLabels[locale].address}:</strong> ${address}</p>
                    <p>${description}</p>
                    <div class="location-links">
                        <a href="${location.website}" target="_blank" rel="noopener noreferrer">${linkLabel}</a>
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
