import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import * as yup from 'yup'
import Input from './Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

const DemoForm = ({ func }) => {
    const validation = yup.object().shape({
        input: yup.string().required('is needed'),
    })

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validation),
        defaultValues: {
            input: '123',
        },
    })

    const submit = async (data) => {
        await func(data.input)
        reset()
    }

    return (
        <form data-testid="form" onSubmit={handleSubmit(submit)}>
            <Input
                data-testid="input"
                name="input"
                register={register}
                errors={errors}
            />
            <button type="submit">SUBMIT</button>
        </form>
    )
}

describe('Testing: Input', () => {
    it('should render as a textfield', () => {})

    it('should render as a textarea', () => {})

    describe('User Interaction', () => {
        it('enter value to input', () => {
            const view = render(<Input placeholder="Input" />)
            const input = screen.getByPlaceholderText('Input')
            fireEvent.change(input, { target: { value: '123' } })
            expect(input).toHaveValue('123')
            view.unmount()
        })
    })

    describe('with react-hook-form', () => {
        it('should have defaultValue when rendered', async () => {
            const view = render(<DemoForm />)
            const input = await screen.findByTestId('input')
            expect(input).toHaveValue('123')
            view.unmount()
        })
        it('should render error when input is empty', async () => {
            const func = jest.fn()
            const view = render(<DemoForm func={func} />)
            const input = screen.getByTestId('input')
            fireEvent.change(input, { target: { value: '' } })
            const form = screen.getByTestId('form')
            fireEvent.submit(form)
            await waitFor(() => expect(input).toHaveClass('error'))
            view.unmount()
        })
    })
})
