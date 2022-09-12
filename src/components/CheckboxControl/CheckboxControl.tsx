import React from 'react';
import { useController } from 'react-hook-form';
import ErrorBlock from '../ErrorBlock/ErrorBlock';
import ErrorItem from '../Error/ErrorItem';
import RoundCheckbox from '../UI/RoundCheckbox/RoundCheckbox';
import "./CheckboxControl.scss";
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

const CheckboxControl = ({ control, name, ...rest }) => {
    const { rules, className } = rest;
    const { t } = useTranslation();
    const {
        field,
        fieldState: { error }
    } = useController({
        name,
        control,
        rules
    });

    return (
        <div className={classNames('d-flex position-relative', className)}>
            <div className="d-flex flex-column">
                <RoundCheckbox
                    control={control}
                    {...field}
                    checked={field.value}/>
                <ErrorBlock errors={error}>
                    {
                        error && (
                            <ErrorItem type={error.type}  message={error.message} params={rules[error.type].params}/>
                        )
                    }
                </ErrorBlock>
            </div>
            <span className="label checkbox-label">{ t('ACCEPT_AGREEMENT') }</span>
        </div>
    );
};

export default CheckboxControl;
