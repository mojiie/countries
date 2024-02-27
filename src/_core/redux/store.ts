import storage from 'redux-persist/es/storage'
import persistStore from 'redux-persist/es/persistStore'
import countrySlice from './country/country-slice'
import { persistReducer } from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

export const reducers = combineReducers({
    country: countrySlice,
})

const persistConfig = {
    key: 'root',
    storage: storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const persistor = persistStore(store)
