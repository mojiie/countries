import { createSlice } from '@reduxjs/toolkit'
import { CountryModel } from '../../model/country-model'
import type { PayloadAction } from '@reduxjs/toolkit'

export type InitialState = {
    value: CountryModel | undefined
}

const initialState: InitialState = {
    value: undefined,
}

export const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        updateCountry: (state, action: PayloadAction<CountryModel | undefined>) => {
            state.value = action.payload
        },
    },
})

export const { updateCountry } = countrySlice.actions
export default countrySlice.reducer
