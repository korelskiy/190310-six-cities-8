import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Offers} from './mocks/offers';
import {Reviews} from './mocks/reviews';


ReactDOM.render(
  <React.StrictMode>
    <App
      offers = {Offers}
      reviews = {Reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
