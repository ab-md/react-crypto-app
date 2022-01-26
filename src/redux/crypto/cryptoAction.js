import axios from "axios";

const cryptoAction = () => (dispatch) => {

    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false";

    dispatch ({
        type: "GET_CRYPTO_REQUEST"
    })

    axios.get(url)
        .then(response => dispatch({type: "GET_CRYPTO_SUCCESS", payload: response.data}))
        .catch(error => dispatch({type: "GET_CRYPTO_FAILURE", payload: error}))
}

export default cryptoAction;