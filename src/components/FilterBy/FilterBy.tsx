import React from 'react';
import Select from '../UI/Select/Select';
import { statusFilterItems } from '../../constants/constants';
import FilterItem from '../FilterItem/FilterItem';
import { useFilterBy } from '../../hooks/filter-panel-hooks';
import { useTranslation } from 'react-i18next';

const FilterBy = () => {
    const { t } = useTranslation();
    const [filter, setFilter] = useFilterBy();
    
    return (
        <FilterItem
            label={ t('FILTER_BY') }
            children={
                <Select onChange={setFilter} defaultValue={filter} options={statusFilterItems}/>
            } />
    );
};

export default FilterBy;
