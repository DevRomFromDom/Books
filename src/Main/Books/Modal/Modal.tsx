import React from 'react';
import styles from './Modal.module.scss';
import { Ibook } from '../Book/Book';
import CloseLogo from '../../../icons/close.svg';
import NoImgBook from '../Book/bookisnoavalable.gif';

const Modal = () => {
    return (
        <div className={styles.book_main}>
            <img className={styles.book_img} src={NoImgBook} />
            <div className={styles.info}>
                <div className={styles.close}>
                    <button className={styles.button}>
                        <img className={styles.icon} src={CloseLogo} />
                    </button>
                </div>
                <div className={styles.book_name}> Название книги: Lord </div>
                <div className={styles.author}>Автор: Lord</div>
                <div className={styles.date}>Дата публикации: 20/02/221</div>
                <div className={styles.firm}>Издатель книги: Печкин </div>
                <div className={styles.isbn}>ISBN: </div>
                <div></div>
            </div>
        </div>
    );
};

export default Modal;
