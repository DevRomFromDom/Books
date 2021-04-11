import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BooksState } from '../../store/reducers';
import Book from './Book/Book';
import styles from './Books.module.scss';

const Books = () => {
    const [books, setBooks] = useState<BooksState['books']>([]);

    const newBooks = useSelector<BooksState, object[]>((state) => {
        return state.books;
    });
    useEffect(() => {
        setBooks(newBooks);
    }, [newBooks]);

    return (
        <div className={styles.books_main}>
            {books.length !== 0
                ? books.map((el:any , index: number) => {
                      return <Book key = {index} value={el}/>;
                  })
                : null}
        </div>
    );
};

export default Books;
