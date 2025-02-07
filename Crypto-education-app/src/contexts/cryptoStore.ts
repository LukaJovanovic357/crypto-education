import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getMarketData } from '../api/crypto';
import type { CryptoStore } from '../types/crypto';

const useCryptoStore = create<CryptoStore>()(
    persist(
        (set, get) => ({
            marketData: [],
            error: null,
            isLoading: false,

            fetchMarketData: async () => {
                const marketDataLength = get().marketData.length;

                if (marketDataLength > 0) {
                    return;
                }

                set({ isLoading: true, error: null });

                try {
                    const response = await getMarketData();
                    set({
                        marketData: response,
                        isLoading: false
                    });
                } catch (error: unknown) {
                    if (error instanceof Error) {
                        set({
                            error: error.message,
                            isLoading: false
                        });
                    }
                }
            }
        }),
        {
            name: 'crypto-store'
        }
    )
);

export default useCryptoStore;
