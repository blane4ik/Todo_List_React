import React from 'react';
import { useTranslation } from 'react-i18next';
import { useController } from 'react-hook-form';
import ErrorBlock from '../ErrorBlock/ErrorBlock';
import ErrorItem from '../Error/ErrorItem';
import RadioButton from '../UI/RadioButton/RadioButton';

const GenderControl = ({ control, name, ...rest }) => {
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
        <div className="d-flex col-12">
            <div className="d-flex flex-column col-4">
                <RadioButton
                    control={control}
                    {...field}
                    label="MALE"
                    value='male'
                    checked={field.value === 'male'}
                />
                <ErrorBlock errors={error}>
                    {
                        error && (
                            <ErrorItem type={error.type}  message={error.message} params={rules[error.type].params}/>
                        )
                    }
                </ErrorBlock>
            </div>
            <div className="d-flex flex-column col-4">
                <RadioButton
                    control={control}
                    label="FEMALE"
                    {...field}
                    value='female'
                    checked={field.value === 'female'}/>
                <ErrorBlock errors={error}>
                    {
                        error && (
                            <ErrorItem type={error.type}  message={error.message} params={rules[error.type].params}/>
                        )
                    }
                </ErrorBlock>
            </div>
        </div>
    );
};

export default GenderControl;
