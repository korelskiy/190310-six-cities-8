import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useState} from 'react';
import {Offer} from '../../types/offer';
import {getRatingWidth} from '../../utils/utils';

type CitiesCardScreenProps = {
  key: number;
  offer: Offer;
  handleHoverCard: (offer: Offer) => void;
}

function CitiesCard({key, offer, handleHoverCard}: CitiesCardScreenProps): JSX.Element {
  const {
    title,
    previewImage,
    isPremium,
    isFavorite,
    price,
    type,
    rating,
  } = offer;

  const [favorite, setFavorite] = useState(isFavorite);

  const premiumMark = isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null;
  const favoriteMark = favorite ? 'place-card__bookmark-button--active button' : 'place-card__bookmark-button button';

  return (
    <article key={key} className="cities__place-card place-card"
      onMouseEnter={() => handleHoverCard(offer)}
    >
      {premiumMark}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Room}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">
              &euro;
              {price}
            </b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={favoriteMark}
            type="button"
            onClick={() => {setFavorite(!favorite);}}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingWidth(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Room}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">
          {type}
        </p>
      </div>
    </article>
  );
}

export default CitiesCard;
