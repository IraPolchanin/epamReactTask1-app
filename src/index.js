import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SearchForm from './SearchForm';
import 'bootstrap/dist/css/bootstrap.css';
import GentreToggle from './GenreToggle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Hello, world, from React!</h1>
    <App />
    <SearchForm />
    <GentreToggle />
  </React.StrictMode>
);
