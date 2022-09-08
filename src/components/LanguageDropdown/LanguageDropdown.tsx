import React, { useMemo } from 'react';
import { Dropdown } from 'react-bootstrap';
import './LanguageDropdown.scss';
import { RU, US } from 'country-flag-icons/react/3x2';
import { useTranslation } from 'react-i18next';

const LanguageDropdown = () => {
    const { i18n } = useTranslation();

    const label = useMemo(() => {
        switch (i18n.language) {
        case 'en': 
            return <US title="United States" className="mb-1"/>;
        case 'ru':
            return <RU title="Russian" className="mb-2"/>;
        default:
            return null;
        }
    }, [i18n.language]);

    return (
        <Dropdown className="p-3">
            <Dropdown.Toggle variant="ghost" className="main-wrapper px-4 py-2">
                { label }
            </Dropdown.Toggle>

            <Dropdown.Menu className="language">
                <Dropdown.Item onClick={() => i18n.changeLanguage('en')}>
                    <US title="United States" className="language-icon"/>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => i18n.changeLanguage('ru')}>
                    <RU title="Russian" className="language-icon"/>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default LanguageDropdown;
