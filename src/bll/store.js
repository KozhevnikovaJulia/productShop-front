import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {reducer} from './reducer';


const rootReducer = combineReducers({
    app:reducer

})
const app = localStorage.getItem('app')
    ? JSON.parse(localStorage.getItem('app'))
    : {
        products: [],
        shoppingCart: [],
        itemsCount:0
    };
const persistedState = {app};
export const store = createStore(rootReducer,persistedState, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
    localStorage.setItem('app', JSON.stringify(store.getState().app));
});


