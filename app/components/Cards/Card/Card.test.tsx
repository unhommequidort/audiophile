import { screen, render } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('should render the Card component correctly', () => {
    render(<Card category="headphones" />);
    const img = screen.getByRole('img', { name: /shop headphones/i });
    expect(img).toBeInTheDocument();
    const title = screen.getByRole('heading', { name: /headphones/i });
    expect(title).toBeInTheDocument();
    const button = screen.getAllByRole('link', { name: /shop headphones/i });
    expect(button).toHaveLength(2);
  });
});
