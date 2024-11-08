<script>
  import { onMount } from 'svelte';

  let links = [
    { name: "Services", href: "#services" },
    { name: "Works", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  let isMenuOpen = false;
  let isHeaderVisible = true;
  let isHeaderTransparent = false;
  let lastScrollY = 0;
  let scrollTimeout;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function scrollToSection(event, href) {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      isMenuOpen = false;
    }
  }

  function handleScroll() {
    const currentScrollY = window.scrollY;
    isHeaderTransparent = currentScrollY > 50;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isHeaderVisible = false;
      }, 100);
    } else {
      clearTimeout(scrollTimeout);
      isHeaderVisible = true;
    }

    lastScrollY = currentScrollY;
  }

  window.addEventListener('scroll', handleScroll);

  onMount(() => {
    const logo = document.getElementById("logo");
    const logoText = logo.textContent;
    logo.innerHTML = "";
    logoText.split("").forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      logo.appendChild(span);
    });

    logo.addEventListener("mouseenter", () => {
      gsap.to("#logo span", {
        y: -10,
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.05,
      });
    });

    logo.addEventListener("mouseleave", () => {
      gsap.to("#logo span", {
        y: 0,
        duration: 0.3,
        ease: "power2.inOut",
        stagger: 0.05,
      });
    });
  });
</script>

<header
  class="header {isHeaderTransparent ? 'header--transparent' : ''} {isHeaderVisible ? '' : 'header--hidden'}"
>
  <div class="container">
    <a href="/" class="logo" id="logo">DIVelopers</a>
    <button class="menu-toggle" on:click={toggleMenu} aria-label="Toggle menu">
      {isMenuOpen ? '✖' : '☰'}
    </button>
    <nav class:is-open={isMenuOpen}>
      {#each links as link}
        <a 
          href={link.href} 
          class="nav-link" 
          on:click={(e) => scrollToSection(e, link.href)}
        >
          {link.name}
        </a>
      {/each}
    </nav>
  </div>
</header>

<style>
  .header {
    background-color: #002642;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 1rem 0;
    transition: background-color 0.4s ease, opacity 0.4s ease, 
                transform 0.6s ease-in-out;
  }

  .header--transparent {
    background-color: rgba(0, 38, 66, 0.9);
  }

  .header--hidden {
    transform: translateY(-100%);
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
  }

  .menu-toggle {
    background: none;
    border: none;
    color: #ffffff;
    font-size: 2rem;
    cursor: pointer;
    display: none;
  }

  nav {
    display: flex;
    gap: 2rem;
  }

  nav.is-open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 1rem;
    background-color: rgba(0, 38, 66, 0.95);
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    z-index: 10;
  }

  .nav-link {
    font-size: 1rem;
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    transition: color 0.3s ease, background-color 0.3s ease, transform 0.3s ease;
  }

  .nav-link:hover {
    background-color: #00aaff;
    color: #ffffff;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    .menu-toggle {
      display: block;
    }

    nav {
      display: none;
      flex-direction: column;
    }

    nav.is-open {
      display: flex;
    }

    .nav-link {
      padding: 0.75rem 1rem;
    }
  }
</style>