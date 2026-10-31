// Maximux Studio — the only script on the site: the mobile menu toggle.
(function () {
  document.documentElement.classList.add("js");

  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });

    document.addEventListener("click", function (e) {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
    });
  });
})();
