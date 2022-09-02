import { useEffect, useMemo, useState } from 'react';

export const useGetTodoItemClasses = (completed: boolean) => {
    const [ isCompleted, setIsCompleted ] = useState(completed);

    useEffect(() => {
        setIsCompleted(completed);
    }, [ completed ])

    return useMemo(() => {
        return getTodoItemClasses(isCompleted);
    }, [isCompleted]);
}

function getTodoItemClasses(isCompleted: boolean) {
    const defaultClasses = ['label', 'col-10', 'px-5'];
    if (isCompleted) {
        defaultClasses.push('crossed');
    }

    return defaultClasses;
}
