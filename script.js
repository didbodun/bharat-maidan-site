let currentLang = "en";

function renderText() {
  document.querySelectorAll("[data-key]").forEach(el => {
    el.textContent = content[currentLang][el.dataset.key];
  });
}

document.getElementById("languageSwitcher").addEventListener("change", e => {
  currentLang = e.target.value;
  renderText();
});

renderText();

// Map
const map = L.map("mapContainer").setView([49.0, 31.0], 6);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap"
}).addTo(map);

locations.forEach(loc => {
  L.marker([loc.lat, loc.lng]).addTo(map).bindPopup(loc.name);
});
