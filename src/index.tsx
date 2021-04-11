import ReactDOM from 'react-dom';
import React from 'react';
import Main from './Main/Main';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Main />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
