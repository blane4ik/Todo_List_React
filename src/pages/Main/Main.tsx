import React from 'react';
import { useTranslation } from 'react-i18next';
import Login from '../../components/Login/Login';
import './Main.scss';

const Main = () => {
    const { t } = useTranslation();

    return (
        <div className="w-100 main-container d-flex justify-content-center">
            <div className="d-flex flex-column">
                <h1 className="label mb-2">{ t("GREETING_LABEL") }</h1>
                <div className="p-5">
                    <Login/>
                </div>
            </div>
        </div>
    );
};

export default Main;
