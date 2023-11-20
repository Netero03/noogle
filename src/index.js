import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import { ResultContextsProvider } from './contexts/ResultContextsProvider';
import './style.css';

ReactDOM.render(
    <ResultContextsProvider>
        <Router>
            <App/>
        </Router>
    </ResultContextsProvider>,
    document.getElementById('root')
);