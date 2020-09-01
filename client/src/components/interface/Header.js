import React, { Component } from 'react'

export default class Header extends Component {

    render() {
        return (
            <div className="main-header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
            <div className="container">
            
                <div className="navbar-header">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars"></i>
                </button>
                    <a className="navbar-brand" href="index.html"><img src="" className="logo" alt="" /></a>
                </div>
               

            
                <div className="collapse navbar-collapse" id="navbar-menu">
                    <ul className="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                        <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="shop.html">SHOP</a></li>
                        <li className="nav-item"><a className="nav-link" href="my-account.html">My Account</a></li>
                    </ul>
                </div>
                <div className="attr-nav">
                    <ul>
                        <li className="side-menu">
							<a href="#">
								<i className="fa fa-shopping-bag"></i>
								<span className="badge">3</span>
								<p>My Cart</p>
							</a>
						</li>
                    </ul>
                </div>
            </div>
        </nav>
            </div>
        )
    }
}