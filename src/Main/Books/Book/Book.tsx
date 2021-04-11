import React, { useEffect, useState } from 'react';
import styles from './Book.module.scss';
import NoImgBook from './bookisnoavalable.gif';

export interface Ibook {
    has_fulltext?: boolean;
    title?: string;
    title_suggest?: string;
    type?: string;
    ebook_count_i?: number;
    edition_count?: number;
    key?: string;
    last_modified_i?: number;
    first_publish_year?: number;
    author_name?: string[];
    publish_year?: number[];
    ddc?: string[];
    author_key?: string[];
    seed?: string[];
    subject?: string[];
    isbn?: string[];
    edition_key?: string[];
    language?: string[];
    lcc?: string[];
    id_goodreads?: string[];
    lccn?: string[];
    publish_place?: string[];
    contributor?: string[];
    publisher?: string[];
    publish_date?: string[];
    cover_i?: number;
}

const Book = (props: { key: number; value: Ibook }) => {
    return (
        <div className={styles.book_main}>
            <img
                className={styles.book_img}
                src={
                    props.value.cover_i
                        ? `http://covers.openlibrary.org/b/id/${props.value.cover_i}-M.jpg`
                        : NoImgBook
                }
            />
            <div className={styles.info}>
                <div className={styles.book_name}> {props.value.title}</div>
                <div className={styles.author}>Автор: {props.value.author_name}</div>
            </div>
        </div>
    );
};

export default Book;
