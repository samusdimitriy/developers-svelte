<script>
    import Hero from '../components/Hero.svelte';
    import Services from '../components/Services.svelte';
    import Portfolio from '../components/Portfolio.svelte';
    import Contact from '../components/Contact.svelte';
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
</main>