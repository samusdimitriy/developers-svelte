<script>
    import Button from '@svelte-material-ui/button';
    import TextField from '@svelte-material-ui/textfield';
    let name = '';
</script>

<section class="contact-form">
    <TextField label="Your name" bind:value={name} />
    <Button variant="raised" disabled={name === ''}>Send</Button>
</section>

<style>
    .contact-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 400px;
        margin: 0 auto;
        padding: 1rem;
    }
</style>
