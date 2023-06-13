import { screen, render } from '@testing-library/react';

import ProductCalloutSmall from './ProductCalloutSmall';

describe('ProductCalloutMedium', () => {
  it('renders ProductCalloutMedium component', () => {
    render(<ProductCalloutSmall />);
    expect(screen.getByRole('img', { name: /yx1 earphones/i }));
    expect(screen.getByRole('heading', { name: /yx1 earphones/i }));
    expect(screen.getByRole('link', { name: /see yx1 earphones details/i }));
  });
});
