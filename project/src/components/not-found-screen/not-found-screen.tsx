import Logo from '../logo/logo';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Page not found</h1>
        <section className="favorites favorites--empty">
          <div className="favorites__status-wrapper">
            <b className="favorites__status">404</b>
            <b className="favorites__status">PAGE NOT FOUND</b>
            <p>
              <a href="/" className="header__nav-link header__nav-link--profile" style={{justifyContent: 'center'}}>
                Вернуться на главную
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default NotFoundScreen;
