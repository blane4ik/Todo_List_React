import React from 'react';
import Select from '../UI/Select/Select';
import { amountItemOnPage } from '../../constants/constants';
import FilterItem from '../FilterItem/FilterItem';
import { useTranslation } from 'react-i18next';
import { useFilterLimit } from '../../hooks/filter-panel-hooks';

const ItemsOnPageFilter = () => {
    const { t } = useTranslation();
    const [limit, setLimit] = useFilterLimit();

    return (
        <FilterItem
            label={ t('ITEMS_ON_PAGE') }
            children={
                <Select onChange={setLimit} defaultValue={limit} options={amountItemOnPage}/>
            } />
    );
};

export default ItemsOnPageFilter;
