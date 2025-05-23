<script>
    import Hero from '../components/Hero.svelte';
    import Services from '../components/Services.svelte';
    import Portfolio from '../components/Portfolio.svelte';
    import Contact from '../components/Contact.svelte';

    import ProjectAlpha from '../components/ProjectAlpha.svelte';
    import ProjectBeta from '../components/ProjectBeta.svelte';
    import ProjectGamma from '../components/ProjectGamma.svelte';
</script>

<main>
    <section id="home">
        <Hero />
    </section>

    <section id="services">
        <Services />
    </section>

    <section id="portfolio">
        <Portfolio />
    </section>

    <section id="contact">
        <Contact />
    </section>

    <section id="project-alpha">
        <ProjectAlpha />
    </section>

    <section id="project-beta">
        <ProjectBeta />
    </section>

    <section id="project-gamma">
        <ProjectGamma />
    </section>
</main>