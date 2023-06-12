import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from './App.jsx';
import { store } from './app/store.jsx';
import { ContextProvider } from './context/ContextProvider.jsx';
import './index.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <Provider store={store} >
      <App />
    </Provider>
    </ContextProvider>
  </React.StrictMode>,
)
