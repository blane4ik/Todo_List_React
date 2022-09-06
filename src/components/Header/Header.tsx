import React, { useState } from 'react';
import classes from './Header.module.scss';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import FilterPanel from '../FilterPanel/FilterPanel';
import LanguageDropdown from '../UI/LanguageDropdown/LanguageDropdown';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { RoutesPath } from '../../enums/routes-path.enum';
import UserDropdown from '../UI/UserDropdown/UserDropdown';
import logo from '../../static/images/my_logo.png';
import classNames from 'classnames';

const Header = () => {
    const { t } = useTranslation();
    const location = useLocation();

    const [filterIsActive, setFilterIsActive] = useState(false);
    const arrowClasses = classNames(classes.filterArrow, { [classes.activeFilter]: filterIsActive })

    return (
        <div className="d-flex w-100 flex-column position-relative">
            <div className={classes.headerContainer + ' main-wrapper'}>
                <span>
                    <img className={classes.logo} src={logo} alt="oops"/>
                </span>
                <div className="d-flex flex-column align-items-center justify-content-between">
                    <h2 className="label">{ t("TODO_LIST_LABEL") }</h2>
                    {
                        location.pathname === RoutesPath.TODO && (
                            <div className="p-3" onClick={() => setFilterIsActive(!filterIsActive)}>
                                <MdOutlineDoubleArrow className={arrowClasses}/>
                            </div>
                        )
                    }
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <LanguageDropdown />
                    <UserDropdown/>
                </div>
            </div>
            <FilterPanel filterIsActive={filterIsActive} />
        </div>
    );
};

export default Header;
