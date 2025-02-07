import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

interface Currency {
    code: string;
    name: string;
}

export const useFetchCurrencyCalculator = () => {
    const [amount, setAmount] = useState<string>('1');
    const [fromCurrency, setFromCurrency] = useState<string>('USD');
    const [toCurrency, setToCurrency] = useState<string>('EUR');
    const [convertedAmount, setConvertedAmount] = useState<number | null>(0);
    const [currencies, setCurrencies] = useState<Currency[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const convertCurrency = async () => {
        try {
            if (fromCurrency === toCurrency) {
                setConvertedAmount(parseFloat(amount));
                return;
            }

            const response = await fetch(
                `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setConvertedAmount(data.rates[toCurrency]);
            setError('');
        } catch {
            toast.error('Failed to convert currency. Please try again.');
            setConvertedAmount(null);
        }
    };

    useEffect(() => {
        fetchCurrencies();
    }, []);

    useEffect(() => {
        if (amount && fromCurrency && toCurrency) {
            convertCurrency();
        }
    }, [amount, fromCurrency, toCurrency]);

    const fetchCurrencies = async () => {
        try {
            const response = await fetch(
                'https://api.frankfurter.app/currencies'
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const currencyList = Object.entries(data).map(([code, name]) => ({
                code,
                name: `${name} (${code})`
            }));
            setCurrencies(currencyList);
            setLoading(false);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            }
            setLoading(false);
            toast.error('Failed to load currencies. Please refresh the page.');
        }
    };

    const resetState = () => {
        setFromCurrency('USD');
        setToCurrency('EUR');
        setAmount('1');
        setConvertedAmount(null);
        setError('');
    };

    const switchCurrencies = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    return {
        amount,
        fromCurrency,
        toCurrency,
        convertedAmount,
        currencies,
        loading,
        error,
        setAmount,
        setFromCurrency,
        setToCurrency,
        resetState,
        switchCurrencies
    };
};
