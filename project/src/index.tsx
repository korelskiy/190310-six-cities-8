import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Offers} from './mocks/offers';
import {Reviews} from './mocks/reviews';


const Setting = {
  OFFERS_COUNT: 555,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      offersCount = {Setting.OFFERS_COUNT}
      offers = {Offers}
      reviews = {Reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
