import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cryptoAction from '../redux/crypto/cryptoAction';
import CryptoCard from './CryptoCard';

const CryptoList = () => {

    const dispatch = useDispatch();
    const cryptoes = useSelector(state => state.cryptoState);

    const [search, setSearch] = useState("");

    useEffect(() => {
        dispatch(cryptoAction());
    }, [dispatch])

    console.log(cryptoes);

    return (
        <div>
            {
                cryptoes.loading ?
                    <p>loading...</p> :
                    cryptoes.error ?
                        <p>error</p> :
                        cryptoes.cryptoData.map(crypto =>
                            <CryptoCard key={crypto.id} cryptoData={crypto} />
                        )
            }
        </div>
    );
}

export default CryptoList;