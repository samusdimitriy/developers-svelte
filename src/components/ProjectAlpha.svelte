<script>
  let title = "Project Alpha: Enterprise Solution";
  let description = "A modern, cross-platform application designed for enterprise needs, ensuring seamless operation on desktop, web, and mobile. Built with cutting-edge technology for scalability and performance.";
  let images = [
    { src: "https://placehold.co/800x600/082238/FFFFFF?text=Alpha+Desktop+Dashboard", alt: "Project Alpha Desktop Dashboard View", caption: "Desktop Dashboard" },
    { src: "https://placehold.co/600x450/17A2B8/FFFFFF?text=Alpha+Mobile+Analytics", alt: "Project Alpha Mobile Analytics Interface", caption: "Mobile Analytics" },
    { src: "https://placehold.co/700x500/0E3A5C/FFFFFF?text=Alpha+Tablet+Collaboration", alt: "Project Alpha Tablet Collaboration Platform", caption: "Tablet Collaboration" }
  ];

  // Basic animation for the button (can be refined later with GSAP if available)
  import { onMount } from 'svelte';
  let ctaButton;
  onMount(() => {
    if (typeof gsap !== 'undefined' && ctaButton) {
      // GSAP available, enhance animation
      gsap.set(ctaButton, { transformOrigin: "center center" });
      ctaButton.addEventListener('mouseenter', () => {
        gsap.to(ctaButton, { scale: 1.05, backgroundColor: "#138496", duration: 0.2, ease: "power1.out" });
      });
      ctaButton.addEventListener('mouseleave', () => {
        gsap.to(ctaButton, { scale: 1, backgroundColor: "#17A2B8", duration: 0.2, ease: "power1.inOut" });
      });
      // Ensure focus state is visually distinct if not handled by CSS
      ctaButton.addEventListener('focus', () => {
        gsap.to(ctaButton, { scale: 1.05, boxShadow: "0 0 0 3px rgba(23, 162, 184, 0.5)", duration: 0.2 });
      });
      ctaButton.addEventListener('blur', () => {
        gsap.to(ctaButton, { scale: 1, boxShadow: "none", duration: 0.2 });
      });
    } else if (ctaButton) {
      // GSAP not available, rely on CSS transitions (remove JS opacity change)
      // The existing CSS :hover rule already handles background-color and transform.
      // Add focus style for accessibility if not covered by default browser styles
      ctaButton.style.transition = "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease";
      ctaButton.addEventListener('focus', () => {
        ctaButton.style.outline = '2px solid #17A2B8'; // Example focus style
        ctaButton.style.outlineOffset = '2px';
      });
      ctaButton.addEventListener('blur', () => {
        ctaButton.style.outline = 'none';
      });
    }
  });
</script>

<section class="project-detail project-alpha">
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
    <button class="cta-button" bind:this={ctaButton}>Discover More</button>
  </div>
</section>

<style>
  .project-detail {
    padding: 4rem 2rem;
    background-color: #082238; /* Slightly different from portfolio or services */
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
    color: #17A2B8; /* Accent color */
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
    flex-basis: calc(33.333% - 1.5rem); /* Adjust for 3 images per row, considering gap */
    background-color: #0E3A5C;
    border-radius: 8px;
    padding: 1rem;
  }
  .image-placeholder {
    width: 100%;
    height: 200px; /* Placeholder height */
    background-color: #1f4e78;
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
    background-color: #17A2B8;
    color: #ffffff;
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
    background-color: #138496; /* Fallback if JS/GSAP fails */
    transform: scale(1.05); /* Fallback if JS/GSAP fails */
  }

  .cta-button:focus-visible { /* Using focus-visible for better accessibility */
    outline: 2px solid #17A2B8;
    outline-offset: 2px;
    box-shadow: 0 0 0 3px rgba(23, 162, 184, 0.3); /* Softer focus glow */
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
