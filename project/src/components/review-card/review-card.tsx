import {Comment} from '../../types/review';
import {getRatingWidth, getFormatData} from '../../utils/utils';

type ReviewCardProps = {
  key: number;
  review: Comment;
}

function ReviewCard({key, review}: ReviewCardProps): JSX.Element {

  const {
    rating,
    comment,
    user,
    date,
  } = review;

  const formatDate = 'MMMM YYYY';

  return (
    <li key={key} className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${getRatingWidth(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{getFormatData(date, formatDate)}</time>
      </div>
    </li>
  );
}

export default ReviewCard;
