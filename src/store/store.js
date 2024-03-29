// import {compose, createStore, applyMiddleware} from 'redux';
import { configureStore } from "@reduxjs/toolkit"; 
 import logger from  'redux-logger'; 
// import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
 import {rootReducer} from './root-reducer';


// const persistConfig = {
//     key: 'root',
//     storage,
//     blacklist: ['user']
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);

// const composeEnhancers = (process.env.NODE_ENV !== 'production' &&
//  window && 
//  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// const composedEnhancers = compose (applyMiddleware(...middleWares));

export const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     serializableCheck: false
    // }).concat(middleWares)
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWares)
    
});


//createStore(
//     persistedReducer,
//      undefined,
//      composedEnhancers); 

// export const persistor = persistStore(store);