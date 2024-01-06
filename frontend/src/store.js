import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { productReducer, productDetailsReducer, newProductReducer } from './reducers/productReducers';

const reducer = combineReducers({
    products: productReducer,
    productDetails: productDetailsReducer,
    newProduct: newProductReducer,
})

let initialState = {

}

const middleware = [thunk];
const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store;