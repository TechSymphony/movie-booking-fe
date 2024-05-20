import React from 'react'
import { ButtonProps } from './Button.type'
import clsx from 'clsx'

function Button<T extends React.ElementType>({
    size = 'medium',
    variant = 'primary',
    children,
    as,
    ...props
}: ButtonProps<T> &
    Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) {
    const Wrapper = as || 'button'
    return (
        <Wrapper
            className={clsx('rounded-[10px] text-lg font-medium default-btn ', {
                'px-10 py-3': size === 'large',
                'px-10 py-2.5': size === 'medium',
                'px-8 py-2': size === 'small',
                'primary bg-primary-500 text-white outline-secondary-50  focus:outline-2 enabled:hover:hover-btn disabled:bg-primary-800 disabled:text-primary-700':
                    variant === 'primary',
                'secondary bg-secondary-850 text-secondary-300 hover:bg-secondary-800 hover:text-secondary-200 disabled:bg-secondary-900 disabled:text-secondary-800':
                    variant === 'secondary',
                'highlight bg-highlight-500 text-white enabled:hover:bg-highlight-600 disabled:text-highlight-300':
                    variant === 'highlight',
            })}
            {...props}
        >
            {children}
        </Wrapper>
    )
}

export default Button
