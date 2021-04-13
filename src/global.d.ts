import {BooksState} from './store/reducers';

declare module 'react-redux' {
    interface DefaultRootState extends BooksState {}
}
