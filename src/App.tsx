import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { PropagateLoader } from 'react-spinners';
import { useSelector } from 'react-redux';
import { spinnerIsLoading } from './store/selectors/todo-selectors';
import { selectUserIsLoggedIn } from './store/selectors/user-selectors';
import PublicRouter from './router/PublicRouter';
import PrivateRouter from './router/PrivateRouter';

function App() {

    const loading = useSelector(spinnerIsLoading);
    const isLoggedIn = useSelector(selectUserIsLoggedIn);

    return (
        <div className="container main-wrapper p-0 h-100 d-flex align-items-center flex-column">
            <Header/>

            {
                isLoggedIn ? (
                    <PrivateRouter/>
                ) : (
                    <PublicRouter/>
                )
            }

            { loading && <div className="spinner-wrapper">
                <PropagateLoader color="#2c2c2c" loading={ true } size={ 30 }/>
            </div> }
        </div>
    );
}

export default App;
