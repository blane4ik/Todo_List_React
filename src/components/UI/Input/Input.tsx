import React, { ForwardedRef, forwardRef } from 'react';
import "./Input.scss";

const Input = forwardRef((props: any, ref: ForwardedRef<HTMLInputElement>) => {

    const { className, type, ...rest } = props;
    const inputType: string = type ? type : 'text';
    const defaultClasses = 'w-100 h-100 form-control main-wrapper custom-input ';
    return (
        <input ref={ref} type={inputType} {...rest} className={defaultClasses + className}/>
    );
});

export default Input;
