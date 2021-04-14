import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './Search.module.scss';
import SearchLogo from '../../icons/search.svg';
import { useDispatch } from 'react-redux';
import { ChangeLoaderContext } from '../Main';

interface BooksData {
    numFound: number;
    docs: object[] | [];
    start: number;
    num_found: number;
}

const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const [booksArr, setBooksArr] = useState<object[]>([]);

    const contextLoader = useContext(ChangeLoaderContext);
    const getArrOfBooks = async (string: string) => {
        contextLoader(true);
        try {
            let res = await fetch(`http://openlibrary.org/search.json?q=${string}`);
            if (!res.ok) {
                throw Error(`HTTP error! Status: ${res.status}`);
            } else {
                let data: BooksData = await res.json();
                await setBooksArr(data.docs);
            }
        } catch (e) {
            console.log(e);
        }
    };
    const timerRef = useRef<ReturnType<typeof setTimeout> | any>();

    useEffect(() => {
        if (booksArr.length !== 0) {
            const getBooks = (booksArr: object[]) => {
                dispatch({ type: 'GET_BOOKS', payload: booksArr });
            };
            getBooks(booksArr);
        }
    }, [booksArr]);

    useEffect(() => {
        if (inputValue.length !== 0) {
            timerRef.current = setTimeout(() => {
                getArrOfBooks(inputValue);
            }, 1000);

            return () => clearInterval(timerRef.current);
        }
    }, [inputValue]);

    const dispatch = useDispatch();

    return (
        <div className={styles.search_main}>
            <div className={styles.logo}>Books</div>
            <div className={styles.search}>
                <input className={styles.input} onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
                <button className={styles.button} onClick={() => getArrOfBooks(inputValue)}>
                    <img src={SearchLogo} className={styles.search_logo} />
                </button>
            </div>
        </div>
    );
};

export default Search;
function changeContentLoader() {
    throw new Error('Function not implemented.');
}
