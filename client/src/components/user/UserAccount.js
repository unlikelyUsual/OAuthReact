import React, { Component } from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import GoogleLogin from './GoogleLogin';
import UserDetail from './UserDetail';

class UserAccount extends Component {
    
    constructor(props){
        super(props);
        this.state={
            user : null,
            isAuthenticated : false
        };

        this.loginWithGoogle = this.loginWithGoogle.bind(this);
    } 

    loginWithGoogle = (ev) => {
        ev.preventDefault();
        window.open("http://localhost:5000/auth/google", "_self");
    }


    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.setState({
                isAuthenticated : true,
                user : this.props.auth.user
            });
        }
    }

    render() {
        // return <UserDetail user={this.props.auth.user} />
        if(!this.state.isAuthenticated){
           return <GoogleLogin  clickHanlder={this.loginWithGoogle} />
        }
        else {
           return <UserDetail user={this.props.auth.user} />
        } 
    }
}

const mapStateToProps = state =>({
    auth : state.auth
});

export default connect(mapStateToProps,{})(UserAccount);
