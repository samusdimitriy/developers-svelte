// src/components/tests/Hero.test.js
import { render, screen } from '@testing-library/svelte';
import Hero from '../Hero.svelte';
import '@testing-library/jest-dom';

describe('Hero Component', () => {
  test('renders the main title', () => {
    // The Hero component has a prop 'title' which defaults
    // We can pass a specific title or test the default one.
    // Let's test the default one for simplicity here.
    render(Hero);

    // The default title is "Innovative Web Solutions by DIVelopers"
    expect(screen.getByText(/Innovative Web Solutions by DIVelopers/i)).toBeInTheDocument();
  });

  test('renders with a custom title prop', () => {
    const customTitle = "Welcome to Our Awesome Site!";
    render(Hero, { props: { title: customTitle } });
    expect(screen.getByText(customTitle)).toBeInTheDocument();
  });
});
