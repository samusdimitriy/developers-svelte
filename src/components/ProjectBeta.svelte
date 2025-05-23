<script>
  let title = "Project Beta: Interactive Learning Platform";
  let description = "An engaging and interactive e-learning platform designed to make education accessible and fun. Features gamified modules, progress tracking, and collaborative tools for students and educators.";
  let images = [
    { src: "https://placehold.co/800x600/0A2A40/FFFFFF?text=Beta+Tablet+Interactive+Lesson", alt: "Project Beta Tablet Interactive Lesson", caption: "Tablet: Interactive Lesson" },
    { src: "https://placehold.co/600x450/20C997/FFFFFF?text=Beta+Mobile+Gamified+Quiz", alt: "Project Beta Mobile Gamified Quiz", caption: "Mobile: Gamified Quiz" },
    { src: "https://placehold.co/700x500/104A6C/FFFFFF?text=Beta+Desktop+Student+Collaboration", alt: "Project Beta Desktop Student Collaboration", caption: "Desktop: Student Collaboration" }
  ];

  import { onMount } from 'svelte';
  let ctaButton;
  onMount(() => {
    if (typeof gsap !== 'undefined' && ctaButton) {
      // GSAP available, enhance animation
      gsap.set(ctaButton, { transformOrigin: "center center" });
      ctaButton.addEventListener('mouseenter', () => {
        gsap.to(ctaButton, { scale: 1.05, backgroundColor: "#1BAA80", duration: 0.2, ease: "power1.out" }); // Beta's hover color
      });
      ctaButton.addEventListener('mouseleave', () => {
        gsap.to(ctaButton, { scale: 1, backgroundColor: "#20C997", duration: 0.2, ease: "power1.inOut" }); // Beta's original color
      });
      ctaButton.addEventListener('focus', () => {
        gsap.to(ctaButton, { scale: 1.05, boxShadow: "0 0 0 3px rgba(32, 201, 151, 0.5)", duration: 0.2 }); // Beta's focus color
      });
      ctaButton.addEventListener('blur', () => {
        gsap.to(ctaButton, { scale: 1, boxShadow: "none", duration: 0.2 });
      });
    } else if (ctaButton) {
      // GSAP not available, rely on CSS transitions
      ctaButton.style.transition = "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease";
      ctaButton.addEventListener('focus', () => {
        ctaButton.style.outline = '2px solid #20C997'; // Beta's focus color
        ctaButton.style.outlineOffset = '2px';
      });
      ctaButton.addEventListener('blur', () => {
        ctaButton.style.outline = 'none';
      });
    }
  });
</script>

<section class="project-detail project-beta">
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
    <button class="cta-button" bind:this={ctaButton}>Explore Platform</button>
  </div>
</section>

<style>
  .project-detail {
    padding: 4rem 2rem;
    background-color: #0A2A40; /* Slightly different background for Beta */
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
    color: #20C997; /* Accent color for Beta */
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
    background-color: #104A6C; /* Darker shade for image container */
    border-radius: 8px;
    padding: 1rem;
  }
  .image-placeholder {
    width: 100%;
    height: 200px;
    background-color: #225E8A; /* Darker placeholder background */
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
    background-color: #20C997; /* Button color for Beta */
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
    background-color: #1BAA80; /* Fallback if JS/GSAP fails */
    transform: scale(1.05); /* Fallback if JS/GSAP fails */
  }

  .cta-button:focus-visible { /* Using focus-visible for better accessibility */
    outline: 2px solid #20C997; /* Beta's accent color */
    outline-offset: 2px;
    box-shadow: 0 0 0 3px rgba(32, 201, 151, 0.3); /* Softer focus glow with Beta's accent */
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
