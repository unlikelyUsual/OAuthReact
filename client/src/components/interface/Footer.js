import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
        <div className="footer-main">
            <div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-12 col-sm-12">
						<div className="footer-top-box">
							<h3>Business Time</h3>
							<ul className="list-time">
								<li>Monday - Friday: 08.00am to 05.00pm</li> <li>Saturday: 10.00am to 08.00pm</li> <li>Sunday: <span>Closed</span></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-4 col-md-12 col-sm-12">
						<div className="footer-top-box">
							<h3>Newsletter</h3>
							<form className="newsletter-box">
								<div className="form-group">
									<input className="" type="email" name="Email" placeholder="Email Address*" />
									<i className="fa fa-envelope"></i>
								</div>
								<button className="btn hvr-hover" type="submit">Submit</button>
							</form>
						</div>
					</div>
					<div className="col-lg-4 col-md-12 col-sm-12">
						<div className="footer-top-box">
							<h3>Social Media</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							<ul>
                                <li><a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-google-plus" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-pinterest-p" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-whatsapp" aria-hidden="true"></i></a></li>
                            </ul>
						</div>
					</div>
				</div>
				<hr/>
            </div>
        </div>
    </footer>

    <div className="footer-copyright">
        <p className="footer-company">All Rights Reserved. &copy; 2020</p>
    </div>
  

    <a href="#" id="back-to-top" title="Back to top">&uarr;</a>
            </div>
        )
    }
}
