<script>
    import { createEventDispatcher, onMount } from 'svelte';
  
    const dispatch = createEventDispatcher();
    let introComplete = false;
  
    onMount(() => {
      const timeline = gsap.timeline({
        defaults: { ease: 'power4.out' },
        onComplete: () => {
          introComplete = true;
          dispatch('complete');
        },
      });
  
      const logoText = document.querySelector('.logo-text');
      const letters = logoText.textContent.trim().split('');
      logoText.innerHTML = letters.map((letter, index) => `<span class="letter letter-${index}">${letter}</span>`).join('');
  
      timeline.from('.letter', {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
      });
  
      timeline.to('.intro', { opacity: 0, duration: 0.5 }, '+=1');
      timeline.set('.intro', { display: 'none' });
    });
  </script>
  
  {#if !introComplete}
    <div class="intro">
      <div class="logo-container">
        <h1 class="logo-text">DIVelopers</h1>
      </div>
    </div>
  {/if}
  
  <style>
    .intro {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #002642;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      overflow: hidden;
    }
  
    .logo-container {
      overflow: hidden;
    }
  
    .logo-text {
      color: #ffffff;
      font-size: 5rem;
      font-weight: bold;
      font-family: 'Roboto', sans-serif;
      display: flex;
    }
  </style>