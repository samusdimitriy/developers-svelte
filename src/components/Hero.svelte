<script>
    import { onMount } from 'svelte';

    export let title = "We provide the best solutions for your business";

    onMount(() => {
        if (typeof gsap !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);

            const heroSection = document.querySelector('.hero');
            const titleElement = heroSection.querySelector("h1");
            const buttonElement = heroSection.querySelector(".hero-button");

            titleElement.innerHTML = titleElement.textContent.split('').map(letter => `<span class="letter">${letter}</span>`).join('');

            gsap.from(".letter", {
                scrollTrigger: {
                    trigger: ".hero",
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                duration: 1,
                opacity: 0,
                y: 50,
                stagger: 0.05,
                ease: "power3.out"
            });

        } else {
            console.error("GSAP не загружен.");
        }
    });
</script>

<section class="hero">
    <h1>{title}</h1>

    <div class="arrow arrow-first"></div>
    <div class="arrow arrow-second"></div>
</section>

<style>
    .hero {
        background-color: #002642;
        text-align: center;
        position: relative;
        min-height: calc(100vh - 60px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        color: #ffffff;
    }

    .arrow {
        opacity: 0;
        position: absolute;
        left: 50%;
        bottom: 40px;
        width: 30px;
        height: 30px;
        transform: translateX(-50%) translateY(0);
        z-index: 1;
    }

    .arrow-first {
        animation: arrow-movement 2s ease-in-out infinite;
    }

    .arrow-second {
        animation: arrow-movement 2s 1s ease-in-out infinite;
    }

    .arrow::before,
    .arrow::after {
        background: #ffffff;
        content: '';
        display: block;
        height: 3px;
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
    }

    .arrow::before {
        transform: rotate(45deg) translateX(-23%);
        transform-origin: top left;
    }

    .arrow::after {
        transform: rotate(-45deg) translateX(23%);
        transform-origin: top right;
    }

    @keyframes arrow-movement {
        0% {
            opacity: 0;
            transform: translateX(-50%) translateY(0);
        }
        70% {
            opacity: 1;
            transform: translateX(-50%) translateY(20px);
        }
        100% {
            opacity: 0;
            transform: translateX(-50%) translateY(40px);
        }
    }

    @media (max-width: 600px) {
        h1 {
            font-size: 2rem;
        }
    }
</style>