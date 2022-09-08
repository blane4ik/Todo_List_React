import React from 'react';
import { useTranslation } from 'react-i18next';
import './Main.scss';
import { Outlet } from 'react-router-dom';

const Main = () => {
    const { t } = useTranslation();

    return (
        <div className="w-100 main-container d-flex justify-content-center">
            <div className="d-flex flex-column col-8 align-items-center">
                <h1 className="label mb-2">{ t("GREETING_LABEL") }</h1>
                <div className="col-8 pb-3">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Main;
