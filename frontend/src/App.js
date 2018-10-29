import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm"
import Home from "./components/Home"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.setState({
      isLoggedIn: true
    })
  }

  logout() {
    this.setState({
      isLoggedIn: false
    })
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => (
            this.state.isLoggedIn ? (
              <Redirect to="/home" />
            ) : (
              <LoginForm login={this.login} />
            )
          )}/>
          <Route path="/home" render={() => (
            <Home />
          )}/>
        </Switch>  
      </BrowserRouter>
    );
  };
}
export default App;