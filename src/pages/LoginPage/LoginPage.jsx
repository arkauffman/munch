import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

const LoginPage = (props) => {
  return (
    <div className="container">
        <LoginForm 
            {...props}
            handleLogin={props.handleLogin}
        />    
        <p>{props.message}</p>   
    </div>
  );
};

export default LoginPage;