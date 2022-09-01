import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './LanguageDropdown.scss';
import { RU, US } from 'country-flag-icons/react/3x2';
import { useTranslation } from 'react-i18next';

const LanguageDropdown = () => {
    const { i18n } = useTranslation();

    function getLabel() {
        switch (i18n.language) {
            case 'en':
                return <US title="United States" className="mb-1"/>;
            case 'ru':
                return <RU title="Russian" className="mb-2"/>;
        }
    }

    function changeLanguage(language) {
        i18n.changeLanguage(language);
    }

    return (
        <Dropdown className="p-3">
            <Dropdown.Toggle variant="ghost" className="main-wrapper px-4 py-2">
                { getLabel() }
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => changeLanguage('en')}>
                    <US title="United States" className="language-icon"/>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage('ru')}>
                    <RU title="Russian" className="language-icon"/>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default LanguageDropdown;
