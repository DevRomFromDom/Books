import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
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

    const getBooksData = useMemo(() => {
        const cache = new Map<string, BooksData>();
        return async (value: string) => {
            if (cache.has(value)) {
                return cache.get(value);
            }
            try {
                const res = await fetch(`http://openlibrary.org/search.json?q=${value.split(' ').join('+')}&limit=60`);
                if (!res.ok) {
                    throw Error(`HTTP error! Status: ${res.status}`);
                } else {
                    const data: BooksData = await res.json();
                    cache.set(value, data);
                    return data;
                }
            } catch (e) {
                throw Error(`Error : ${e}`);
            }
        };
    }, []);

    const getArrOfBooks = async (value: string) => {
        contextLoader(true);
        const data = await getBooksData(value);
        if (data) {
            setBooksArr(data.docs);
        }
        contextLoader(false);
    };

    const timerRef = useRef<number>();

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
            timerRef.current = window.setTimeout(() => {
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
                <input
                    className={styles.input}
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                    placeholder={'Найти книгу'}
                    type="text"
                />
                <button className={styles.button} onClick={() => getArrOfBooks(inputValue)}>
                    <img src={SearchLogo} className={styles.search_logo} />
                </button>
            </div>
        </div>
    );
};

export default Search;
