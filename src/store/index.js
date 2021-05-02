import {createStore, combineReducers} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import  CalculatorReducer  from './Calculator/Calculator.reducer'
import  ProductsReducer  from './Products/Products.reducer'

const rootReducer = combineReducers({
    calc : CalculatorReducer,
    products : ProductsReducer
})

const persistingReducer = persistReducer({
    key : 'root',
    storage
}, rootReducer)

export const store = createStore(persistingReducer)

export const PersistStore = persistStore(store)