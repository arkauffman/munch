import React, { Component } from 'react';
// only have this in nav bar - call nav bar in app so it persists on every page
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import HomePage from '../HomePage/HomePage';
import SearchPage from '../SearchPage/SearchPage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import SettingsPage from '../SettingsPage/SettingsPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: null
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleSearch = () => {
    fetch('/api/recipes', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    }).then(res => JSON.stringify(res))
    .then(data => console.log('response is, ', data))
  }

  /*---------- Lifecycle Methods ----------*/
  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});

    this.handleSearch();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar 
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
            <Switch>
              <Route exact path='/signup' render={(props) => 
                  <SignupPage 
                    {...props}
                    handleSignup={this.handleSignup}
                  />
                }/>
              <Route exact path='/login' render={(props) => 
                <LoginPage
                  {...props}
                  handleLogin={this.handleLogin}
                />
              }/>
              <Route exact path='/' render={(props) => 
                <HomePage 
                user={this.state.user}
                />
              }/>
              <Route exact path='/search' render={(props) => 
                <SearchPage 
                user={this.state.user}
                />
              }/>
              <Route exact path='/favorites' render={(props) => 
                <FavoritesPage
                user={this.state.user}
                />
              }/>
              <Route exact path='/settings' render={(props) => 
                <SettingsPage
                user={this.state.user}
                />
              }/>

            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
