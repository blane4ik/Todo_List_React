import React from 'react';
import Select from '../UI/Select/Select';
import { sortByItems } from '../../constants/constants';
import FilterItem from '../FilterItem/FilterItem';
import { useTranslation } from 'react-i18next';
import { useSortBy } from '../../hooks/filter-panel-hooks';

const SortBy = () => {
    const { t } = useTranslation();
    const [sorting, setSorting] = useSortBy();

    return (
        <FilterItem
            label={ t('SORT_BY') }
            children={
                <Select onChange={setSorting} defaultValue={sorting} options={sortByItems}/>
            } />
    );
};

export default SortBy;
