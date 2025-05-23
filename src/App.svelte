<script>
    import Header from './components/Header.svelte';
    import Footer from './components/Footer.svelte';
    import Intro from './components/Intro.svelte';

    import Hero from './components/Hero.svelte';
    import Services from './components/Services.svelte';
    import Portfolio from './components/Portfolio.svelte';
    import Contact from './components/Contact.svelte';

    import ProjectAlpha from './components/ProjectAlpha.svelte';
    import ProjectBeta from './components/ProjectBeta.svelte';
    import ProjectGamma from './components/ProjectGamma.svelte';

    let showIntro = true;

    function handleIntroComplete() {
        showIntro = false;
    }
</script>

{#if showIntro}
    <Intro on:complete={handleIntroComplete} />
{/if}

{#if !showIntro}
    <Header />

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

    <Footer />
{/if}

<style>
    main {
        margin: 0 auto;
    }
</style>