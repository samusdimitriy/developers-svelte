<script>
    import { onMount } from 'svelte';

    let projects = [
        {
            title: "Project 1",
            description: "Description of project 1. A modern website for a small business.",
            link: "#"
        },
        {
            title: "Project 2",
            description: "Description of project 2. A portfolio website for a photographer.",
            link: "#"
        },
        {
            title: "Project 3",
            description: "Description of project 3. An e-commerce website for a clothing store.",
            link: "#"
        }
    ];

    onMount(() => {
        if (typeof gsap !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);

            gsap.from(".project-card", {
                scrollTrigger: {
                    trigger: ".projects-grid",
                    start: "top 80%",
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

<section class="portfolio">
    <div class="container">
        <h1>Our projects</h1>
        <div class="projects-grid">
            {#each projects as project}
                <div class="project-card">
                    <img src={project.image} alt={project.title} />
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <a href={project.link} class="project-link" target="_blank" rel="noopener noreferrer">
                        View project
                    </a>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .portfolio {
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

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
    }

    .project-card {
        background-color: #01334d;
        padding: 1.5rem;
        border-radius: 1rem;
        transition: transform 0.3s, box-shadow 0.3s;
        position: relative;
        overflow: hidden;
    }

    .project-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .project-card img {
        width: 100%;
        height: auto;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
        transition: transform 0.3s ease;
    }

    .project-card:hover img {
        transform: scale(1.05);
    }

    .project-card h2 {
        margin: 0.5rem 0;
        font-size: 1.5rem;
        font-family: 'Roboto', sans-serif;
        color: #00aaff;
    }

    .project-card p {
        font-size: 1rem;
        color: #ffffff;
        margin-bottom: 1rem;
        line-height: 1.6;
    }

    .project-link {
        display: inline-block;
        padding: 0.75rem 1.5rem;
        background-color: #00aaff;
        color: #ffffff;
        border-radius: 2rem;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        transition: background-color 0.3s ease, transform 0.3s ease;
    }

    .project-link:hover {
        background-color: #0077cc;
        transform: scale(1.05);
    }

    /* Выравнивание текста внутри карточек */
    .project-card h2, .project-card p {
        text-align: left;
    }

    /* Адаптивность для мобильных устройств */
    @media (max-width: 600px) {
        h1 {
            font-size: 2rem;
        }

        .projects-grid {
            grid-template-columns: 1fr;
        }

        .project-card h2, .project-card p {
            text-align: center;
        }
    }
</style>