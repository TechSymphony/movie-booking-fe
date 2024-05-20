import { Meta, StoryObj } from '@storybook/react/*'
import Input from './Input'

const meta: Meta<typeof Input> = {
    component: Input,
    tags: ['autodocs'],
    title: 'Components/Input',
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
    args: {
        placeholder: 'Input here...',
        errors: {},
    },
}

export const Email: Story = {
    args: {
        type: 'email',
        name: 'example',
        placeholder: 'Email here...',
    },
    name: 'Type/Email',
}

export const Phone: Story = {
    args: {
        type: 'phone',
        placeholder: '000-123-456',
    },
    name: 'Type/Phone',
}

export const Password: Story = {
    args: {
        type: 'password',
        placeholder: 'Your secret here',
    },
    name: 'Type/Password',
}
