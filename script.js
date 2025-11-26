// =========================
//  ARINACAVE WEBSITE SCRIPT
//  Author: Denis Marav
//  =========================

// Wait until the document is ready
document.addEventListener("DOMContentLoaded", () => {
  // ===== Smooth Scroll for Navigation Links =====
  const navLinks = document.querySelectorAll("nav a[href^='#']");
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth"
        });
      }
    });
  });

  // ===== Sticky Navigation & Scroll Shadow =====
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // ===== Scroll Reveal Animations =====
  const revealElements = document.querySelectorAll(".section, .feature-card, .download-card");
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      if (position < windowHeight - 100) {
        el.classList.add("visible");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // ===== Back to Top Button =====
  const backToTop = document.createElement("button");
  backToTop.textContent = "↑";
  backToTop.id = "backToTop";
  document.body.appendChild(backToTop);

  backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
    cursor: pointer;
    display: none;
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
    transition: all 0.3s ease;
    z-index: 999;
  `;

  backToTop.addEventListener("mouseenter", () => {
    backToTop.style.transform = "translateY(-3px)";
    backToTop.style.boxShadow = "0 10px 25px rgba(0,0,0,0.4)";
  });

  backToTop.addEventListener("mouseleave", () => {
    backToTop.style.transform = "translateY(0)";
    backToTop.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 400 ? "block" : "none";
  });

  // ===== Mobile Menu Toggle =====
  const navMenu = document.querySelector("nav ul");
  const menuButton = document.createElement("div");
  menuButton.id = "menuButton";
  menuButton.innerHTML = "☰";
  menuButton.style.cssText = `
    color: white;
    font-size: 1.8rem;
    cursor: pointer;
    display: none;
    margin-left: 20px;
  `;
  nav.prepend(menuButton);

  menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    if (navMenu.classList.contains("open")) {
      navMenu.style.display = "flex";
      navMenu.style.flexDirection = "column";
      navMenu.style.alignItems = "center";
      navMenu.style.background = "#2c3e50";
      navMenu.style.padding = "1rem 0";
    } else {
      navMenu.style.display = "";
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navMenu.style.display = "flex";
      menuButton.style.display = "none";
    } else {
      navMenu.style.display = "none";
      menuButton.style.display = "block";
    }
  });

  if (window.innerWidth <= 768) {
    menuButton.style.display = "block";
    navMenu.style.display = "none";
  }

  // ===== Console Greeting (for developers) =====
  console.log("%cWelcome to ArinaCave 🌧️", "color:#667eea; font-size:16px; font-weight:bold;");
  console.log("%cCrafted with care by Denis Marav", "color:#2ecc71; font-size:14px;");
});
