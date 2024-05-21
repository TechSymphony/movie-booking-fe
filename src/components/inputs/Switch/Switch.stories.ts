import { Meta, StoryObj } from '@storybook/react/*'
import Switch from './Switch'

const meta: Meta = {
    component: Switch,
    tags: ['autodocs'],
    title: 'Components/Switch',
}

export default meta

type Story = StoryObj<typeof Switch>

export const Checked: Story = {
    args: {
        checked: true,
    },
}
