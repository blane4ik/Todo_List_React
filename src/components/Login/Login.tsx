import React from 'react';
import { useTranslation } from 'react-i18next';
import GhostButton from '../UI/GhostButton/GhostButton';
import './Login.scss';
import NamedInput from '../UI/NamedInput/NamedInput';
import { Link } from 'react-router-dom';
import { RoutesPath } from '../../enums/routes-path.enum';
import { useForm } from 'react-hook-form';
import { emailRegEx, passwordMinLength } from '../../constants/constants';
import ErrorBlock from '../ErrorBlock/ErrorBlock';
import { useDispatch } from 'react-redux';
import { userLoginEffect } from '../../store/effects/user-effects';

const Login = () => {
    const { t } = useTranslation();
    const dispatch: any = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function onSubmit(userData) {
        dispatch(userLoginEffect(userData));
    }

    return (
        <div className="w-100 h-100">
            <form onSubmit={handleSubmit(onSubmit)}>
                <NamedInput {...register('email', { required: true, pattern: emailRegEx })} label="EMAIL" />
                <ErrorBlock errors={errors.email}>
                    <ErrorBlock.Error type="required" message={t('ERRORS.REQUIRED')} />
                    <ErrorBlock.Error type="pattern" message={t("ERRORS.PATTERN_EMAIL")} />
                </ErrorBlock>
                <NamedInput {...register('password', { required: true, minLength: passwordMinLength })} label="PASSWORD" />
                <ErrorBlock errors={errors.password}>
                    <ErrorBlock.Error type="required" message={t('ERRORS.REQUIRED')} />
                    <ErrorBlock.Error type="minLength" message={t("ERRORS.MIN_LENGTH", { amount: passwordMinLength })} />
                </ErrorBlock>
                <hr/>
                <GhostButton type="submit" className="p-3 mb-3" name={t('ENTER')} />
                <div className="d-flex align-items-center justify-content-between px-2">
                    <Link to={RoutesPath.FORGOT_PASSWORD} className="login-link">{ t('FORGOT_PASSWORD') }</Link>
                    <Link to={RoutesPath.SIGN_UP} className="login-link">{ t('SIGN_UP') }</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
