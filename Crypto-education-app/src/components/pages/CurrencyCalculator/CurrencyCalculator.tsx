import { useFetchCurrencyCalculator } from '../../../hooks/useFetchCurrencyCalculator';
import ErrorMessage from '../../UI/ErrorMessage';
import LoadingIndicator from '../../UI/LoadingIndicator';
import { ResetIcon, DropdownIcon, SwitchIcon } from '../../UI/Icons';

const CurrencyConverter = () => {
    const {
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
    } = useFetchCurrencyCalculator();

    if (loading) {
        return <LoadingIndicator text='Loading currencies...' />;
    }

    if (error) {
        return (
            <div className='flex flex-col justify-center min-h-full w-full max-w-md mx-auto'>
                <div className='bg-white rounded-2xl shadow-lg shadow-gray-200/50 p-8'>
                    <ErrorMessage error={error} onRetry={resetState} />
                </div>
            </div>
        );
    }

    return (
        <div
            style={{
                backgroundImage:
                    'linear-gradient(180deg, rgba(14,116,144,1) 8%, rgba(34,32,32,1) 85%)'
            }}
            className='flex w-full min-h-screen'
        >
            <div className='flex flex-col justify-center min-h-full w-full max-w-md mx-auto'>
                <div className='bg-white rounded-2xl shadow-lg shadow-gray-200/50 p-8'>
                    <div className='flex justify-between items-center mb-8'>
                        <h2 className='text-2xl font-bold text-gray-800'>
                            Currency Calculator
                        </h2>
                        <button
                            onClick={resetState}
                            className='text-blue-500 hover:text-blue-600 transition-colors'
                            title='Reset values'
                        >
                            <ResetIcon />
                        </button>
                    </div>

                    <div className='mb-6'>
                        <label className='block text-sm font-medium text-gray-600 mb-2'>
                            You Send
                        </label>
                        <div className='flex gap-3 flex-col sm:flex-row'>
                            <div className='relative flex-1'>
                                <input
                                    type='number'
                                    value={amount}
                                    onChange={e => setAmount(e.target.value)}
                                    className='w-full px-4 h-12 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all'
                                    min='0'
                                    step='any'
                                    placeholder='0.00'
                                />
                            </div>
                            <div className='relative flex-1'>
                                <select
                                    value={fromCurrency}
                                    onChange={e =>
                                        setFromCurrency(e.target.value)
                                    }
                                    className='w-full h-12 pl-4 pr-10 rounded-xl bg-gray-50 border border-gray-200 appearance-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all'
                                >
                                    {currencies.map(currency => (
                                        <option
                                            key={currency.code}
                                            value={currency.code}
                                        >
                                            {currency.name}
                                        </option>
                                    ))}
                                </select>
                                <div className='absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none'>
                                    <DropdownIcon />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center mb-6'>
                        <button
                            onClick={switchCurrencies}
                            className='p-3 rounded-full hover:bg-gray-100 transition-colors group'
                            title='Switch currencies'
                        >
                            <SwitchIcon />
                        </button>
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-600 mb-2'>
                            You Receive
                        </label>
                        <div className='flex gap-3 flex-col sm:flex-row'>
                            <div className='relative flex-1'>
                                <input
                                    type='text'
                                    value={
                                        convertedAmount !== null
                                            ? convertedAmount.toFixed(2)
                                            : ''
                                    }
                                    readOnly
                                    className='w-full px-4 h-12 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all'
                                    placeholder='0.00'
                                />
                            </div>
                            <div className='relative flex-1'>
                                <select
                                    value={toCurrency}
                                    onChange={e =>
                                        setToCurrency(e.target.value)
                                    }
                                    className='w-full h-12 pl-4 pr-10 rounded-xl bg-gray-50 border border-gray-200 appearance-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all'
                                >
                                    {currencies.map(currency => (
                                        <option
                                            key={currency.code}
                                            value={currency.code}
                                        >
                                            {currency.name}
                                        </option>
                                    ))}
                                </select>
                                <div className='absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none'>
                                    <svg
                                        className='w-4 h-4 text-gray-400'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M19 9l-7 7-7-7'
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrencyConverter;
