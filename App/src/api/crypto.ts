import axios from 'axios';

const BASE_URL = '/api';

export const getMarketData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/coins/markets`, {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: 10,
                page: 1,
                sparkline: false
            }
        });

        return response.data;
    } catch (error) {
        throw new Error(`Error occured: ${error}`);
    }
};
