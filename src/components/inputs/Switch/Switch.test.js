import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Switch from './Switch'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const DemoForm = ({ func }) => {
    const validation = yup.object().shape({
        switchInput: yup.boolean(),
    })

    const { handleSubmit, register, reset } = useForm({
        resolver: yupResolver(validation),
        defaultValues: {
            switchInput: true,
        },
    })

    const submit = async (data) => {
        await func(data.switchInput)
        reset()
    }

    return (
        <form data-testid="form" onSubmit={handleSubmit(submit)}>
            <Switch
                name="switchInput"
                data-testid="input-checkbox"
                register={register}
            />
            <button type="submit">SUBMIT</button>
        </form>
    )
}

describe('Testing: Switch', () => {
    describe('with react-hook-form', () => {
        it('should render with defaultValue', () => {
            const view = render(<DemoForm />)

            expect(screen.getByTestId('input-checkbox')).toBeChecked()
            view.unmount()
        })

        it('should unchecked when clicked', () => {
            const view = render(<DemoForm />)
            const switchInput = screen.getByTestId('input-checkbox')

            userEvent.click(switchInput)

            expect(switchInput).not.toBeChecked()

            view.unmount()
        })

        it('should be false when submit', async () => {
            const mockSubmit = jest.fn((switchInput) => {
                return Promise.resolve({ switchInput })
            })
            const view = render(<DemoForm func={mockSubmit} />)
            const switchInput = screen.getByTestId('input-checkbox')

            userEvent.click(switchInput)

            expect(switchInput).not.toBeChecked()
            const form = screen.getByTestId('form')
            fireEvent.submit(form)
            await waitFor(() => expect(switchInput).toBeInTheDocument())
            expect(mockSubmit).toBeCalledWith(false)

            view.unmount()
        })
    })
})
