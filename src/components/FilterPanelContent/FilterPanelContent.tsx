import React, { useCallback, useState } from 'react';
import './FilterPanelContent.scss';
import Select from '../UI/Select/Select';
import FilterItem from '../FilterItem/FilterItem';
import { amountItemOnPage, sortByItems, statusFilterItems } from '../../constants/constants';
import Input from '../UI/Input/Input';
import { selectAmountOnPage, selectFilterStatus, selectSortBy } from '../../store/selectors/todo-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import {
    changeAmountOnPage,
    changeFilterStatus,
    changeSearchString,
    changeSorting
} from '../../store/reducers/todo-reducer';
import { debounce } from 'lodash';
import Portal from '../Portal/Portal';
import Modal from '../Modal/Modal';
import GhostButton from '../UI/GhostButton/GhostButton';
import AddTodo from '../AddTodo/AddTodo';
import { IoMdAddCircle } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

const FilterPanelContent = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const { t } = useTranslation();
    const [ limit ] = useState(useSelector(selectAmountOnPage));
    const [ filter ] = useState(useSelector(selectFilterStatus));
    const [ sorting ] = useState(useSelector(selectSortBy));
    const [ showModal, setShowModal ] = useState(false);

    const handleSearch = useCallback(debounce(search, 300), []);


    function handleChangeFilter(e) {
        const value = e.target.value;
        dispatch(changeFilterStatus(value))
    }

    function handleChangeAmountOnPage(e) {
        const value = +e.target.value;
        dispatch(changeAmountOnPage(value))
    }

    function search(event) {
        const value = event.target.value;
        dispatch(changeSearchString(value));
    }

    function handleSort(event) {
        const value = event.target.value;
        dispatch(changeSorting(value));
    }

    function openModal() {
        setShowModal(true);
    }

    return (
        <div className="w-100 h-100 config-container py-2">
            <FilterItem label={ t('ITEMS_ON_PAGE') } children={<Select onClick={handleChangeAmountOnPage} defaultValue={limit} options={amountItemOnPage}/>} />
            <FilterItem label={ t('FILTER_BY') } children={<Select onChange={handleChangeFilter} defaultValue={filter} options={statusFilterItems}/>} />
            <FilterItem label={ t('SEARCH') + ': ' } children={<Input onChange={handleSearch} placeholder={ t('SEARCH')  + '...' }/>} />
            <FilterItem label={ t('SORT_BY') } children={<Select onChange={handleSort} defaultValue={sorting} options={sortByItems}/>} />
            <FilterItem label="" children={<GhostButton onClick={openModal} name={ t('ADD_TODO') } />} />

            {
               showModal && <Portal>
                                <Modal
                                    icon={<IoMdAddCircle />}
                                    title={ t("ADD_TODO") }
                                    closeHandler={setShowModal}
                                    children={AddTodo} />
                            </Portal>
            }
        </div>
    );
};

export default FilterPanelContent;
