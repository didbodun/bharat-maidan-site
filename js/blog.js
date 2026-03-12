(function () {
  var listElement = document.getElementById("blog-list");
  var statusElement = document.getElementById("blog-status");
  var categoryBarElement = document.getElementById("category-bar");

  if (!listElement || !statusElement || !categoryBarElement) {
    return;
  }

  var pagePath = window.location.pathname;
  var isUk = pagePath.indexOf("/uk/") !== -1;
  var isHi = pagePath.indexOf("/hi/") !== -1;

  var config = {
    allLabel: "All",
    noArticlesText: "No articles are available yet.",
    loadErrorText: "Unable to load blog articles at this time.",
    readMoreText: "Read more",
    dataPath: "data/articles.json",
    articlePrefix: "articles/"
  };

  if (isUk) {
    config = {
      allLabel: "Всі",
      noArticlesText: "Поки що статей немає.",
      loadErrorText: "Зараз неможливо завантажити статті блогу.",
      readMoreText: "Читати далі",
      dataPath: "../data/articles-uk.json",
      articlePrefix: "articles/"
    };
  } else if (isHi) {
    config = {
      allLabel: "सभी",
      noArticlesText: "अभी कोई लेख उपलब्ध नहीं है।",
      loadErrorText: "इस समय ब्लॉग लेख लोड नहीं हो पा रहे हैं।",
      readMoreText: "पूरा पढ़ें",
      dataPath: "../data/articles-hi.json",
      articlePrefix: "articles/"
    };
  }

  function getArticleUrl(slug) {
    return config.articlePrefix + slug + ".html";
  }

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

    var title = document.createElement("h3");
    title.className = "blog-title";
    title.textContent = article.title;

    var excerpt = document.createElement("p");
    excerpt.className = "blog-excerpt";
    excerpt.textContent = article.excerpt;

    var link = document.createElement("a");
    link.className = "read-more";
    link.href = getArticleUrl(article.slug);
    link.textContent = config.readMoreText;

    meta.appendChild(category);
    meta.appendChild(date);
    card.appendChild(meta);
    card.appendChild(title);
    card.appendChild(excerpt);
    card.appendChild(link);

    return card;
  }

  function renderArticles(articles, activeCategory) {
    listElement.innerHTML = "";

    var filtered = articles.filter(function (item) {
      return activeCategory === config.allLabel || item.category === activeCategory;
    });

    if (filtered.length === 0) {
      statusElement.textContent = config.noArticlesText;
      return;
    }

    statusElement.textContent = "";
    filtered.forEach(function (article) {
      listElement.appendChild(createArticleCard(article));
    });
  }

  function renderCategoryBar(articles, onChangeCategory) {
    var categories = [];

    articles.forEach(function (item) {
      if (categories.indexOf(item.category) === -1) {
        categories.push(item.category);
      }
    });

    var fullList = [config.allLabel].concat(categories);

    fullList.forEach(function (category, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "category-pill" + (index === 0 ? " is-active" : "");
      button.textContent = category;
      button.addEventListener("click", function () {
        var allButtons = categoryBarElement.querySelectorAll(".category-pill");
        allButtons.forEach(function (el) {
          el.classList.remove("is-active");
        });
        button.classList.add("is-active");
        onChangeCategory(category);
      });
      categoryBarElement.appendChild(button);
    });
  }

  fetch(config.dataPath)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("load_failed");
      }
      return response.json();
    })
    .then(function (articles) {
      if (!Array.isArray(articles) || articles.length === 0) {
        statusElement.textContent = config.noArticlesText;
        return;
      }
      renderCategoryBar(articles, function (selectedCategory) {
        renderArticles(articles, selectedCategory);
      });
      renderArticles(articles, config.allLabel);
    })
    .catch(function () {
      statusElement.textContent = config.loadErrorText;
    });
})();
