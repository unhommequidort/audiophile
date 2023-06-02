import { screen, render } from '@testing-library/react';

import ProductCalloutLarge from './ProductCalloutLarge';

describe('ProductCalloutLarge', () => {
  it('renders a ProductCalloutLarge correctly', () => {
    render(<ProductCalloutLarge />);
    expect(screen.getByRole('img', { name: /zx9 speaker/i }));
    expect(screen.getByRole('heading', { name: /zx9 speaker/i }));
    expect(screen.getByRole('link', { name: /See ZX9 Speaker details/i }));
  });
});
