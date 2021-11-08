import {
  AnyAction,
  applyMiddleware, compose, createStore, Store
} from 'redux';
import reduxThunk, { ThunkAction } from 'redux-thunk';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import createRootReducer, { StoreState } from './reducers';

export const middlewares = [reduxThunk, reduxPromiseMiddleware];

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, StoreState, unknown, AnyAction>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export default function configureStore (preloadedState: any): Store<StoreState> {
  const composeEnhancer: typeof compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    createRootReducer(),
    preloadedState,
    composeEnhancer(
      applyMiddleware(
        ...middlewares
      ),
    ),
  );

  return store;
}