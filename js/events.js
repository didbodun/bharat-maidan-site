const locale = document.body.dataset.locale || "en";
const sources = {
  en: "/data/events.json",
  uk: "/data/events-uk.json",
  hi: "/data/events-hi.json"
};

const labels = {
  en: { all: "All", readMore: "Read more", empty: "No events in this category yet.", fail: "Failed to load events.", categories: ["Education", "Official", "Holidays", "Sport", "Culture"] },
  uk: { all: "Усі", readMore: "Читати далі", empty: "У цій категорії поки немає подій.", fail: "Не вдалося завантажити події.", categories: ["Освіта", "Офіційне", "Свята", "Спорт", "Культура"] },
  hi: { all: "सभी", readMore: "और पढ़ें", empty: "इस श्रेणी में अभी कोई इवेंट नहीं है।", fail: "इवेंट लोड नहीं हो सके।", categories: ["शिक्षा", "आधिकारिक", "छुट्टियाँ", "खेल", "संस्कृति"] }
};

let events = [];
let active = "all";

const list = document.getElementById("blog-list");
const status = document.getElementById("blog-status");
const bar = document.getElementById("category-bar");

function renderCategories() {
  const categories = [labels[locale].all, ...labels[locale].categories];

  bar.innerHTML = categories
    .map((category) => {
      const key = category === labels[locale].all ? "all" : category;
      return `<button class="blog-chip ${key === active ? "active" : ""}" data-category="${key}">${category}</button>`;
    })
    .join("");

  bar.querySelectorAll(".blog-chip").forEach((button) => {
    button.addEventListener("click", () => {
      active = button.dataset.category;
      renderCategories();
      renderEvents();
    });
  });
}

function renderEvents() {
  const filtered = active === "all" ? events : events.filter((event) => event.category === active);

  if (!filtered.length) {
    list.innerHTML = "";
    status.textContent = labels[locale].empty;
    return;
  }

  status.textContent = "";

  list.innerHTML = filtered
    .map((event) => `
      <article class="blog-card">
        <div class="blog-meta">
          <span class="blog-category">${event.category}</span>
          <span class="blog-date">${event.date}</span>
        </div>
        <h3>${event.title}</h3>
        <p>${event.excerpt}</p>
        <a class="read-more" href="${event.url}">${labels[locale].readMore}</a>
      </article>
    `)
    .join("");
}

fetch(sources[locale] || sources.en)
  .then((response) => response.json())
  .then((data) => {
    events = data;
    renderCategories();
    renderEvents();
  })
  .catch(() => {
    status.textContent = labels[locale].fail;
  });
