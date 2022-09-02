import React, { useContext } from 'react';
import { ErrorBlockContext } from '../ErrorBlock/ErrorBlock';

const Error = ({ type, message }) => {

    const { errors }: any = useContext(ErrorBlockContext);

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
