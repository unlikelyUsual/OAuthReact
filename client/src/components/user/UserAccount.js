import React, { Component } from 'react'
import axios from 'axios';

export default class UserAccount extends Component {
    
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
        fetch('http://localhost:5000/auth/login/success',{
            method : 'GET',
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": true
            }
        })
        .then(res=>{
            console.log(res);
            if(res.status === 200) return res.json();
            else throw new Error("User Not Authenticated")
        })
        .then(userDate=>{
            this.setState({
                user : userDate.user,
                isAuthenticated : true
            })
        })
        .catch(e=>{
            this.setState({
                isAuthenticated : false
            })
        });

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
