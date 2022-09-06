import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../store/selectors/user-selectors';
import { useTranslation } from 'react-i18next';

const UserDropdown = () => {
    const user = useSelector(selectUser);
    const { t } = useTranslation();

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
                <Dropdown.Item>
                    <span className="label">Logout</span>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default UserDropdown;
