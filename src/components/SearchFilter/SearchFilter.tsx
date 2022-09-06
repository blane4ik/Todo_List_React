import React from 'react';
import Input from '../UI/Input/Input';
import FilterItem from '../FilterItem/FilterItem';
import { useTranslation } from 'react-i18next';
import { useFilterSearch } from '../../hooks/filter-panel-hooks';

const SearchFilter = () => {
    const { t } = useTranslation();
    const searchHandler = useFilterSearch();

    return (
        <FilterItem
            label={ t('SEARCH') + ': ' }
            children={
                <Input onChange={searchHandler} placeholder={ t('SEARCH')  + '...' }/>
            } />
    );
};

export default SearchFilter;
