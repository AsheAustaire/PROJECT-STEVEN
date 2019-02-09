import * as serviceWorker from './serviceWorker';
import './index.css';

// React
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import loggerMiddleware from './middleware/logger'
import monitorReducersEnhancer from './enhancers/monitorReducers'
import rootReducer from './reducers'



export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [loggerMiddleware, ...getDefaultMiddleware()],
    preloadedState,
    enhancers: [monitorReducersEnhancer]
  })

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
