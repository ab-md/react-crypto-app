import React from 'react';

//styles
import styles from '../assets/styles/cryptoCard.module.css';

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
        <div className={styles.cryptoContainer}>
            <img className={styles.cryptoImage} src={image} alt={id} />
            <span className={styles.name}>{name}</span>
            <span>{symbol.toUpperCase()}</span>
            <span>$ {current_price.toLocaleString()}</span>
            <span className={price_change_percentage_24h > 0 ? styles.greenColor : styles.redColor}>
                {price_change_percentage_24h.toFixed(2)} %
            </span>
            <span>$ {market_cap.toLocaleString()}</span>
        </div>
    );
}

export default CryptoCard;
