import React, { forwardRef } from 'react';
import "./RoundCheckBox.scss";
import classNames from 'classnames';

const RoundCheckbox = forwardRef(({ ...args }: any, ref) => {
    const { className, ...rest } = args;

    return (
        <label className={classNames('checkbox-container', className)}>
            <input ref={ref} { ...rest } type="checkbox"/>
            <span className="checkmark"></span>
        </label>
    );
});

RoundCheckbox.displayName = 'RoundCheckbox';

export default RoundCheckbox;
