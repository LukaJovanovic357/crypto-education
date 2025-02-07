import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';
import BasicsOverview from './components/pages/Learn/BasicsOverview';
import TradingFundamentals from './components/pages/Learn/TradingFundamentals';
import SingleFundamentalsPage from './components/pages/Learn/SingleFundamentalsPage';
import LearningResources from './components/pages/Learn/LearningResources';
import SingleBasicsPage from './components/pages/Learn/SingleBasicsPage';
import ProtectedRoute from './components/common/ProtectedRoute/ProtectedRoute';
import { Toaster } from 'react-hot-toast';
import {
    Home,
    CryptoNewsPage,
    Dashboard,
    NotFound,
    Quiz,
    Glossary,
    LearningPath,
    CurrencyCalculator
} from './components/pages';
import { ScrollToTop } from './utils';
import AIAssistant from './components/AIAssistant/AIAssistant';

function App() {
    const location = useLocation();

    const hideLayout = ['/login', '/signup', '/'];

    return (
        <>
            <ScrollToTop />
            <Toaster />
            {!hideLayout.includes(location.pathname) && <Navbar />}
            <Routes>
                <Route path='/' element={<Home />} />

                <Route
                    path='/dashboard'
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path='/resources'
                    element={
                        <ProtectedRoute>
                            <LearningResources />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path='/quiz'
                    element={
                        <ProtectedRoute>
                            <Quiz />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path='/glossary'
                    element={
                        <ProtectedRoute>
                            <Glossary />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path='/basics-overview/'
                    element={
                        <ProtectedRoute>
                            <BasicsOverview />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path='/basics-overview/:id'
                    element={
                        <ProtectedRoute>
                            <SingleBasicsPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path='/trading-fundamentals/'
                    element={
                        <ProtectedRoute>
                            <TradingFundamentals />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path='/trading-fundamentals/:id'
                    element={
                        <ProtectedRoute>
                            <SingleFundamentalsPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path='/crypto-news'
                    element={
                        <ProtectedRoute>
                            <CryptoNewsPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path='/currency-calculator'
                    element={
                        <ProtectedRoute>
                            <CurrencyCalculator />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path='*'
                    element={
                        <ProtectedRoute>
                            <NotFound />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path='/learning-path'
                    element={
                        <ProtectedRoute>
                            <LearningPath />
                        </ProtectedRoute>
                    }
                />
            </Routes>
            {!hideLayout.includes(location.pathname) && <Footer />}
            {!hideLayout.includes(location.pathname) && <AIAssistant />}
        </>
    );
}

export default App;
