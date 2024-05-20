import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../components/inputs/Input'
import Button from '../../components/Button'
import Switch from '../../components/inputs/Switch'

function ExampleForm() {
    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validation = yup.object().shape({
        email: yup.string().email('Test').required(),
        password: yup.string().min(8).required(),
        phone: yup.string().matches(phoneRegExp, 'Invalid phone number'),
        switch: yup.boolean(),
    })

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            email: '123',
        },
        resolver: yupResolver(validation),
    })

    const submit = (data: any) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input
                errors={errors}
                name="email"
                type="email"
                register={register}
            />
            <Input
                errors={errors}
                name="password"
                type="password"
                register={register}
            />
            <Input
                errors={errors}
                name="phone"
                type="phone"
                register={register}
            />

            <Switch name="switch" register={register} />
            <Button as="button" type={'submit'}>
                Submit
            </Button>
        </form>
    )
}

export default ExampleForm
