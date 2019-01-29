import React, { Component } from 'react';

class SuccessLogin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin : false
        }      
        
        this.handleLogOut = this.handleLogOut.bind(this);               
    }

    handleLogOut() {
        this.props.handleLogout(this.state.isLogin);
    }


    render () {
        return (
            <div className="success">
                Wellcom <strong>{this.props.handleUserName}</strong> to Page!<br></br>
                <button type="submit" className="btn btn-secondary" onClick={this.handleLogOut}>Logout</button>
            </div>
        );

    }
}

export default SuccessLogin;