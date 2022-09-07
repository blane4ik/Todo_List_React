import React, { useState } from 'react';
import './FilterPanelContent.scss';
import FilterItem from '../FilterItem/FilterItem';
import Portal from '../Portal/Portal';
import Modal from '../Modal/Modal';
import GhostButton from '../UI/GhostButton/GhostButton';
import AddTodo from '../AddTodo/AddTodo';
import { IoMdAddCircle } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import ItemsOnPageFilter from '../ItemsOnPageFilter/ItemsOnPageFilter';
import FilterBy from '../FilterBy/FilterBy';
import SearchFilter from '../SearchFilter/SearchFilter';
import SortBy from '../SortBy/SortBy';

const FilterPanelContent = () => {
    const { t } = useTranslation();
    const [ showModal, setShowModal ] = useState(false);

    return (
        <div className="w-100 h-100 config-container py-2">
            <ItemsOnPageFilter/>
            <FilterBy/>
            <SearchFilter/>
            <SortBy/>
            <FilterItem label="">
                <GhostButton onClick={() => setShowModal(true)} name={ t('ADD_TODO') } />
            </FilterItem>

            {
                showModal && <Portal>
                    <Modal
                        icon={<IoMdAddCircle />}
                        title={ t("ADD_TODO") }
                        closeHandler={setShowModal}>
                        <AddTodo />
                    </Modal>
                </Portal>
            }
        </div>
    );
};

export default FilterPanelContent;
