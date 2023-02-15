import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
///Redux
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux'; ////สำคัญ
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './components/reducers/index'

//Route
import { BrowserRouter } from 'react-router-dom';

//Antd
import 'antd/dist/antd'
import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);


