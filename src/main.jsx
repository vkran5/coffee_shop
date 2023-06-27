import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'config/store.js';
import ErrorBoundary from './components/Common/ErrorBoundary.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </Provider>
  </ErrorBoundary>
);
