export const initialTopics = [
    {
        id: 'bitcoin-basics',
        title: 'Bitcoin Basics',
        description: 'Introduction to Bitcoin and blockchain technology',
        completed: false,
        unlocked: true,
        children: ['advanced-bitcoin', 'crypto-trading-basics'],
        level: 0,
        xp: 100,
        resources: [
            {
                title: 'Bitcoin Whitepaper',
                url: 'https://bitcoin.org/bitcoin.pdf',
                type: 'article'
            },
            {
                title: 'Blockchain Demo',
                url: 'https://andersbrownworth.com/blockchain/',
                type: 'video'
            }
        ],
        tips: [
            'Start by understanding the problem Bitcoin solves',
            'Focus on the basic blockchain structure first'
        ]
    },
    {
        id: 'crypto-trading-basics',
        title: 'Crypto Trading Fundamentals',
        description: 'Learn the basics of cryptocurrency trading',
        completed: false,
        unlocked: false,
        children: ['technical-analysis', 'defi-basics'],
        level: 1,
        xp: 150,
        resources: [
            {
                title: 'Understanding Market Basics',
                url: 'https://academy.binance.com/en/start-here?utm_campaign=googleadsxacademy&utm_source=googleadwords_int&utm_medium=cpc&ref=WMNC7PBZ&gad_source=1&gclid=CjwKCAiA2JG9BhAuEiwAH_zf3nkSOoP9W-xYjie6uAgiXm5FQP3E136P8zyfLYgP9R_WA3T-2FM8OxoCFXUQAvD_BwE',
                type: 'course'
            },
            { title: 'Risk Management Guide', url: '#', type: 'article' }
        ],
        tips: [
            'Start with small amounts while learning',
            'Focus on risk management before profits'
        ]
    },
    {
        id: 'technical-analysis',
        title: 'Technical Analysis',
        description: 'Master chart patterns and indicators',
        completed: false,
        unlocked: false,
        children: ['advanced-trading'],
        level: 2,
        xp: 200,
        resources: [
            {
                title: 'Chart Pattern Mastery',
                url: 'https://tradeciety.com/chart-pattern-mastery-how-to-trade-chart-patterns-step-by-step#',
                type: 'course'
            },
            {
                title: 'Technical Indicators Guide',
                url: 'https://www.luxalgo.com/?keyword=luxalgo&gad_source=1&gclid=CjwKCAiA2JG9BhAuEiwAH_zf3net2wraWIcdk5NrhUaGiXXzZa05TAj_HQd7vr5mvMzKfQtLAp4ANxoCqCEQAvD_BwE',
                type: 'article'
            }
        ],
        tips: [
            'Practice identifying patterns on historical charts',
            'Combine multiple indicators for better accuracy'
        ]
    }
];
