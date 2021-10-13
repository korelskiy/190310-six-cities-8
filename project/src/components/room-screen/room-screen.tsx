import NearPlacesCard from '../near-places-card/near-places-card';
import ReviewsList from '../reviews-list/reviews-list';
import Header from '../header/header';
import {Offer} from '../../types/offer';
import {Review, UserNewReview} from '../../types/review';
import {MAX_GALLERY_IMAGES, MAX_NEAR_CARD} from '../../const';
import {useState, useEffect} from 'react';
import {getRatingWidth} from '../../utils/utils';

type RoomScreenProps = {
  offers: Offer[];
  reviews: Review[];
  setNewReviews: (formData: UserNewReview) => void;
}

function RoomScreen({offers, reviews, setNewReviews}: RoomScreenProps): JSX.Element {
  //Временное решение для "оживления" страницы: передаю только первый объект предложений
  const [firstOffer] = offers;
  const {
    bedrooms,
    description,
    goods,
    host,
    id,
    images,
    isFavorite,
    isPremium,
    maxAdults,
    price,
    rating,
    title,
    type,
  } = firstOffer;

  //Временное решение для "оживления" страницы: передаю только первый объект комментариев
  const [firstReviews] = reviews;


  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(isFavorite);
  }, [isFavorite]);

  const premiumMark = isPremium ? <div className="property__mark"><span>Premium</span></div> : null;
  const favoriteMark = favorite ? 'property__bookmark-button-button--active button' : 'property__bookmark-button button';
  const isHostProClass = host.isPro ? 'property__avatar-wrapper--pro' : '';
  const isHostProText = host.isPro ? <span className="property__user-status">Pro</span> : '';

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(0, MAX_GALLERY_IMAGES).map((image) =>(
                <div key={id} className="property__image-wrapper">
                  <img className="property__image" src={image} alt={title} />
                </div>))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {premiumMark}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  Beautiful &amp;
                  {title}
                </h1>
                <button
                  className={favoriteMark}
                  type="button"
                  onClick={() => {setFavorite(!favorite);}}
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getRatingWidth(rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) =>(
                    <li key={id} className="property__inside-item">
                      {good}
                    </li>))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper user__avatar-wrapper ${isHostProClass}`}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {isHostProText}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewsList
                firstReviews={firstReviews}
                setNewReviews={setNewReviews}
              />
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {offers.slice(0, MAX_NEAR_CARD).map((offer) => (
                <NearPlacesCard
                  key={offer.id}
                  offer={offer}
                />))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default RoomScreen;
