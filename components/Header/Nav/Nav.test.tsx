import { render, screen } from '@testing-library/react';

import Nav from './Nav';
// import '@testing-library/jest-dom';

describe('Nav', () => {
  it('renders the nav', async () => {
    render(await Nav());
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/speakers/i)).toBeInTheDocument();
    expect(screen.getByText(/headphones/i)).toBeInTheDocument();
    expect(screen.getByText(/Earphones/i)).toBeInTheDocument();
  });
});
