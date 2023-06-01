import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero', () => {
  it.skip('renders new product details', async () => {
    const Result = await Hero();
    render(Result);

    expect(screen.getByText(/new product/i)).toBeInTheDocument();
    // expect(
    //   screen.getByRole('heading', { name: /xx99 mark ii headphones/i })
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByText(
    //     /experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast/i
    //   )
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByRole('button', { name: /see product/i })
    // ).toBeInTheDocument();
  });
});
