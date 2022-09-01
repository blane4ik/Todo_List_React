import React from 'react';
import "./RoundCheckBox.scss";

const RoundCheckbox = ({ ...args }) => {
    const { className, ...rest } = args;

    const defaultClasses: string = 'checkbox-container ';

    return (
        <label className={defaultClasses + className}>
            <input { ...rest } type="checkbox"/>
            <span className="checkmark"></span>
        </label>
    );
};

export default RoundCheckbox;
