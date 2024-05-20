import { render, screen } from '@testing-library/react'
import Button from './Button'

const handleOnClick = jest.fn()

describe('Testing: Button', () => {
    it('should render as an anchor', () => {
        render(
            <Button as="a" href="/">
                Link
            </Button>
        )
        const button = screen.getByText(/Link/)
        expect(button.tagName).toBe('A')
        expect(button).toHaveAttribute('href')
    })

    it('should run when click', () => {
        render(<Button onClick={handleOnClick}>Click</Button>)
        const button = screen.getByText(/Click/)
        button.click()
        expect(handleOnClick).toHaveBeenCalled()
    })

    it('should be primary button', () => {
        render(<Button variant="primary">Primary</Button>)
        const button = screen.getByText(/Primary/)
        expect(button).toHaveClass('primary')
    })

    it('should be secondary button', () => {
        render(<Button variant="secondary">Secondary</Button>)
        const button = screen.getByText(/Secondary/)
        expect(button).toHaveClass('secondary')
    })

    it('should be highlight button', () => {
        render(<Button variant="highlight">Highlight</Button>)
        const button = screen.getByText(/Highlight/)
        expect(button).toHaveClass('highlight')
    })

    it("shouldn't be clickable when disable", () => {
        render(<Button disabled>Disable</Button>)
        const button = screen.getByText(/Disable/)
        expect(button).toBeDisabled()
    })
})
