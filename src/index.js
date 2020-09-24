import React from "react"
import ReactDOM from "react-dom"

import { createStore } from 'redux'
import { Provider } from 'react-redux'


import App from "./App"


const store = createStore(rootReducer, windows.__REDUX_DEVTOOLS_EXTENSION__ ? windows.__REDUX_DEVTOOLS_EXTENSION__() : f => f) 

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
document.getElementById('root')
);




