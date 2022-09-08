import React from 'react';
import NamedInput from '../UI/NamedInput/NamedInput';
import { useController } from 'react-hook-form';
import ErrorBlock from '../ErrorBlock/ErrorBlock';
import ErrorItem from '../Error/ErrorItem';

const InputControl = ({ label, control, name, ...rest }) => {
    const { rules } = rest;
    const {
        field,
        fieldState: { error }
    } = useController({
        name,
        control,
        rules
    });

    return (
        <div className="d-flex flex-column">
            <NamedInput
                control={control}
                label={label}
                {...field}/>
            <ErrorBlock errors={error}>
                {
                    error && (
                        <ErrorItem type={error.type}  message={error.message} params={rules[error.type].params}/>
                    )
                }
            </ErrorBlock>
        </div>
    );
};

export default InputControl;
