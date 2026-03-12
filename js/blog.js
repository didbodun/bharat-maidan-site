(function () {
  var listElement = document.getElementById("blog-list");
  var statusElement = document.getElementById("blog-status");

  function createArticleCard(article) {
    var card = document.createElement("article");
    card.className = "blog-card";

    var meta = document.createElement("div");
    meta.className = "blog-meta";

    var category = document.createElement("span");
    category.className = "blog-category";
    category.textContent = article.category;

    var date = document.createElement("span");
    date.textContent = article.date;

    meta.appendChild(category);
    meta.appendChild(date);

    var title = document.createElement("h3");
    title.className = "blog-title";
    title.textContent = article.title;

    var excerpt = document.createElement("p");
    excerpt.className = "blog-excerpt";
    excerpt.textContent = article.excerpt;

    var link = document.createElement("a");
    link.className = "read-more";
    link.href = "articles/" + article.slug + ".html";
    link.textContent = "Read more";

    card.appendChild(meta);
    card.appendChild(title);
    card.appendChild(excerpt);
    card.appendChild(link);

    return card;
  }

  function renderArticles(articles) {
    listElement.innerHTML = "";

    if (!Array.isArray(articles) || articles.length === 0) {
      statusElement.textContent = "No articles are available yet.";
      return;
    }

    statusElement.textContent = "";

    articles.forEach(function (article) {
      listElement.appendChild(createArticleCard(article));
    });
  }

  fetch("data/articles.json")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Could not load articles.");
      }
      return response.json();
    })
    .then(function (data) {
      renderArticles(data);
    })
    .catch(function () {
      statusElement.textContent = "Unable to load blog articles at this time.";
    });
})();
