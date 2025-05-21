// src/components/tests/Footer.test.js
import { render, screen } from '@testing-library/svelte';
import Footer from '../Footer.svelte';
import '@testing-library/jest-dom';

describe('Footer Component', () => {
  test('renders the copyright text', () => {
    render(Footer);
    const copyrightText = screen.getByText(/© 2024 DIVelopers. All rights reserved./i);
    expect(copyrightText).toBeInTheDocument();
  });

  test('renders social media links', () => {
    render(Footer);
    // Check for the presence of social media links by their names
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('Twitter')).toBeInTheDocument();
  });
});
