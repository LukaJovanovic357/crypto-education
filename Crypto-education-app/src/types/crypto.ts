export interface Crypto {
    id: string;
    name: string;
    symbol: string;
    current_price: number;
    price_change_percentage_24h: number;
}

export interface CryptoStore {
    marketData: Crypto[];
    error: string | null;
    isLoading: boolean;
    fetchMarketData: () => Promise<void>;
}
