import TextField from '../components/ui/TextField/TextField';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TextField> = {
  title: 'Design System/Atoms/Text Field',
  tags: ['autodocs'],
  component: TextField,
};

export default meta;
type Story = StoryObj<typeof TextField>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    intent: 'default',
    id: 'name',
    name: 'name',
    label: 'Name',
    type: 'text',
    disabled: false,
    placeholder: 'Insert your name',
  },
};
