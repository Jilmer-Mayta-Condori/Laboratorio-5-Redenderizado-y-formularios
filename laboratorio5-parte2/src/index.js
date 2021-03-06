import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const nombres = [
  {
    id:1, 
    name: 'Arto Hellas', 
    number: 989846262
  },
  {
    id:2,
    name: 'Arto',
    number: 987654321
  }
]

ReactDOM.render(
  <React.StrictMode>
    <App nombre={nombres}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
