import React, { useCallback } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../store/selectors/user-selectors';
import { useTranslation } from 'react-i18next';
import { Dispatch } from '@reduxjs/toolkit';
import { clearUserInfo } from '../../../store/reducers/user-reducer';
import { useNavigate } from 'react-router-dom';
import { RoutesPath } from '../../../enums/routes-path.enum';

const UserDropdown = () => {
    const user = useSelector(selectUser);
    const { t } = useTranslation();
    const dispatch: Dispatch<any> = useDispatch();
    const navigate = useNavigate();

    const logout = useCallback(() => {
        dispatch(clearUserInfo());
        navigate(RoutesPath.LOGIN);
    }, []);

    return (
        <Dropdown className="p-3">
            <Dropdown.Toggle disabled={!user}  variant="ghost" className="main-wrapper px-4 d-flex align-items-center">
                { t("USER_GREETING", { user: user?.firstName ?? 'guest' }) }
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item>
                    <span className="label">User info</span>
                </Dropdown.Item>
                <hr/>
                <Dropdown.Item onClick={logout}>
                    <span className="label">Logout</span>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default UserDropdown;
