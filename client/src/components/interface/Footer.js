import React from 'react'
import {Link} from 'react-router-dom';

export default function Footer() {
	return (
		<div>
			<footer>
				<div className="footer-main py-3">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-12 col-sm-12">
								<div className="footer-top-box">
									<h3>About us</h3>
									<p> lorem</p>
								</div>
							</div>
							<div className="col-lg-4 col-md-12 col-sm-12">
								
							</div>
							<div className="col-lg-4 col-md-12 col-sm-12">
								<div className="footer-top-box">
									<h3>Social Media</h3>
									<p>Find Us on Social Media</p>
									<ul>
										<li><Link to="#"><i className="fab fa-facebook" aria-hidden="true"></i></Link></li>
										<li><Link to="#"><i className="fab fa-twitter" aria-hidden="true"></i></Link></li>
										<li><Link to="#"><i className="fab fa-google-plus" aria-hidden="true"></i></Link></li>
									</ul>
								</div>
							</div>
						</div>
						<hr/>
					</div>
				</div>
            </footer>

		<div className="footer-copyright">
			<p className="footer-company">All Rights Reserved. &copy; {new Date().getFullYear()}</p>
		</div>
  
         <Link to="#" id="back-to-top" title="Back to top">&uarr;</Link>
	</div>
	)
}