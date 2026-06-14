(function () {
  var storageKey = "townlin-language";

  function savedLanguage() {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function storeLanguage(language) {
    try {
      localStorage.setItem(storageKey, language);
    } catch (error) {
      // The switch still works when localStorage is unavailable.
    }
  }

  function applyLanguage(language) {
    var isEnglish = language === "en";
    document.documentElement.setAttribute("lang", isEnglish ? "en" : "zh-CN");
    document.body.classList.toggle("lang-en", isEnglish);

    var buttons = document.querySelectorAll("[data-lang-switch]");
    buttons.forEach(function (button) {
      var active = button.getAttribute("data-lang-switch") === language;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var language = savedLanguage() || "zh";
    applyLanguage(language);

    var buttons = document.querySelectorAll("[data-lang-switch]");
    buttons.forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        var nextLanguage = button.getAttribute("data-lang-switch");
        storeLanguage(nextLanguage);
        applyLanguage(nextLanguage);
      });
    });
  });
})();
