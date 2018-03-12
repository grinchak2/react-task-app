import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './components/App';

let initialState = [];
let s = localStorage.getItem('store');

if(s !== null) {
    s = JSON.parse(s);
    initialState = s;
}

const store = createStore(rootReducer , initialState );

store.subscribe(() => {
    var s = store.getState();
    s = JSON.stringify(s);

    localStorage.setItem('store', s);
  })

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
