<script>
    // TODO: Replace '#' with your actual social media profile URLs
    let socialLinks = [
        { name: "GitHub", url: "#", iconClass: "fab fa-github" },
        { name: "LinkedIn", url: "#", iconClass: "fab fa-linkedin-in" },
        { name: "Twitter", url: "#", iconClass: "fab fa-twitter" }
    ];
</script>

<footer class="footer">
    <div class="container">
        <p>&copy; 2024 DIVelopers. All rights reserved.</p>
        <div class="social-icons">
            {#each socialLinks as link}
                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                    {link.name}
                </a>
            {/each}
        </div>
    </div>
</footer>

<style>
    .footer {
        background-color: #0A2A43;
        color: #ffffff;
        padding: 2rem 0;
        text-align: center;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        font-family: 'Roboto', sans-serif;
    }

    .footer p {
        margin: 0;
        font-size: 1rem;
    }

    .social-icons {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    .social-icons a {
        color: #ffffff;
        font-size: 1.5rem;
        transition: color 0.3s ease;
    }

    .social-icons a:hover {
        color: #17A2B8; /* New accent color */
    }
</style>