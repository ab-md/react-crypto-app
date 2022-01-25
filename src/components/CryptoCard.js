import React from 'react';

const CryptoCard = ({ cryptoData }) => {

    const {
        id,
        name,
        image, 
        current_price,
        price_change_24h,
        price_change_percentage_24h,
        market_cap,
        market_cap_change_24h,
        market_cap_change_percentage_24h,
        symbol
    } = cryptoData;

    return (
        <div>
            <img src={image} alt={id} style={{width: '50px'}} />
            <span>{name}</span>
            <span>{symbol}</span>
            <span>{current_price}</span>
        </div>
    );
}

export default CryptoCard;
