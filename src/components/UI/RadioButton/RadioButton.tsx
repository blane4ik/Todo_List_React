import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import './RadioButton.scss';

const RadioButton = forwardRef(({ label, ...args }: any, ref) => {
    const { t } = useTranslation();
    const { className, ...rest } = args;

    return (
        <div className="d-flex align-items-center">
            <input type="radio" {...rest} className={classNames('form-check radio-button', className)}/>
            <span className="label mx-2">{ t(label) }</span>
        </div>
    );
});

RadioButton.displayName = 'RadioButton';

export default RadioButton;
