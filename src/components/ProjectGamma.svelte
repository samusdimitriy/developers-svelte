<script>
  let title = "Project Gamma: Smart Home IoT";
  let description = "A comprehensive IoT solution for smart homes, enabling seamless control and automation of lighting, security, climate, and appliances. Focused on user-friendliness and energy efficiency.";
  let images = [
    { src: "https://placehold.co/800x600/061F2E/FFFFFF?text=Gamma+Tablet+Smart+Home+Control", alt: "Project Gamma Tablet Smart Home Control Panel", caption: "Tablet: Smart Home Control" },
    { src: "https://placehold.co/600x450/FFC107/000000?text=Gamma+Phone+Energy+Management", alt: "Project Gamma Phone Energy Management Interface", caption: "Phone: Energy Management" },
    { src: "https://placehold.co/700x500/0C2E4A/FFFFFF?text=Gamma+Dashboard+Security+Overview", alt: "Project Gamma Dashboard Security Overview", caption: "Dashboard: Security Overview" }
  ];

  import { onMount } from 'svelte';
  let ctaButton;
  onMount(() => {
    if (typeof gsap !== 'undefined' && ctaButton) {
      // GSAP available, enhance animation
      gsap.set(ctaButton, { transformOrigin: "center center" });
      ctaButton.addEventListener('mouseenter', () => {
        gsap.to(ctaButton, { scale: 1.05, backgroundColor: "#E0A800", duration: 0.2, ease: "power1.out" }); // Gamma's hover color
      });
      ctaButton.addEventListener('mouseleave', () => {
        gsap.to(ctaButton, { scale: 1, backgroundColor: "#FFC107", duration: 0.2, ease: "power1.inOut" }); // Gamma's original color
      });
      ctaButton.addEventListener('focus', () => {
        gsap.to(ctaButton, { scale: 1.05, boxShadow: "0 0 0 3px rgba(255, 193, 7, 0.5)", duration: 0.2 }); // Gamma's focus color
      });
      ctaButton.addEventListener('blur', () => {
        gsap.to(ctaButton, { scale: 1, boxShadow: "none", duration: 0.2 });
      });
    } else if (ctaButton) {
      // GSAP not available, rely on CSS transitions
      ctaButton.style.transition = "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease";
      ctaButton.addEventListener('focus', () => {
        ctaButton.style.outline = '2px solid #FFC107'; // Gamma's focus color
        ctaButton.style.outlineOffset = '2px';
      });
      ctaButton.addEventListener('blur', () => {
        ctaButton.style.outline = 'none';
      });
    }
  });
</script>

<section class="project-detail project-gamma">
  <div class="container">
    <h2>{title}</h2>
    <p>{description}</p>
    <div class="project-images">
      {#each images as imageData}
        <div class="img-placeholder-container">
          <img src={imageData.src} alt={imageData.alt} class="image-placeholder" />
          <p class="img-caption">{imageData.caption}</p>
        </div>
      {/each}
    </div>
    <button class="cta-button" bind:this={ctaButton}>View System</button>
  </div>
</section>

<style>
  .project-detail {
    padding: 4rem 2rem;
    background-color: #061F2E; /* Slightly different background for Gamma */
    color: #ffffff;
    text-align: center;
  }
  .container {
    max-width: 1000px;
    margin: 0 auto;
  }
  h2 {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    font-family: 'Roboto', sans-serif;
    color: #FFC107; /* Accent color for Gamma */
  }
  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    line-height: 1.7;
    text-align: left;
  }
  .project-images {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
  }
  .img-placeholder-container {
    flex-basis: calc(33.333% - 1.5rem);
    background-color: #0C2E4A; /* Image container for Gamma */
    border-radius: 8px;
    padding: 1rem;
  }
  .image-placeholder {
    width: 100%;
    height: 200px;
    background-color: #1A3E5C; /* Placeholder background for Gamma */
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ccc;
    font-style: italic;
  }
  .img-caption {
    font-size: 0.8rem;
    color: #bbb;
    margin-top: 0.5rem;
    text-align: center;
  }
  .cta-button {
    display: inline-block;
    padding: 0.8rem 1.8rem;
    background-color: #FFC107; /* Button color for Gamma */
    color: #000000; /* Darker text for contrast on yellow button */
    border: none;
    border-radius: 2rem;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1.1rem;
    transition: background-color 0.3s ease, transform 0.3s ease, opacity 0.3s ease;
    cursor: pointer;
    /* transition properties are now set in script if GSAP is not available, or handled by GSAP */
  }
  .cta-button:hover {
    /* GSAP will handle hover if available, otherwise CSS transition takes over */
    background-color: #E0A800; /* Fallback if JS/GSAP fails */
    transform: scale(1.05); /* Fallback if JS/GSAP fails */
  }

  .cta-button:focus-visible { /* Using focus-visible for better accessibility */
    outline: 2px solid #FFC107; /* Gamma's accent color */
    outline-offset: 2px;
    box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.3); /* Softer focus glow with Gamma's accent */
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .project-images {
      flex-direction: column;
      align-items: center;
    }
    .img-placeholder-container {
      flex-basis: 80%;
      margin-bottom: 1rem;
    }
    h2 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1rem;
    }
  }
</style>
