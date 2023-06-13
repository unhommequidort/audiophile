import ProductCalloutMedium from './ProductCalloutMedium';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProductCalloutMedium> = {
  title: 'Design System/Molecules/Product Callout Medium',
  tags: ['autodocs'],
  component: ProductCalloutMedium,
};

export default meta;
type Story = StoryObj<typeof ProductCalloutMedium>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};
