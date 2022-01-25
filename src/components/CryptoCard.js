import React from 'react';

const CryptoCard = ({ cryptoData }) => {

    const { name } = cryptoData;

    return (
        <div>
            <p>{name}</p>
        </div>
    );
}

export default CryptoCard;
