import React, { useEffect, useState } from 'react';
import styles from './Book.module.scss';
import NoImgBook from './bookisnoavalable.gif';
import Modal from './Modal/Modal';

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
    const [modal, setModal] = useState(false);

    const viewModal = (): void => {
        setModal(!modal);
    };

    const authors = Array.from( new Set(props.value.author_name))

    

    return (
        <>
            <div className={styles.book_main} onClick={() => viewModal()}>
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
                    <div className={styles.author}>
                        Автор:{' '}
                        {authors.length === 0
                            ? 'Неизвестный автор'
                            : authors.length < 4
                            ? authors.join(', ')+"."
                            : `${authors.slice(0, 3).join(', ')}, и прочие.`}
                    </div>
                </div>
            </div>
            {modal ? <Modal {...props} closeModal={viewModal} /> : null}
        </>
    );
};

export default Book;
