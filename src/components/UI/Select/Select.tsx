import React from 'react';
import './Select.scss';
import { useTranslation } from 'react-i18next';

const Select = ({ ...args }) => {
    const { t } = useTranslation();

    const { className, options, ...rest } = args;
    const defaultClasses = 'custom-select form-select main-wrapper ';
    return (
        <select { ...rest } className={defaultClasses + className}>
            {
                options && options.map(option => {
                    return <option key={option.id} value={option.value}>{ t(option.label) }</option>
                })
            }
        </select>
    );
};

export default Select;
