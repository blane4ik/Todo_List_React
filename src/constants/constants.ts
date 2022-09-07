import { StatusFilter } from '../enums/status-filter.enum';
import { SortBy } from '../enums/sort-by.enum';

export const amountItemOnPage = [
    {
        id: 1,
        label: '5',
        value: 5
    },
    {
        id: 2,
        label: '10',
        value: 10
    },
    {
        id: 3,
        label: '15',
        value: 15
    },
    {
        id: 4,
        label: '20',
        value: 20
    },
];

export const statusFilterItems = [
    {
        id: 1,
        label: 'STATUS_FILTER_ITEM_ALL',
        value: StatusFilter.ALL
    },
    {
        id: 2,
        label: 'STATUS_FILTER_ITEM_TODO',
        value: StatusFilter.TODO
    },
    {
        id: 3,
        label: 'STATUS_FILTER_ITEM_COMPLETED',
        value: StatusFilter.COMPLETED
    }
];

export const sortByItems = [
    {
        id: 1,
        label: 'SORT_BY_ID',
        value: SortBy.ID
    },
    {
        id: 2,
        label: 'SORT_BY_TITLE',
        value: SortBy.TITLE
    }
];

export const emailRegEx = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$', 'g');
export const passwordMinLength = 6;
