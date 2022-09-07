import React from 'react';
import './Select.scss';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

const Select = ({ ...args }) => {
    const { t } = useTranslation();

    const { className, options, ...rest } = args;
    const defaultClasses = classNames('custom-select', 'form-select', 'main-wrapper', className);
    return (
        <select { ...rest } className={defaultClasses}>
            {
                options.length && options.map(option => {
                    return <option key={option.id} value={option.value}>{ t(option.label) }</option>;
                })
            }
        </select>
    );
};

export default Select;
