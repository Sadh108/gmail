import React from 'react'; // Import React
import { createRoot } from 'react-dom/client'; // Only import createRoot
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* Use React.StrictMode */}
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
);

