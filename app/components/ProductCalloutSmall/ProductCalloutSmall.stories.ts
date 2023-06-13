import ProductCalloutSmall from './ProductCalloutSmall';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProductCalloutSmall> = {
  title: 'Design System/Molecules/Product Callout Small',
  tags: ['autodocs'],
  component: ProductCalloutSmall,
};

export default meta;
type Story = StoryObj<typeof ProductCalloutSmall>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};
