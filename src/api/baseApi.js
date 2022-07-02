import axios from 'axios';
const apiBase = axios.create({
    baseURL: 'https://min-api.cryptocompare.com/data/',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: false,
    params: {
        api_key: '8f0e346d23e97060171ddf534d1644803062007543dbdbab4b720656e84fcb32',
    }
});

export const getPrice = async (tickers) => {
    try {
        const res = await apiBase.request({
            url: `pricemulti`,
            params: {
                tsyms: 'USD',
                fsyms: tickers.join(','),
            },
            method: 'get',
        });
        return Object.fromEntries(Object.entries(res.data).map(([key, value]) => ([key, value.USD])));
    } catch {
        return {
            USD: 0,
        };
    }
};

export const getAllСurrencies = async () => {
    try {
        const res = await apiBase.request({
            url: `all/coinlist`,
            params: {
                summary: 'true',
            },
            method: 'get',
        });
        return res.data.Data;
    } catch {
        return [];
    }
};