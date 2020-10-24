import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./search/Search";
import Account from "./account/Account";
import Login from "./login/Login";
import Register from "./login/Register";
import ResetPassword from "./login/ResetPassword";
import UpdatePassword from "./login/UpdatePassword";
import Navigation from "./navigation/Navigation";
import Footer from "./footer/Footer";
import Profile from "./profile/Profile";
import FAQ from "./faq/FAQ";
import Landing from "./landing/Landing";
import SecureRoute from "./routes/SecureRoute";
import { Container } from "react-bootstrap";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Navigation />
        <Container
          id="container"
          className="pt-3 mb-5 d-flex flex-column align-items-center"
        >
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/faq" component={FAQ} />
            <SecureRoute exact path="/account" component={Account} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/updatepassword" component={UpdatePassword} />
            <Route exact path="/resetpassword" component={ResetPassword} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/profiles/:id" component={Profile} />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </AppContextProvider>
  );
}

export default App;
