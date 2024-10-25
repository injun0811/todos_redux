import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { store } from './store';
import './assets/css/reset.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <StrictMode>
            <App />
        </StrictMode>
    </Provider>
);
