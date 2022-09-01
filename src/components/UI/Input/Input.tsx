import React from 'react';

const Input = ({ ...args }) => {

    const { className, type, ...rest } = args;
    const inputType: string = type ? type : 'text';
    const defaultClasses = 'w-100 h-100 form-control main-wrapper ';
    return (
        <input {...rest} type={inputType} className={defaultClasses + className}/>
    );
};

export default Input;
