import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Header(){
  return <header>
    <h3>basliq salam </h3>
  </header>
}
root.render(
<Header/>
);


reportWebVitals();
