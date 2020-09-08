import React, { Component } from 'react'
import image1 from '../../images/img-pro-01.jpg'
import {Link} from 'react-router-dom' 

export default class Landing extends Component {
    render() {
        return (
            <div>
                   
            <div className="products-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-all text-center">
                                <h1>Food Collections</h1>
                                <p>Explore curated lists of top restaurants, cafes, pubs based on trends</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row special-list">
                        <div className="col-lg-3 col-md-6 special-grid best-seller">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <div className="type-lb">
                                        <p className="sale">Sale</p>
                                    </div>
                                    <img src={image1} className="img-fluid" alt="product" />
                                    <div className="mask-icon">
                                        <Link className="cart" to="#">Add to Cart</Link>
                                    </div>
                                </div>
                                <div className="why-text">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <h5> $7.79</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
