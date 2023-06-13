import { createSlice } from '@reduxjs/toolkit';

export const portafolioSlice = createSlice({
    name: 'portafolio',
    initialState: {
        darkModeIsActive: false
    },
    reducers: {
        enableDisableDarkMode: (state) => {
            state.darkModeIsActive = !state.darkModeIsActive ; 
        },
    }
});


// Action creators are generated for each case reducer function
export const { enableDisableDarkMode } = portafolioSlice.actions;