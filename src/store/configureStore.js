import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../reducers'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger() // Create Tree

const logger = store => next => action => { // Logger Show
    if (console) {
        console.log('dispatching', action)
    }
    next(action)
    if (console) {
        console.log('next state', store.getState())
    }

}


export default function configureStore(preloadedState) {
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(thunk, loggerMiddleware, logger),
        )
    )
    return store
}