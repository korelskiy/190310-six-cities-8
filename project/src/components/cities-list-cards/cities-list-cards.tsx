import {useState} from 'react';
import CitiesCard from '../cities-card/cities-card';
import {Offer} from '../../types/offer';

type CitiesListCardsProps = {
  offers: Offer[];
}

function CitiesListCards({offers}: CitiesListCardsProps): JSX.Element {

  const [, setFocusedCard] = useState({});

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CitiesCard
          key={offer.id}
          offer={offer}
          handleHoverCard={() => setFocusedCard(offer)}
        />))}
    </div>
  );
}

export default CitiesListCards;
