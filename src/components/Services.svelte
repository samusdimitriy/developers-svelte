<script>
    import { onMount } from 'svelte';

    let services = [
        {
            title: "Web Development",
            description: "Creating fast, responsive, and SEO-friendly websites using modern technologies.",
        },
        {
            title: "UI/UX Design",
            description: "Designing user-friendly interfaces and beautiful websites that stand out.",
        },
        {
            title: "Mobile Development",
            description: "Developing cross-platform mobile applications for iOS and Android.",
        },
        {
            title: "Support & Maintenance",
            description: "Providing ongoing support and maintenance for your website or application.",
        }
    ];

    onMount(() => {
        if (typeof gsap !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);

            gsap.from(".service-card", {
                scrollTrigger: {
                    trigger: ".services-grid",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none",
                },
                duration: 1,
                y: 50,
                opacity: 0,
                stagger: 0.2,
                ease: "power2.out"
            });
        } else {
            console.error("GSAP не загружен.");
        }
    });
</script>

<section class="services">
    <div class="container">
        <h1>Services</h1>
        <div class="services-grid">
            {#each services as service}
                <div class="service-card">
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .services {
        padding: 4rem 2rem;
        background-color: #002642;
        color: #ffffff;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        color: #ffffff;
    }

    .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
    }

    .service-card {
        background-color: #01334d;
        padding: 2rem;
        border-radius: 1rem;
        transition: transform 0.3s, box-shadow 0.3s;
    }

    .service-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .service-card h2 {
        font-size: 1.75rem;
        margin-bottom: 1rem;
        font-family: 'Roboto', sans-serif;
        color: #00aaff;
    }

    .service-card p {
        font-size: 1rem;
        color: #ffffff;
        line-height: 1.6;
    }

    .service-card h2, .service-card p {
        text-align: left;
    }

    @media (max-width: 600px) {
        h1 {
            font-size: 2rem;
        }

        .services-grid {
            grid-template-columns: 1fr;
        }

        .service-card h2, .service-card p {
            text-align: center;
        }
    }
</style>