import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { portafolioSlice } from "./portafolio";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root', 
    storage, 
  };


const persistedReducer = persistReducer(persistConfig, portafolioSlice.reducer );

export const store = configureStore({
    reducer: {
        portafolio: persistedReducer,
    },
})

export const persiStor = persistStore(store);