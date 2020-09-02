import React, { Component } from 'react'
import axios from 'axios';
import {connect} from 'react-redux';

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
  
    }

    render() {
        return (
            <div className="user-login">
                 <div className="col-sm-8 mx-auto p-5">
                        <h2 className="mb-3">Login</h2>
                        <p className="mb-3">Login Or Create Account with Google</p>
                        <form id="contactForm">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="submit-button text-center">
                                        <button className="btn hvr-hover p-4" id="submit" type="submit" onClick={this.loginWithGoogle}> <i className="fab fa-lg fa-google-plus-g"></i> Google Plus</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    user : state.auth
});

export default connect(mapStateToProps,{})(UserAccount);
