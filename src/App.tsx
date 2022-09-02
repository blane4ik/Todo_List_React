import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import ToDoList from './pages/ToDoList/ToDoList';
import { PropagateLoader } from 'react-spinners';
import { useSelector } from 'react-redux';
import { spinnerIsLoading } from './store/selectors/todo-selectors';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';

function App() {

    const loading = useSelector(spinnerIsLoading);

    return (
        <div className="container main-wrapper p-0 h-100 d-flex align-items-center flex-column">
            <Header/>

            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/todo" element={<ToDoList/>} />
            </Routes>

            { loading && <div className="spinner-wrapper">
                <PropagateLoader color="#2c2c2c" loading={ true } size={ 30 }/>
            </div> }
        </div>
    );
}

export default App;
