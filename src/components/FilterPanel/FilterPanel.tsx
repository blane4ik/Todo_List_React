import React from 'react';
import classes from './FilterPanel.module.scss';
import { useGetConfigContainerClasses } from '../../hooks/header-hooks';
import FilterPanelContent from '../FilterPanelContent/FilterPanelContent';

const FilterPanel = ({ filterIsActive }) => {
    const configContainerClasses = useGetConfigContainerClasses(filterIsActive);

    return (
        <div className={configContainerClasses.join(' ')}>
            <div className={classes.configBarShadowTop}></div>
            <div className={classes.configBarShadowLeft}></div>
            <div className={classes.configBarShadowRight}></div>
            <div className={classes.configBarShadowBottom}></div>
            <div className={classes.configBar}></div>
            <div className={classes.contentArea}>
                <FilterPanelContent/>
            </div>
        </div>
    );
};

export default FilterPanel;
