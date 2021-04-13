import React from 'react';
import styles from './Modal.module.scss';
import { Ibook } from '../Book';
import CloseLogo from '../../../../icons/close.svg';
import NoImgBook from '../bookisnoavalable.gif';

const Modal = (props: { key: number; value: Ibook; closeModal: () => void }) => {
    return (
        <>
            <div className={styles.blur}></div>
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
                    <div
                        className={styles.close}
                        onClick={() => {
                            props.closeModal();
                        }}
                    >
                        <button className={styles.button}>
                            <img className={styles.icon} src={CloseLogo} />
                        </button>
                    </div>
                    <div className={styles.book_name}> {props.value.title} </div>
                    <div className={styles.author}>Автор: {props.value.author_name?.join(', ')}</div>
                    <div className={styles.date}>Дата публикации: {props.value.publish_date?.join(', ')}</div>
                    <div className={styles.firm}>Издатель книги: {props.value.publisher?.join(', ')} </div>
                    <div className={styles.isbn}>ISBN: {props.value.isbn?.join(', ')}</div>
                </div>
            </div>
        </>
    );
};

export default Modal;
