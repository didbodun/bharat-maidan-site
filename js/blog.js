const locale = document.body.dataset.locale || "en";
const sources = {
  en: "/data/articles.json",
  uk: "/data/articles-uk.json",
  hi: "/data/articles-hi.json"
};

const labels = {
  en: { all: "All", readMore: "Read more", empty: "No articles in this category yet.", fail: "Failed to load articles." },
  uk: { all: "Усі", readMore: "Читати далі", empty: "У цій категорії поки немає статей.", fail: "Не вдалося завантажити статті." },
  hi: { all: "सभी", readMore: "और पढ़ें", empty: "इस श्रेणी में अभी कोई लेख नहीं है।", fail: "लेख लोड नहीं हो सके।" }
};

let articles = [];
let active = "all";

const list = document.getElementById("blog-list");
const status = document.getElementById("blog-status");
const bar = document.getElementById("category-bar");

function renderCategories() {
  const available = [...new Set(articles.map((a) => a.category))];
  const categories = [labels[locale].all, ...available];

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
      renderArticles();
    });
  });
}

function renderArticles() {
  const filtered = active === "all" ? articles : articles.filter((article) => article.category === active);

  if (!filtered.length) {
    list.innerHTML = "";
    status.textContent = labels[locale].empty;
    return;
  }

  status.textContent = "";

  list.innerHTML = filtered
    .map((article) => `
      <article class="blog-card">
        <div class="blog-meta">
          <span class="blog-category">${article.category}</span>
          <span class="blog-date">${article.date}</span>
        </div>
        <h3>${article.title}</h3>
        <p>${article.excerpt}</p>
        <a class="read-more" href="${article.url}">${labels[locale].readMore}</a>
      </article>
    `)
    .join("");
}

fetch(sources[locale] || sources.en)
  .then((response) => response.json())
  .then((data) => {
    articles = data;
    renderCategories();
    renderArticles();
  })
  .catch(() => {
    status.textContent = labels[locale].fail;
  });
