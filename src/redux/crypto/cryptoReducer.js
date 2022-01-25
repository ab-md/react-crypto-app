const initialState = {
    loading: false,
    cryptoData: [],
    error: ""
}

const cryptoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CRYPTO_REQUEST":
            return {
                ...state,
                loading: true
            }

        case "GET_CRYPTO_SUCCESS":
            return {
                ...state,
                loading: false,
                cryptoData: action.payload
            }

        case "GET_CRYPTO_FAILURE":
            return {
                loading: false,
                cryptoData: [],
                error: action.payload
            }

        default:
            return state
    }
}

export default cryptoReducer;