import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../main-screen/main-screen';
import RoomScreen from '../room-screen/room-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

import {Offer} from '../../types/offer';
import {Review} from '../../types/review';

type AppScreenProps = {
  offers: Offer[];
  reviews: Review[];

}

function App({offers, reviews}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen
            offers={offers}
          />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignInScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesScreen offers={offers} />}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <RoomScreen
            offers={offers}
            reviews={reviews}
            setNewReviews={(formData) => {
              // eslint-disable-next-line no-alert
              alert(`Function 'setNewReviews' isn't implemented. setRating: ${formData.rating} setComment: ${formData.comment}`);
            }}
          />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
