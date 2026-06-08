(function () {
  var root = document.documentElement;
  var nav = document.getElementById("site-nav");
  var mobileMenu = document.getElementById("mobile-menu");
  var mobileMenuToggle = document.querySelector("[data-mobile-menu-toggle]");
  var backToTop = document.getElementById("back-to-top");
  var whatsappButton = document.getElementById("whatsapp-button");
  var currentYear = document.getElementById("current-year");

  function applyTheme(theme) {
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);

    document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
      var moon = button.querySelector('[data-theme-icon="moon"]');
      var sun = button.querySelector('[data-theme-icon="sun"]');
      if (moon) {
        moon.classList.toggle("hidden", theme === "dark");
      }
      if (sun) {
        sun.classList.toggle("hidden", theme !== "dark");
      }
    });
  }

  function toggleTheme() {
    applyTheme(root.classList.contains("dark") ? "light" : "dark");
  }

  function scrollToTarget(target) {
    if (!target) {
      return;
    }

    var element = document.querySelector(target);
    if (!element) {
      return;
    }

    element.scrollIntoView({ behavior: "smooth" });
    closeMobileMenu();
  }

  function openMobileMenu() {
    if (!mobileMenu || !mobileMenuToggle) {
      return;
    }

    mobileMenu.classList.remove("hidden");
    mobileMenuToggle.setAttribute("aria-label", "Fechar menu");
    toggleMenuIcons(true);
  }

  function closeMobileMenu() {
    if (!mobileMenu || !mobileMenuToggle) {
      return;
    }

    mobileMenu.classList.add("hidden");
    mobileMenuToggle.setAttribute("aria-label", "Abrir menu");
    toggleMenuIcons(false);
  }

  function toggleMobileMenu() {
    if (!mobileMenu) {
      return;
    }

    if (mobileMenu.classList.contains("hidden")) {
      openMobileMenu();
      return;
    }

    closeMobileMenu();
  }

  function toggleMenuIcons(isOpen) {
    if (!mobileMenuToggle) {
      return;
    }

    var openIcon = mobileMenuToggle.querySelector('[data-menu-icon="open"]');
    var closeIcon = mobileMenuToggle.querySelector('[data-menu-icon="close"]');
    if (openIcon) {
      openIcon.classList.toggle("hidden", isOpen);
    }
    if (closeIcon) {
      closeIcon.classList.toggle("hidden", !isOpen);
    }
  }

  function updateNavbar() {
    if (!nav) {
      return;
    }

    if (nav.dataset.staticNav === "true") {
      nav.classList.remove("bg-transparent", "py-6");
      nav.classList.add("bg-white", "py-4", "dark:bg-black", "dark:glass");
      return;
    }

    var isScrolled = window.scrollY > 20;
    nav.classList.toggle("bg-transparent", !isScrolled);
    nav.classList.toggle("py-6", !isScrolled);
    nav.classList.toggle("bg-white", isScrolled);
    nav.classList.toggle("py-4", isScrolled);
    nav.classList.toggle("dark:bg-black", isScrolled);
    nav.classList.toggle("dark:glass", isScrolled);
  }

  function animateElement(element) {
    if (element.dataset.animated === "true") {
      return;
    }

    var delay = Number(element.dataset.animateDelay || element.dataset.revealDelay || 0);
    var effect = element.dataset.animate || element.dataset.reveal || "fade-up";
    var finalTransform = "translateY(0)";

    if (effect === "fade-left") {
      finalTransform = "translateX(0)";
    } else if (effect === "scale-in") {
      finalTransform = "scale(1)";
    } else if (effect === "fade-in") {
      finalTransform = "none";
    }

    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    element.style.transitionDelay = delay + "ms";

    requestAnimationFrame(function () {
      element.style.opacity = "1";
      element.style.transform = finalTransform;
      element.dataset.animated = "true";
    });
  }

  function setupEntranceAnimations() {
    if (nav) {
      if (nav.dataset.staticNav === "true") {
        nav.style.transform = "none";
      } else {
        nav.style.transition = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
        requestAnimationFrame(function () {
          nav.style.transform = "translateY(0)";
        });
      }
    }

    if (whatsappButton) {
      whatsappButton.style.transition = "opacity 0.35s ease, transform 0.35s ease";
      whatsappButton.style.transitionDelay = "1.5s";
      requestAnimationFrame(function () {
        whatsappButton.style.opacity = "1";
        whatsappButton.style.transform = "scale(1)";
      });
    }

    document.querySelectorAll("[data-animate]").forEach(function (element) {
      animateElement(element);
    });
  }

  function setupRevealAnimations() {
    var elements = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach(animateElement);
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          animateElement(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach(function (element) {
      observer.observe(element);
    });
  }

  if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
  }

  applyTheme(localStorage.getItem("theme") || "light");
  updateNavbar();
  closeMobileMenu();
  setupEntranceAnimations();
  setupRevealAnimations();

  document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
    button.addEventListener("click", toggleTheme);
  });

  document.querySelectorAll("[data-scroll-target]").forEach(function (button) {
    button.addEventListener("click", function () {
      scrollToTarget(button.getAttribute("data-scroll-target"));
    });
  });

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", toggleMobileMenu);
  }

  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  window.addEventListener("scroll", updateNavbar, { passive: true });
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      closeMobileMenu();
    }
  });
})();
