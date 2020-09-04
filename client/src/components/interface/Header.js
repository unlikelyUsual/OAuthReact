import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component {

    render() {
        return (
            <div className="main-header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
            <div className="container">
            
                <div className="navbar-header">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars"></i>
                </button>
                    <Link className="navbar-brand" to="/"><img src="" className="logo" alt="" /></Link>
                </div>
               
                <div className="collapse navbar-collapse" id="navbar-menu">
                    <ul className="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                        <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/shop">SHOP</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/account">{ this.props.isAuthenticated ? 'Hi, ' + this.props.user.lastName  : 'My Account' }</Link></li>
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

const mapStateToProps = state => ({
 user : state.auth.user,
 isAuthenticated : state.auth.isAuthenticated 
});


export default connect(mapStateToProps,{})(Header);
