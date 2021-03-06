import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cryptoAction from '../redux/crypto/cryptoAction';
import CryptoCard from './CryptoCard';

//styles
import classes from '../assets/styles/cryptoList.module.css';

//loader
import loader from '../assets/images/Spinner.gif';

//services
import {myAlert} from '../services/alert';

const CryptoList = () => {

    const dispatch = useDispatch();
    const cryptoes = useSelector(state => state.cryptoState);

    const [search, setSearch] = useState("");

    useEffect(() => {
        dispatch(cryptoAction());
    }, [dispatch])

    console.log(cryptoes);

    const searchHandler = event => {
        setSearch(event.target.value);
    }

    const searchCrypto = cryptoes.cryptoData.filter(crypto => crypto.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className={classes.listsContainer}>
            <input className={classes.search} type='text' value={search} onChange={searchHandler} placeholder='search' />
            {
                cryptoes.loading ?
                    <img className={classes.loader} src={loader} alt='loading' /> :
                    cryptoes.error ?
                        myAlert("Something went wrong!<br />Try later", "error") :
                        <div className={classes.items}>
                            {
                                searchCrypto.map(crypto =>
                                    <CryptoCard key={crypto.id} cryptoData={crypto} />
                                )
                            }
                        </div>
            }
        </div>
    );
}

export default CryptoList;
