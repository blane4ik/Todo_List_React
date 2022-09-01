import React from 'react';
import './GhostButton.scss';

const GhostButton = ({name, ...args }) => {
    const { className, ...rest } = args;

    const defaultClasses = 'btn btn-ghost w-100 h-100 main-wrapper ghost-button ';
    return (
        <button { ...rest } className={defaultClasses + className}>
            { name }
        </button>
    );
};

export default GhostButton;
