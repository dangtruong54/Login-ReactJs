import React, { Component } from 'react';

import Menu from './component/Menu';
import FormLogin from './component/FormLogin';
import SuccessLogin from './component/SuccessLogin'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin : false,
            username: ''
        }       
        
        this.handleSubmit = this.handleSubmit.bind(this);  
        this.handleLogoutForm = this.handleLogoutForm.bind(this);             
    }

    handleSubmit(checkLogin, username) {
        this.setState({
            isLogin: checkLogin,
            username: username
        })       
    }

    handleLogoutForm(isLogOut) {
        this.setState({
            isLogin: isLogOut
        });
    }

    render() {
        let noticeSuccess    = null;
        let isLogin = this.state.isLogin;
     
        if(isLogin) {
            noticeSuccess = <SuccessLogin handleUserName={this.state.username} handleLogout={this.handleLogoutForm}/>;
        }else {
            noticeSuccess = <FormLogin checkLoginForm={this.handleSubmit}/>;
        }
        return (
        <div className="test-reactjs">        
            <Menu/>            
            {noticeSuccess}    
        </div>
        );
    }
}

export default App;
