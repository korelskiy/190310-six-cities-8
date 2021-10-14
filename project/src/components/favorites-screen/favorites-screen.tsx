import FavoritesListCard from '../favorites-list-card/favorites-list-card';
import Header from '../header/header';
import {Offer} from '../../types/offer';

type FavoritesScreenProps = {
  offers: Offer[];
}

function FavoritesScreen({offers}: FavoritesScreenProps): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <FavoritesListCard offers={offers} />
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
