import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

// Middlewares
import promise from 'redux-promise'
import multi from 'redux-multi'
import ReduxThunk from 'redux-thunk'

import App from './main/app'
// Criamos um arquivo a parte para reducers, com o intuito de ficar mais organizado.
import reducers from './main/reducers'

// store será o estado controlado pelo redux
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(ReduxThunk, multi, promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById(`app`))