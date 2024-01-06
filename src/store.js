import {legacy_createStore as createStore,applyMiddleware} from "redux";
// import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import rootreducers from "./components/redux/reducers/main";


 const Middleware =[thunk];
 const store=createStore(
    rootreducers,
    composeWithDevTools(applyMiddleware(...Middleware))
 )

 export default store;