import Button from '../components/ui/Button/Button';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Design System/Atoms/Buttons',
  tags: ['autodocs'],
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    intent: 'primary',
    title: 'Button',
    href: '/',
    children: 'See product',
  },
};

export const Secondary: Story = {
  args: {
    intent: 'secondary',
    title: 'Button',
    href: '/',
    children: 'See product',
  },
};

export const Tertiary: Story = {
  args: {
    intent: 'tertiary',
    title: 'Button',
    href: '/',
    children: 'Shop',
  },
};
