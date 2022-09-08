import React from 'react';
import { Controller, useFieldArray } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import classNames from 'classnames';
import { phoneTypes } from '../../constants/constants';
import Select from '../UI/Select/Select';
import GhostButton from '../UI/GhostButton/GhostButton';
import './PhoneControl.scss';
import { useTranslation } from 'react-i18next';

const PhoneControl = ({ control, name, ...rest }) => {

    const { t } = useTranslation();

    const { className } = rest;

    const { fields, append, remove } = useFieldArray({
        control,
        name
    });

    const addGroup = () => {
        append({
            type: 'work',
            phone: ''
        });
    };

    return (
        <div className={classNames('main-wrapper p-3', className)}>
            <h3 className="label">{ t('PHONES') }</h3>
            <div className="d-flex flex-column">
                {
                    fields && fields.map((field, index) => (
                        <div key={field.id} className="col-12 mb-3">
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <Controller
                                        control={control}
                                        name={`${name}.${index}.type`}
                                        render={({
                                            field: { onChange, onBlur, value }
                                        }) => (
                                            <Select onChange={onChange} onBlur={onBlur} defaultValue={value} options={phoneTypes}/>
                                        )}/>
                                </div>
                                <div className="col-5">
                                    <Controller
                                        control={control}
                                        name={`${name}.${index}.phone`}
                                        render={({
                                            field
                                        }) => {
                                            return <PhoneInput
                                                {...field}
                                                country={'us'}
                                                inputClass={classNames('w-100', 'py-3', 'form-control', 'main-wrapper', 'custom-input')} />;

                                        }}
                                    />
                                </div>
                                <div className="col-3 d-flex align-items-center">
                                    <GhostButton className="add mx-2" name="+" onClick={addGroup}/>
                                    {
                                        fields.length > 1 && (
                                            <GhostButton className="remove" name="-" onClick={() => remove(index)}/>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    );
};

export default PhoneControl;
