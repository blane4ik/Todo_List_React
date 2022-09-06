import React, { createContext } from 'react';
import Error from '../Error/Error';

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

ErrorBlock.Error = Error;

export default ErrorBlock;
