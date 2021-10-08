import Header from '../header/header';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Page not found</h1>
        <section className="favorites favorites--empty">
          <div className="favorites__status-wrapper">
            <b className="favorites__status">404</b>
            <b className="favorites__status">PAGE NOT FOUND</b>
            <p>
              <a href="/">
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
