import { screen, render } from '@testing-library/react';

import ProductCalloutMedium from './ProductCalloutMedium';

describe('ProductCalloutMedium', () => {
  it('renders ProductCalloutMedium component', () => {
    render(<ProductCalloutMedium />);
    expect(screen.getByRole('heading', { name: /ZX7 Speaker/i }));
    expect(screen.getByRole('link', { name: /see zx7 speaker details/i }));
  });
});
