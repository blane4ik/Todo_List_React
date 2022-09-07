import React, { createContext } from 'react';
import ErrorItem from '../Error/ErrorItem';

export const ErrorBlockContext = createContext({
    errors: null
});

const ErrorBlock = ({ children, errors }) => {

    return (
        <ErrorBlockContext.Provider value={{errors}}>
            <div className="d-flex flex-column">
                {
                    children
                }
            </div>
        </ErrorBlockContext.Provider>
    );
};

ErrorBlock.Error = ErrorItem;

export default ErrorBlock;
