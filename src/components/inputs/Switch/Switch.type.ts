import React from 'react'
import { UseFormRegister } from 'react-hook-form'

export interface SwitchProps extends React.ComponentPropsWithoutRef<'input'> {
    register?: UseFormRegister<any>
}
