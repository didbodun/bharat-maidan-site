const categories = [
    { name: "Restaurants", color: "#d62828" },
    { name: "Officials", color: "#111111" },
    { name: "Education", color: "#c28b00" },
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
        lat: 50.4436551,
        lng: 30.5122916,
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
        lat: 50.4782489,
        lng: 30.4427339,
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
        title: "Mahatma Gandhi Monument",
        titleUk: "Пам’ятник Махатмі Ганді",
        titleHi: "महात्मा गांधी स्मारक",
        category: "Culture",
        address: "Fomin Botanical Garden, Kyiv, 02000",
        addressUk: "Ботанічний сад ім. акад. О. В. Фоміна, Київ, 02000",
        addressHi: "फोमिन बॉटनिकल गार्डन, कीव, 02000",
        description: "A monument honoring Mahatma Gandhi in Kyiv's Fomin Botanical Garden.",
        descriptionUk: "Пам’ятник Махатмі Ганді в Ботанічному саду ім. акад. О. В. Фоміна у Києві.",
        descriptionHi: "कीव के फोमिन बॉटनिकल गार्डन में महात्मा गांधी को समर्पित स्मारक।",
        website: "https://maps.app.goo.gl/imMNfmYcB5MjcwRM9",
        phone: "—",
        lat: 50.4435248,
        lng: 30.5056071,
        emoji: "🕊️"
    },
    {
        title: "India House",
        titleUk: "India House",
        titleHi: "इंडिया हाउस",
        category: "Culture",
        address: "Yaroslaviv Val St, 3, Kyiv, 02000",
        addressUk: "вулиця Ярославів Вал, 3, Київ, 02000",
        addressHi: "यारोस्लाविव वाल स्ट्रीट, 3, कीव, 02000",
        description: "India House cultural destination in Kyiv.",
        descriptionUk: "Культурна локація India House у Києві.",
        descriptionHi: "कीव में इंडिया हाउस सांस्कृतिक स्थान।",
        website: "https://maps.app.goo.gl/KAWqeJnNWn4X4MUu7",
        phone: "—",
        lat: 50.449341,
        lng: 30.5117709,
        emoji: "🏠"
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
        lat: 50.430887,
        lng: 30.5156916,
        emoji: "🍎"
    },
    {
        title: "Slon Bar",
        titleUk: "Слон Бар",
        titleHi: "स्लोन बार",
        category: "Restaurants",
        address: "Brativ Rohatyntsiv St, 27, Lviv, Lviv Oblast, 79000",
        addressUk: "вулиця Братів Рогатинців, 27, Львів, Львівська область, 79000",
        addressHi: "ब्रातिव रोहातिन्त्सिव स्ट्रीट, 27, ल्वीव, 79000",
        description: "Restaurant and bar in central Lviv.",
        descriptionUk: "Ресторан і бар у центрі Львова.",
        descriptionHi: "ल्वीव के केंद्र में स्थित रेस्टोरेंट और बार।",
        website: "https://www.instagram.com/slon.lviv/",
        phone: "—",
        lat: 49.8397,
        lng: 24.0325,
        emoji: "🍽️"
    },
    {
        title: "Lotus - Indian Cuisine",
        titleUk: "Lotus - індійська кухня",
        titleHi: "लोटस - भारतीय व्यंजन",
        category: "Restaurants",
        address: "Pekarska St, 35, Lviv, Lviv Oblast, 79000",
        addressUk: "вулиця Пекарська, 35, Львів, Львівська область, 79000",
        addressHi: "पेकार्स्का स्ट्रीट, 35, ल्वीव, 79000",
        description: "Indian restaurant in Lviv.",
        descriptionUk: "Ресторан індійської кухні у Львові.",
        descriptionHi: "ल्वीव में भारतीय भोजन का रेस्टोरेंट।",
        website: "https://instagram.com/lotus_indianrestaurant?igshid=ZDdkNTZiNTM=",
        phone: "—",
        lat: 49.8334,
        lng: 24.0416,
        emoji: "🍛"
    },
    {
        title: "Vegetarian Cafe \"Your Mantra\"",
        titleUk: "Вегетаріанське кафе \"Твоя Мантра\"",
        titleHi: "शाकाहारी कैफ़े \"योर मंत्रा\"",
        category: "Restaurants",
        address: "Vynnychenka St, 45, Lutsk, Volyn Oblast, 43000",
        addressUk: "вулиця Винниченка, 45, Луцьк, Волинська область, 43000",
        addressHi: "विन्निचेंका स्ट्रीट, 45, लुत्स्क, 43000",
        description: "Vegetarian cafe with Indian-inspired options in Lutsk.",
        descriptionUk: "Вегетаріанське кафе в Луцьку з індійськими акцентами в меню.",
        descriptionHi: "लुत्स्क में भारतीय प्रेरित विकल्पों वाला शाकाहारी कैफ़े।",
        website: "https://instagram.com/your_mantra_cafe?igshid=MzRlODBiNWFlZA==",
        phone: "+380 63 941 8333",
        lat: 50.74985283968578,
        lng: 25.328959734788633,
        emoji: "🥗"
    },
    {
        title: "Taj Mahal INDIAN SHOP",
        titleUk: "Магазин індійської продукції \"Тадж махал INDIAN SHOP\"",
        titleHi: "ताज महल इंडियन शॉप",
        category: "Shopping",
        address: "Pivdennyi Blvd, 23 / Volodymyra Velykoho St, 14, Ivano-Frankivsk, 76010",
        addressUk: "Південний бульвар, 23, вулиця Володимира Великого, 14, Івано-Франківськ, Івано-Франківська область, 76010",
        addressHi: "पिवदेन्यी बुलेवार्ड, 23 / वोलोदिमिरा वेलिकोहो स्ट्रीट, 14, इवानो-फ्रैंकिव्स्क, 76010",
        description: "Indian products store in Ivano-Frankivsk.",
        descriptionUk: "Магазин індійських товарів в Івано-Франківську.",
        descriptionHi: "इवानो-फ्रैंकिव्स्क में भारतीय उत्पादों की दुकान।",
        website: "https://tajmahal-shop.com.ua/",
        phone: "+380 93 287 3193",
        lat: 48.92253451,
        lng: 24.70207214,
        emoji: "🛍️"
    },
    {
        title: "Taj Mahal INDIAN SHOP Kyiv",
        titleUk: "Магазин індійської продукції \"Тадж махал INDIAN SHOP\" у Києві",
        titleHi: "ताज महल इंडियन शॉप कीव",
        category: "Shopping",
        address: "Chokolivskyi Blvd, 35, Kyiv, Ukraine",
        addressUk: "бул. Чоколівський, 35, Київ, Україна",
        addressHi: "चोकोलिव्स्की बुलेवार्ड, 35, कीव, यूक्रेन",
        description: "Indian products store in Kyiv.",
        descriptionUk: "Магазин індійських товарів у Києві.",
        descriptionHi: "कीव में भारतीय उत्पादों की दुकान।",
        website: "https://tajmahal-shop.com.ua/",
        phone: "+380 93 287 3193",
        lat: 50.43059,
        lng: 30.45359,
        emoji: "🛍️"
    },
    {
        title: "Taj Mahal INDIAN SHOP Vinnytsia",
        titleUk: "Магазин індійської продукції \"Тадж махал INDIAN SHOP\" у Вінниці",
        titleHi: "ताज महल इंडियन शॉप विनित्सिया",
        category: "Shopping",
        address: "Keletska St, Myr Shopping Center, basement level, Vinnytsia, Ukraine",
        addressUk: "вулиця Келецька, ТЦ «Мир», цокольний поверх, Вінниця, Україна",
        addressHi: "केलेत्स्का स्ट्रीट, मिर शॉपिंग सेंटर, बेसमेंट स्तर, विनित्सिया, यूक्रेन",
        description: "Indian products store in Vinnytsia's Myr Shopping Center.",
        descriptionUk: "Магазин індійських товарів у вінницькому ТЦ «Мир».",
        descriptionHi: "विनित्सिया के मिर शॉपिंग सेंटर में भारतीय उत्पादों की दुकान।",
        website: "https://tajmahal-shop.com.ua/",
        phone: "+380 93 287 3193",
        lat: 49.224732,
        lng: 28.419304,
        emoji: "🛍️"
    },
    {
        title: "CURRY HOUSE INDIAN RESTAURANT",
        titleUk: "CURRY HOUSE INDIAN RESTAURANT",
        titleHi: "करी हाउस इंडियन रेस्टोरेंट",
        category: "Restaurants",
        address: "Havanna St, 6, Odesa, Odesa Oblast, 65000",
        addressUk: "Гаванна вулиця, 6, Одеса, Одеська область, 65000",
        addressHi: "हावन्ना स्ट्रीट, 6, ओडेसा, 65000",
        description: "Indian restaurant in central Odesa.",
        descriptionUk: "Ресторан індійської кухні в центрі Одеси.",
        descriptionHi: "ओडेसा के केंद्र में भारतीय रेस्टोरेंट।",
        website: "https://www.instagram.com/curryhouse_odesa/",
        phone: "—",
        lat: 46.4858,
        lng: 30.7405,
        emoji: "🍛"
    },
    {
        title: "Indian Tandoori",
        titleUk: "Indian Tandoori",
        titleHi: "इंडियन तंदूरी",
        category: "Restaurants",
        address: "Prov. Ivana Lutsenka, 3/7, Odesa, Odesa Oblast, 65000",
        addressUk: "пров. Івана Луценка, 3/7, Одеса, Одеська область, 65000",
        addressHi: "इवाना लुत्सेंका लेन, 3/7, ओडेसा, 65000",
        description: "Indian cuisine restaurant in Odesa.",
        descriptionUk: "Ресторан індійської кухні в Одесі.",
        descriptionHi: "ओडेसा में भारतीय व्यंजन का रेस्टोरेंट।",
        website: "https://www.instagram.com/tandoori.odesa/",
        phone: "+380 63 562 8742",
        lat: 46.4838075,
        lng: 30.7349897,
        emoji: "🍽️"
    },
    {
        title: "Lotus Zaika India ka",
        titleUk: "Lotus Zaika India ka",
        titleHi: "लोटस ज़ायका इंडिया का",
        category: "Restaurants",
        address: "Niny Strokatoi St, 18, Odesa, Odesa Oblast, 65000",
        addressUk: "вулиця Ніни Строкатої, 18, Одеса, Одеська область, 65000",
        addressHi: "नीना स्त्रोकातोई स्ट्रीट, 18, ओडेसा, 65000",
        description: "Indian restaurant in Odesa.",
        descriptionUk: "Ресторан індійської кухні в Одесі.",
        descriptionHi: "ओडेसा में भारतीय रेस्टोरेंट।",
        website: "https://www.google.com/maps/search/?api=1&query=46.4846,30.7326",
        phone: "+380 99 776 9996",
        lat: 46.4846,
        lng: 30.7326,
        emoji: "🍲"
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
    maxZoom: 19
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
