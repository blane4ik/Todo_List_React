import React, { ForwardedRef, forwardRef, useEffect } from 'react';
import "./Input.scss";

const Input = forwardRef((props: any, ref: ForwardedRef<HTMLInputElement>) => {

    const { className, type, ...rest } = props;
    const inputType: string = type ? type : 'text';
    const inputClasses = getClasses();

    function getClasses() {
        const isInvalid = rest.control?.getFieldState(rest.name).invalid;
        const classes = ['w-100', 'h-100', 'form-control', 'main-wrapper', 'custom-input'];
        const outerClasses = className?.split(' ');
        if (isInvalid) {
            classes.push('error')
        }

        return classes.concat(outerClasses).join(' ');
    }
    return (
        <input ref={ref} type={inputType} {...rest} className={inputClasses}/>
    );
});

export default Input;
