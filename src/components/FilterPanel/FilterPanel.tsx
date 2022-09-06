import React from 'react';
import classes from './FilterPanel.module.scss';
import FilterPanelContent from '../FilterPanelContent/FilterPanelContent';
import classNames from 'classnames';

const FilterPanel = ({ filterIsActive }) => {

    return (
        <div className={classNames({ [classes.containerActive] : filterIsActive }, classes.configBarContainer)}>
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
