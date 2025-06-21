import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'
import Learning_17062025 from './components/Learning_17062025.js'

const myFirstElement = <div>
  <h1>Hello React!</h1>
  <hr/>
  <App/>
  <hr/>
  </div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);