import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App />);