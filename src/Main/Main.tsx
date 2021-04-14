import React, { useState } from 'react';
import styles from './Main.module.scss';
import Books from './Books/Books';
import Search from './Search/Search';


export const LoaderContext = React.createContext<any>(null);
export const ChangeLoaderContext = React.createContext((value:boolean): void => {});

const Main = () => {
    const [loader, setLoader] = useState(true);

    const changeContentLoader = (value:boolean) => {
        setLoader(value);
    };

    return (
        <div className={styles.main}>
            <LoaderContext.Provider value={loader}>
                <ChangeLoaderContext.Provider value={changeContentLoader}>
                    <Search />
                    <Books />
                </ChangeLoaderContext.Provider>
            </LoaderContext.Provider>
        </div>
    );
};

export default Main;
