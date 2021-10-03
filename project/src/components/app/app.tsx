import MainScreen from '../main-screen/main-screen';
//import PropertyScreen from '../property-screen/property-screen';
//import SignInScreen from '../sign-in-screen/sign-in-screen';
//import FavoritesScreen from '../favorites-screen/favorites-screen';

type AppScreenProps = {
  offersCount: number;
}


function App({offersCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen offersCount={offersCount} />
    //<PropertyScreen />
    //<SignInScreen />
    //<FavoritesScreen />
  );
}

export default App;
