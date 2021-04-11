import { getBooksReducer } from './reducers';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxPromise from 'redux-promise';

export const store = createStore(getBooksReducer, composeWithDevTools(applyMiddleware(ReduxPromise)));
