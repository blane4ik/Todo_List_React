import React, { forwardRef } from 'react';
import Input from '../Input/Input';
import { useTranslation } from 'react-i18next';

const NamedInput = forwardRef(({ label, ...args }: any, ref) => {
    const { t } = useTranslation();

    const { className, errors, ...rest } = args;
    const defaultClasses = 'd-flex flex-column mb-4 ';

    return (
        <div className={defaultClasses + className}>
            <h5 className="label mb-2">{ t(label) }</h5>
            <Input  ref={ref} { ...rest } className="p-3" />
        </div>
    );
});

export default NamedInput;
