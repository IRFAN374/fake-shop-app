import {createStore,applyMiddleware} from 'redux';
//import {logger} from 'redux-logger';
import rootReducer from './reducers/rootReducers';
//import thunk from 'react-redux';


const store = createStore(
    rootReducer,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );


export default store