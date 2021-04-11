import React from 'react';
import styles from './Main.module.scss'
import Books from './Books/Books'
import Search from './Search/Search';
import Modal from './Books/Modal/Modal';

const Main = () => {
    return <div className={styles.main}>
        <Search/>
        <Books/>
        <Modal/>
    </div>;
};

export default Main;
