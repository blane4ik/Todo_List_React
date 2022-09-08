import React, { useContext } from 'react';
import { ErrorBlockContext } from '../ErrorBlock/ErrorBlock';
import { FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const ErrorItem = ({ type, message, ...rest }) => {
    const { params } = rest;
    const { t } = useTranslation();
    const { errors }: FieldValues = useContext(ErrorBlockContext);

    return (
        <div className="d-flex align-items-center">
            {
                errors?.type === type && (
                    <span className="error">{ t(message, params) }</span>
                )
            }
        </div>
    );
};

export default ErrorItem;
