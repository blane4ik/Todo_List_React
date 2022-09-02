import classes from '../components/Header/Header.module.scss';
import { useEffect, useMemo, useState } from 'react';

export const useGetArrowClasses = (filter: boolean) => {
    const [ filterIsActive, setFilterIsActive ] = useState(filter);

    useEffect(() => {
        setFilterIsActive(filter);
    }, [ filter ])

    return useMemo(() => {
        return getArrowClasses(filterIsActive);
    }, [filterIsActive]);
}

export const useGetConfigContainerClasses = (filter: boolean) => {
    const [ filterIsActive, setFilterIsActive ] = useState(filter);

    useEffect(() => {
        setFilterIsActive(filter);
    }, [ filter ])

    return useMemo(() => {
        return getConfigContainerClasses(filterIsActive);
    }, [filterIsActive]);
}

function getConfigContainerClasses(filterIsActive) {
    const defaultClasses = ['w-100', classes.configBarContainer];
    if (filterIsActive) {
        defaultClasses.push(classes.containerActive);
    }

    return defaultClasses;

}

function getArrowClasses(filterIsActive) {
    const defaultClasses = [classes.filterArrow];
    if (filterIsActive) {
        defaultClasses.push(classes.activeFilter);
    }

    return defaultClasses;
}
