const translations = {
  en: {
    hero_title: "Fostering Bridges Between Ukraine and India"
  },
  uk: {
    hero_title: "Будуємо мости між Україною та Індією"
  },
  hi: {
    hero_title: "यूक्रेन और भारत के बीच सेतु निर्माण"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(element => {
    const key = element.getAttribute("data-key");
    element.textContent = translations[lang][key];
  });
}
