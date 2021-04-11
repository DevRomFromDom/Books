import Books from '../Main/Books/Books';
import { Action } from './actions';

export interface BooksState {
    books: object[];
}

const initialState = {
    books: [],
};

export const getBooksReducer = (state: BooksState = initialState, action: Action) => {
    switch (action.type) {
        case 'GET_BOOKS':
            return { ...state, books: action.payload } ;
        default:
            return state;
    }
};
