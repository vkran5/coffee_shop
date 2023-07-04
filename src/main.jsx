import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'config/store.js';
import { PersistGate } from 'redux-persist/es/integration/react';
import ErrorBoundary from './components/Common/ErrorBoundary.jsx';
import { persistor } from 'config/redux_persist/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ErrorBoundary>
);
