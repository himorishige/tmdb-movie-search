import { Switch, Route } from 'react-router-dom';
import { HomePage, MyPage, Page404, DetailPage, SearchPage } from 'src/components/pages';

const Router: React.VFC = () => {
  return (
    <Switch>
      {/* ムービー詳細ページ */}
      <Route
        path="/movie"
        render={({ match: { url } }) => (
          <Switch>
            <Route path={`${url}/:id`} component={DetailPage} />
            <Route path={`${url}/*`}>
              <Page404 />
            </Route>
          </Switch>
        )}
      />
      {/* 検索一覧ページ */}
      <Route exact path="/search">
        <SearchPage />
      </Route>
      {/* お気に入り一覧ページ */}
      <Route exact path="/mypage">
        <MyPage />
      </Route>
      {/* トップページ */}
      <Route exact path="/">
        <HomePage />
      </Route>
      {/* 404ページ */}
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};

export default Router;
