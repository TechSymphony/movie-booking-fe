import React from 'react'
import { InputProps } from './Input.type'
import { IconMailFilled, IconPhoneFilled } from '@tabler/icons-react'
import clsx from 'clsx'

function Input({ id, name, errors, register, type, ...props }: InputProps) {
    return (
        <label htmlFor={id} className="block">
            <div className="peer flex w-fit items-center  justify-center gap-3 rounded-[4px] border border-borderColor bg-white/10 px-[15px] py-2 text-base font-medium">
                {type === 'email' && (
                    <IconMailFilled className="mail h-5 w-5 text-white" />
                )}
                {type === 'phone' && (
                    <IconPhoneFilled className="phone h-5 w-5 text-white" />
                )}

                <input
                    type={type}
                    id={id}
                    className={clsx(
                        ' flex-1 bg-transparent text-white outline-none',
                        {
                            error: errors?.[name!],
                        }
                    )}
                    {...props}
                    {...(register && register(name))}
                />
            </div>
            <span
                role="alert"
                className="invisible block text-sm text-highlight-500 peer-has-[.error]:visible"
            >
                {errors?.[name!]?.message?.toString()}
            </span>
        </label>
    )
}

export default Input
