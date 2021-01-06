import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist'
import {persistReducer} from 'redux-persist'
import  storage from 'redux-persist/lib/storage'
import {standingsReducer, competitionsReducer, teamReducer, matchesReducer, profileReducer,loginReducer} from './reducers'

const reducers = combineReducers({
    standingsReducer,
    competitionsReducer,
    teamReducer,
    matchesReducer,
    profileReducer,
    loginReducer,
});

const persistConfig = {
    key:'root',
    storage,
    blackList:['loginReducer']
}

type reducersType = typeof reducers;
export type appStateType = ReturnType<reducersType>;

export const store = createStore(persistReducer(persistConfig, reducers),applyMiddleware(thunk));

export const persistor = persistStore(store);

export default {persistor,store};