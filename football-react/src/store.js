import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import {standingsReducer, competitionsReducer, teamReducer, matchesReducer, profileReducer} from './reducers'

const reducers = combineReducers({
    standingsReducer,
    competitionsReducer,
    teamReducer,
    matchesReducer,
    profileReducer,
});
const store = createStore(reducers,applyMiddleware(thunk));

export default store;