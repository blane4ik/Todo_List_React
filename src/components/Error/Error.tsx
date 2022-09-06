import React, { useContext } from 'react';
import { ErrorBlockContext } from '../ErrorBlock/ErrorBlock';
import { FieldValues } from 'react-hook-form';

const Error = ({ type, message }) => {

    const { errors }: FieldValues = useContext(ErrorBlockContext);

    return (
        <div className="d-flex align-items-center">
            {
                errors?.type === type && (
                    <span className="error">{ message }</span>
                )
            }
        </div>
    );
};

export default Error;
