import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import { compseWithDevTools } from 'redux-devtools-extension/developmentOnly'
import rootReducer from './reducers'

const middleware = [thunk];
const intialState = {};

const store = createStore(rootReducer, intialState,
    compseWithDevTools(applyMiddleware(...middleware)));


export default store;