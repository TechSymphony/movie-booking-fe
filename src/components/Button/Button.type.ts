import React from 'react'

export interface ButtonProps<T extends React.ElementType> {
    as?: T
    variant?: 'primary' | 'secondary' | 'highlight'
    size?: 'small' | 'medium' | 'large'
    children: React.ReactNode
}
