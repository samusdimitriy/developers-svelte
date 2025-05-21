// src/components/tests/Header.test.js
import { render, screen } from '@testing-library/svelte';
import Header from '../Header.svelte';
import '@testing-library/jest-dom'; // For expect(...).toBeInTheDocument()

describe('Header Component', () => {
  test('renders the logo and navigation links', () => {
    render(Header);

    // Check for logo (adjust selector/text based on actual logo implementation)
    // Assuming the logo text "DIVelopers" is still findable or part of an aria-label
    expect(screen.getByText(/DI/)).toBeInTheDocument(); 
    expect(screen.getByText(/Velopers/)).toBeInTheDocument(); 

    // Check for navigation links
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Works')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
