import React, { Component } from 'react';

import user from '../constants/user';

class FormLogin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin : false,           
            username: '',
            password: '',
            firstLogin: null
        }
      
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);               
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    async handleSubmit() {
        let username = this.state.username;
        let password = this.state.password;

        if(username !== null && password !== null) {
            if(username === user.username && password === user.password) {           
                await this.setState({
                    isLogin : true,           
                    username: username,                
                });                
            }else {               
                await this.setState({
                    firstLogin: false                 
                })
            }
        }        
      
        let isLogin = this.state.isLogin;
       
        this.props.checkLoginForm(isLogin, username);
    }

    render() { 
  
        let noticeLoginFail = '';
                                                                                                                                                                                                                    
        if(this.state.firstLogin !== null && this.state.isLogin === false) {                                                                                                                                                                                                      
            noticeLoginFail = <p className="text-warning"><strong>Incorect username or passwrod!</strong></p>;
        }    
        return(
            <div>
                <h1>Login Form</h1>
                <div className="w3l-login-form">
                    <h4>Login to your account</h4>
                    <div className="form-login" action="">
                        {noticeLoginFail}
                        <div className=" w3l-form-group">      
                            <div className="group">
                                <i className="fas fa-user"></i>
                                <input type="text" value={this.state.username} name="username" onChange={this.handleChange} className="form-control" placeholder="Username" required="required" />
                            </div>
                        </div>
                        <div className=" w3l-form-group">             
                            <div className="group">
                                <i className="fas fa-lock"></i>
                                <input type="password" value={this.state.password}  onChange={this.handleChange} name="password" className="form-control" placeholder="Password" required="required" />
                            </div>
                        </div>
                        <div className="button-login">
                        <p><input type="checkbox" name="ck-remember" />Remember Me</p>
                        <button type="button" onClick={this.handleSubmit}>Login</button>
                        </div>
                        <div className="social-login">
                            <p>Or Login with</p>
                            <div className="icon-social">
                                <span><i className="fab fa-facebook"></i></span>
                                <span><i className="fab fa-twitter-square"></i></span>
                                <span><i className="fab fa-google-plus-square"></i></span>
                                <span><i className="fab fa-linkedin"></i></span>
                            </div>
                        </div>
                        <div className="forgot">
                            <a href="true">Forgot your password?</a>                    
                        </div>
                    </div>
                    <p className=" w3l-register-p">No worries, click <a href="true" className="register">here </a>to reset password.</p>
                    <p className=" w3l-register-p">Don't have an account?<a href="true" className="register"> Create an Account</a></p>
                </div>
            </div>
        );
    }
}

export default FormLogin;