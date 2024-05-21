import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'
const meta: Meta<typeof Button> = {
    component: Button,
    tags: ['autodocs'],
    title: 'Components/Button',
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        variant: 'primary',
        size: 'medium',
        children: 'Button',
        disabled: false,
    },
}
export const Secondary: Story = {
    args: {
        variant: 'secondary',
        size: 'medium',
        children: 'Button',
        disabled: false,
    },
}

export const Highlight: Story = {
    args: {
        variant: 'highlight',
        size: 'medium',
        children: 'Button',
        disabled: false,
    },
}
