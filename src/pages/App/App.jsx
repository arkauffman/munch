import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';
import HomePage from '../HomePage/HomePage';
import SearchPage from '../SearchPage/SearchPage';
import SettingsPage from '../SettingsPage/SettingsPage';
import ShowPage from '../ShowPage/ShowPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: null,
      search: "",
      favorites: null,
      message: ''
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
    this.handleUserPopulate();
  }

  handleUpdate = () => {
    this.setState({user: userService.getUser()});
    this.handleUserPopulate();
  }

  updateSearchValue = (e) => {
    this.setState({search: e.target.value});
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  handleSearch = (e) => {
    if (e) e.preventDefault();
    let matchCount = 10;
    if (this.state.recipes) {
      console.log('match count!!!', this.state.recipes.totalMatchCount);
      matchCount = this.state.recipes.totalMatchCount;
    }
    fetch(`/api/recipes?food=${this.state.search}&maxResult=${matchCount}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    }).then(res => res.json())
    .then(data => this.setState({recipes: data}))
  }

  getAuthRequestOptions = (method) => {
    return {
      method: method,
      headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken()})
    };
  }

  handleFavorites = (recipeId, recipeName, recipeIngredients) => {
    let options = this.getAuthRequestOptions('POST');
    options.headers.append('Content-Type', 'application/json');
    options.body = JSON.stringify({recipeId, recipeName, recipeIngredients});
    // Use recipeId to make get request to correct route
    if (recipeId) {
      fetch(`/api/recipes/like/${recipeId}`, options)
        .then(res => res.json())
        .then(data => this.setState({user: data}))
    }
  }

  handleUserPopulate = () => {
    let options = this.getAuthRequestOptions('GET');
    fetch('/api/recipes/user', options)
    .then(res => res.json())
    .then(data => this.setState({user: data}))
  }
  
  /*---------- Lifecycle Methods ----------*/
  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
    this.handleSearch();
    this.handleFavorites();
    this.handleUserPopulate();
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
              <Route exact path='/search' render={(props) => 
                <SearchPage 
                  user={this.state.user}
                  recipes={this.state.recipes}
                  updateSearchValue={this.updateSearchValue}
                  handleSearch={this.handleSearch}
                  handleFavorites={this.handleFavorites}
                />
              }/>
              <Route exact path='/signup' render={(props) => 
                  <SignupPage 
                    {...props}
                    handleSignup={this.handleSignup}
                  />
                }/>
                <Route exact path='/settings' render={(props) => 
              <SettingsPage
                  {...props}
                  user={this.state.user}
                  handleUpdate={this.handleUpdate}
                />
              }/>
              <Route exact path='/login' render={(props) => 
                <LoginPage
                  {...props}
                  message={this.state.message}
                  updateMessage={this.updateMessage}
                  handleLogin={this.handleLogin}
                />
              }/>
              <Route exact path='/' render={(props) => 
                <HomePage 
                  user={this.state.user}
                  handleFavorites={this.handleFavorites}
                  recipes={this.state.recipes}
                />
              }/>
              <Route path='/search/:id' render={(props) => 
                <ShowPage
                  user={this.state.user}
                  props={props}
                  recipes={this.state.recipes}
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
