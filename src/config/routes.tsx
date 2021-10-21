import { Router, Route, Redirect, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "pages/Home";
import Friends from "pages/Friends";
import Messages from "pages/Messages";
import Profile from "pages/Profile";
import PageLayout from "shared/PageLayout";

const history = createBrowserHistory();

const Routes = () => {
  return (
    <Router history={history}>
      <PageLayout>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/friends" component={Friends} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </PageLayout>
    </Router>
  );
};

export default Routes;
