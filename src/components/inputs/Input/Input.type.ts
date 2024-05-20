import React from 'react'
import { FieldErrors } from 'react-hook-form'

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
    errors?: FieldErrors
    register?: any
    type?: 'email' | 'password' | 'phone'
}
