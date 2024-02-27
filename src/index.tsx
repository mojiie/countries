import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from './_core/config/theme-provider'
import { persistor, store } from './_core/redux/store'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
        >
            <Provider store={store}>
                <PersistGate
                    loading={null}
                    persistor={persistor}
                >
                    <App />
                </PersistGate>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
)
