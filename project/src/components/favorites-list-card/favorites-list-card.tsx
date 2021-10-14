import FavoritesCard from '../favorites-card/favorites-card';
import {Offer} from '../../types/offer';

type FavoritesListCardsProps = {
  offers: Offer[];
}

function FavoritesListCards({offers}: FavoritesListCardsProps): JSX.Element {

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/">
                <span>Amsterdam</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offers.map((offer) => (
              <FavoritesCard
                key={offer.id}
                offer={offer}
              />))}
          </div>
        </li>

        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/">
                <span>Cologne</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offers.map((offer) => (
              <FavoritesCard
                key={offer.id}
                offer={offer}
              />))}
          </div>
        </li>
      </ul>
    </section>
  );
}

export default FavoritesListCards;
