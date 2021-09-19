import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FilterContextWrapper } from "@context/FilterContext/FilterContext"

ReactDOM.render(
  <React.StrictMode>
    <FilterContextWrapper>
      <App />
    </FilterContextWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
