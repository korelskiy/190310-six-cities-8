import {Review, UserNewReview} from '../../types/review';
import ReviewCard from '../review-card/review-card';
import ReviewsForm from '../reviews-form/reviews-form';

type ReviewsListProps = {
  firstReviews: Review;
  setNewReviews: (formData: UserNewReview) => void;
}

function ReviewsList({firstReviews, setNewReviews}: ReviewsListProps): JSX.Element {

  const ReviewsCount = firstReviews.comments.length;
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ReviewsCount}</span></h2>
      <ul className="reviews__list">
        {firstReviews.comments.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
          />))}
      </ul>
      <ReviewsForm
        setNewReviews={setNewReviews}
      />
    </section>
  );
}

export default ReviewsList;
