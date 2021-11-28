import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';


const loadingMarkup = (
  <div className="py-4 text-center">
    <h2>Loading...</h2>
  </div>
)


ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <App />
  </Suspense>,
  document.getElementById('root')
);


