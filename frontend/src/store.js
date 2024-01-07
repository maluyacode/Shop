import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk'
import { productsReducer, productDetailsReducer, newProductReducer } from './reducers/productReducers';
import { authReducer } from './reducers/userReducers';

const reducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    newProduct: newProductReducer,
    product: productsReducer,
    auth: authReducer,
})


let initialState = {

}
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;