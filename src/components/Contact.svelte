<script>
    import { onMount } from 'svelte';

    let contactInfo = {
        address: "123 Berlin, Germany",
        phone: "+49 123 456 7890",
        email: "info@divelopers.gmail.com"
    };

    let form = {
        name: '',
        email: '',
        message: ''
    };

    function handleSubmit() {
        alert(`Thank you for your message, ${form.name}!`);
        form = {
            name: '',
            email: '',
            message: ''
        };
    }

    onMount(() => {
        if (typeof gsap !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);

            gsap.from(".contact h1", {
                scrollTrigger: {
                    trigger: ".contact h1",
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                duration: 1,
                y: -50,
                opacity: 0,
                ease: "power2.out"
            });

            gsap.from(".contact-info p", {
                scrollTrigger: {
                    trigger: ".contact-info",
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                duration: 1,
                x: -50,
                opacity: 0,
                stagger: 0.2,
                ease: "power2.out"
            });

            gsap.from(".contact-form", {
                scrollTrigger: {
                    trigger: ".contact-form",
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                duration: 1,
                y: 50,
                opacity: 0,
                ease: "power2.out"
            });
        } else {
            console.error("GSAP не загружен.");
        }
    });
</script>

<section class="contact">
    <div class="container">
        <h1>Contact us</h1>
        <div class="contact-info">
            <p><strong>Address:</strong> {contactInfo.address}</p>
            <p><strong>Phone:</strong> {contactInfo.phone}</p>
            <p><strong>Email:</strong> <a href="mailto:{contactInfo.email}">{contactInfo.email}</a></p>
        </div>

        <form class="contact-form" on:submit|preventDefault={handleSubmit}>
            <input type="text" placeholder="Your name" bind:value={form.name} required />
            <input type="email" placeholder="Your email" bind:value={form.email} required />
            <textarea placeholder="Your message" bind:value={form.message} required></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
</section>

<style>
    .contact {
        padding: 4rem 2rem;
        background-color: #002642;
        color: #ffffff;
    }

    .container {
        max-width: 800px;
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

    .contact-info {
        margin-bottom: 2rem;
        font-size: 1.25rem;
    }

    .contact-info p {
        margin: 0.5rem 0;
    }

    .contact-info a {
        color: #00aaff;
        text-decoration: none;
    }

    .contact-info a:hover {
        text-decoration: underline;
    }

    .contact-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }

    .contact-form input,
    .contact-form textarea {
        width: 100%;
        max-width: 500px;
        padding: 0.75rem 1rem;
        font-size: 1rem;
        border: none;
        border-radius: 2rem;
        background-color: #01334d;
        color: #ffffff;
        font-family: 'Roboto', sans-serif;
    }

    .contact-form input::placeholder,
    .contact-form textarea::placeholder {
        color: #aacbd8;
    }

    .contact-form textarea {
        resize: vertical;
        height: 150px;
    }

    .contact-form button {
        padding: 0.75rem 2rem;
        font-size: 1rem;
        background-color: #00aaff;
        color: #ffffff;
        border: none;
        border-radius: 2rem;
        cursor: pointer;
        font-family: 'Roboto', sans-serif;
        transition: background-color 0.3s ease, transform 0.3s ease;
    }

    .contact-form button:hover {
        background-color: #0077cc;
        transform: scale(1.05);
    }

    @media (max-width: 600px) {
        h1 {
            font-size: 2rem;
        }

        .contact-info {
            font-size: 1rem;
        }

        .contact-form input,
        .contact-form textarea {
            max-width: 100%;
        }
    }
</style>