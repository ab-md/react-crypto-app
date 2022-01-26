import React from 'react';

const CryptoCard = ({ cryptoData }) => {

    const {
        id,
        name,
        image, 
        current_price,
        price_change_percentage_24h,
        market_cap,
        symbol
    } = cryptoData;

    return (
        <div>
            <img src={image} alt={id} style={{width: '50px'}} />
            <span>{name}</span>
            <span>{symbol.toUpperCase()}</span>
            <span>{current_price.toLocaleString()}</span>
            <span>{price_change_percentage_24h}</span>
            <span>{market_cap.toLocaleString()}</span>
        </div>
    );
}

export default CryptoCard;
