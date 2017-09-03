import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';
import './LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pw: ''
    }
  }

  handleSubmit = (e) => {
      e.preventDefault();
      userService.login(this.state)
      .then(() => {
          this.props.handleLogin();
          this.props.history.push('/');
      })
      // change this
      .catch(err => alert('Error!'));
  }

  handleChange = (field, e) => {
      this.setState({
          [field]: e.target.value
      });
  }

  render() {
    return (
      <div className="container">
        <header className="header-footer">Log In</header>
        <div className="row">
          <form onSubmit={this.handleSubmit} >
            <div className="row">
              <div className="col s12">
                <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={(e) => this.handleChange('email', e)} />
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <input type="password" className="form-control" placeholder="Password" value={this.state.pw} onChange={(e) => this.handleChange('pw', e)} />
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
                <Link to='/' className="Cancel">Cancel</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default LoginForm;