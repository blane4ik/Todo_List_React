import React from 'react';
import 'react-phone-input-2/lib/style.css';
import GhostButton from '../../components/UI/GhostButton/GhostButton';
import { useForm } from 'react-hook-form';
import InputControl from '../../components/InputControl/InputControl';
import { emailValidator, minValueValidator, requiredValidator } from '../../core/custom-validators';
import PhoneControl from '../../components/PhoneControl/PhoneControl';
import GenderControl from '../../components/GenderControl/GenderControl';
import CheckboxControl from '../../components/CheckboxControl/CheckboxControl';

const SignUp = () => {

    const {
        handleSubmit,
        control
    } = useForm({
        defaultValues: {
            name: 'Sergey',
            surname: 'surname',
            email: 'email',
            age: 2,
            agreement: true,
            gender: 'male',
            phones: [
                {
                    type: 'work',
                    phone: ''
                }
            ]
        } as any
    });


    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-100">
            <InputControl label="NAME" control={control} name="name" rules={{
                required: requiredValidator()
            }}/>
            <InputControl label="SURNAME" control={control} name="surname" rules={{
                required: requiredValidator()
            }}/>
            <InputControl label="EMAIL" control={control} name="email" rules={{
                required: requiredValidator(),
                validate: emailValidator
            }}/>
            <InputControl label="AGE" control={control} name="age" rules={{
                required: requiredValidator(),
                min: minValueValidator(18)
            }}/>
            <CheckboxControl control={control} className="mb-3" name="agreement" rules={{
                required: requiredValidator(true)
            }}/>
            <GenderControl control={control} name="gender"/>
            <PhoneControl control={control} name={'phones'} className="my-3"/>

            <GhostButton name="Submit" className="p-3"/>
        </form>
    );
};
export default SignUp;
