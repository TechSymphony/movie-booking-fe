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
            className={clsx(
                'rounded-3xl text-lg font-semibold text-white md:hover:opacity-90',
                {
                    'px-10 py-3': size === 'large',
                    'px-10 py-2.5': size === 'medium',
                    'px-8 py-2': size === 'small',
                    'from-gradientStart primary via-gradientMid to-gradientStop bg-gradient-to-r ':
                        variant === 'primary',
                    'bg-borderColor secondary': variant === 'secondary',
                    'bg-highlight highlight': variant === 'highlight',
                }
            )}
            {...props}
        >
            {children}
        </Wrapper>
    )
}

export default Button
