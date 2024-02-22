import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { ProductProvider } from './context/productContext.jsx';
import { BasketProvider } from './context/basketContext.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import i18n from './i18n.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

    <BasketProvider>
        <ProductProvider>
            <App />
            <ToastContainer />
        </ProductProvider>
    </BasketProvider>

)
