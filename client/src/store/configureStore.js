import { createStore,applyMiddleware } from 'redux';
import rootReducer from './../reducers/index';
import thunk from 'redux-thunk';




const middlewares=[thunk]

// export default ()=>{
//     const store=createStore(
//         rootReducer
//         ,applyMiddleware(...middlewares),
//          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );

//     return store;
// }


    const store=createStore(
        rootReducer
        ,applyMiddleware(...middlewares),
         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;
