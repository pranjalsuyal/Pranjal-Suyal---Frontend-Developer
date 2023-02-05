import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

// creation of store
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),    // included to use chrome developer tools
    applyMiddleware(thunk)  // using thunk as middleware to allow api calls on redux store
);
// subscribing our store, console logging the result so that we can check how and when our redux store is being invoked
store.subscribe(() => console.log(store.getState()));

export default store;
