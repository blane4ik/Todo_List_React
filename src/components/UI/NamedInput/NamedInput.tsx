import React, { ForwardedRef, forwardRef } from 'react';
import Input from '../Input/Input';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

const NamedInput = forwardRef(({ label, ...args }: any, ref: ForwardedRef<HTMLInputElement>) => {
    const { t } = useTranslation();

    const { className, element, ...rest } = args;
    const defaultClasses = classNames('d-flex', 'flex-column', 'mb-4', className);
    return (
        <div className={defaultClasses}>
            <h5 className="label mb-2">{ t(label) }</h5>
            {
                element ?? (
                    <Input  ref={ref} { ...rest } className="p-3" />
                )
            }
        </div>
    );
});

NamedInput.displayName = 'NamedInput';

export default NamedInput;
