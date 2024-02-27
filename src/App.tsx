import HomePage from './pages/home/home'
import CountryPage from './pages/country/country'
import NotFoundPage from './pages/not-found/not-found'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<HomePage />}
                />

                <Route
                    path='/country'
                    element={<CountryPage />}
                />

                <Route
                    path='*'
                    element={<NotFoundPage />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App
