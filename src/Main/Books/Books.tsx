import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BooksState } from '../../store/reducers';
import { ChangeLoaderContext, LoaderContext } from '../Main';
import Book from './Book/Book';
import styles from './Books.module.scss';
import Loader from './Loader/Loader';

const Books = () => {
    const [books, setBooks] = useState<BooksState['books']>([]);
    const contextLoader = useContext<boolean>(LoaderContext);
    const changeLoader = useContext(ChangeLoaderContext);
    console.log(contextLoader);
    const newBooks = useSelector((state) => {
        return state.books;
    });
    useEffect(() => {
        setBooks(newBooks);
        changeLoader(false);
    }, [newBooks]);

    return (
        <>
            <div className={styles.books_main}>
                {books.length !== 0
                    ? books.map((el: any, index: number) => {
                          return <Book key={index} value={el} />;
                      })
                    : null}
                {contextLoader === true ? <div className={styles.blur} /> : null}
            </div>
            {contextLoader === true ? <Loader /> : null}
        </>
    );
};

export default Books;
