import { Meta, StoryObj } from '@storybook/react/*'
import ExampleForm from './ExampleForm'

const meta: Meta = {
    title: 'Examples/Form',
    component: ExampleForm,
}

export default meta

type Story = StoryObj<typeof ExampleForm>

export const Default: Story = {}
