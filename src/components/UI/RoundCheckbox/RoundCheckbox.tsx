import React from 'react';
import "./RoundCheckBox.scss";
import classNames from 'classnames';

const RoundCheckbox = ({ ...args }) => {
    const { className, ...rest } = args;

    const defaultClasses: string = classNames('checkbox-container', className);

    return (
        <label className={defaultClasses}>
            <input { ...rest } type="checkbox"/>
            <span className="checkmark"></span>
        </label>
    );
};

export default RoundCheckbox;
