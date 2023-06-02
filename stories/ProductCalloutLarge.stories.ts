import ProductCalloutLarge from '../app/components/ProductCalloutLarge/ProductCalloutLarge';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProductCalloutLarge> = {
  title: 'Design System/Molecules/Product Callout Large',
  tags: ['autodocs'],
  component: ProductCalloutLarge,
};

export default meta;
type Story = StoryObj<typeof ProductCalloutLarge>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};
