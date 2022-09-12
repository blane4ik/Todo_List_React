import React from 'react';
import 'react-phone-input-2/lib/style.css';
import GhostButton from '../../components/UI/GhostButton/GhostButton';
import { useForm } from 'react-hook-form';
import InputControl from '../../components/InputControl/InputControl';
import { emailValidator, minLengthValidator, minValueValidator, requiredValidator } from '../../core/custom-validators';
import PhoneControl from '../../components/PhoneControl/PhoneControl';
import GenderControl from '../../components/GenderControl/GenderControl';
import CheckboxControl from '../../components/CheckboxControl/CheckboxControl';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpUserEffect } from '../../store/effects/user-effects';

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch: any = useDispatch();
    const {
        handleSubmit,
        control,
        watch
    } = useForm({
        defaultValues: {
            name: '',
            surname: '',
            email: '',
            password: '',
            confirm_password: '',
            age: '',
            agreement: false,
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
        const userData = {
            name: data.name,
            surname: data.surname,
            email: data.email,
            password: data.password,
            age: data.age,
            gender: data.gender,
            phones: [...data.phones]
        };
        dispatch(signUpUserEffect({ userData, navigate }));
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
            <InputControl label="PASSWORD" type="password" control={control} name="password" rules={{
                required: requiredValidator(),
                min: minLengthValidator(6)
            }}/>
            <InputControl label="CONFIRM_PASSWORD" type="password" control={control} name="confirm_password" rules={{
                required: requiredValidator(),
                validate: (val) => {
                    return val === watch('password') || 'ERRORS.CONFIRM_PASSWORD';
                },
            }}/>
            <InputControl label="AGE" control={control} name="age" rules={{
                required: requiredValidator(),
                min: minValueValidator(18)
            }}/>
            <GenderControl control={control} name="gender"/>
            <PhoneControl control={control} name={'phones'} className="my-3"/>

            <CheckboxControl control={control} className="my-5" name="agreement" rules={{
                required: requiredValidator(true)
            }}/>

            <div className="d-flex col-6 p-0">
                <GhostButton name="Back" type="button" onClick={() => navigate('/')} className="p-3 col-3"/>
                <GhostButton name="Submit" type="submit" className="p-3 mx-3 col-3"/>
            </div>
        </form>
    );
};
export default SignUp;
