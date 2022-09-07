import React from 'react';
import './GhostButton.scss';
import classNames from 'classnames';

const GhostButton = ({name, ...args }) => {
    const { className, ...rest } = args;

    const defaultClasses = classNames('btn btn-ghost w-100 h-100 main-wrapper ghost-button', className);
    return (
        <button { ...rest } className={defaultClasses}>
            { name }
        </button>
    );
};

export default GhostButton;
