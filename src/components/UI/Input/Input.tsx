import React, { ForwardedRef, forwardRef } from 'react';
import "./Input.scss";
import classNames from 'classnames';

const Input = forwardRef((props: any, ref: ForwardedRef<HTMLInputElement>) => {

    const { className, type, ...rest } = props;
    const inputType: string = type ? type : 'text';
    const isInvalid = rest.control?.getFieldState(rest.name).invalid;
    const inputClasses = classNames('w-100', 'h-100', 'form-control', 'main-wrapper', 'custom-input', { error: isInvalid }, className);

    return (
        <input ref={ref} type={inputType} {...rest} className={inputClasses}/>
    );
});

export default Input;
