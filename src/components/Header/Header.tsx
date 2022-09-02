import React, { useState } from 'react';
import classes from './Header.module.scss';
import GhostButton from '../UI/GhostButton/GhostButton';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { useGetArrowClasses } from '../../hooks/header-hooks';
import FilterPanel from '../FilterPanel/FilterPanel';
import LanguageDropdown from '../UI/LanguageDropdown/LanguageDropdown';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { RoutesPath } from '../../enums/routes-path.enum';

const Header = () => {
    const { t } = useTranslation();
    const location = useLocation();

    const [filterIsActive, setFilterIsActive] = useState(false);
    const arrowClasses = useGetArrowClasses(filterIsActive);

    function handle(e) {
    }

    function filterArrowHandler() {
        setFilterIsActive(!filterIsActive);
    }

    return (
        <div className="d-flex w-100 flex-column position-relative">
            <div className={classes.headerContainer + ' main-wrapper'}>
                <span>
                    <img className={classes.logo} src="my_logo.png" alt="oops"/>
                </span>
                <div className="d-flex flex-column align-items-center justify-content-between">
                    <h2 className="label">{ t("TODO_LIST_LABEL") }</h2>
                    {
                        location.pathname === RoutesPath.TODO && (
                            <div className="p-3" onClick={filterArrowHandler}>
                                <MdOutlineDoubleArrow className={arrowClasses.join(' ')}/>
                            </div>
                        )
                    }
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <LanguageDropdown />
                    <GhostButton name={t('LOGIN')} className="px-5 py-3" onClick={handle}/>
                </div>
            </div>
            <FilterPanel filterIsActive={filterIsActive} />
        </div>
    );
};

export default Header;
