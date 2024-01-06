import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { productsReducer, productDetailsReducer, newProductReducer } from './reducers/productReducers';

const reducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    newProduct: newProductReducer,
    product: productsReducer,
})

let initialState = {

}

const middleware = [thunk];
const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store;