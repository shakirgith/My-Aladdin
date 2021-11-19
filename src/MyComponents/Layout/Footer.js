import React from 'react';
// import '~/../bootstrap/dist/css/bootstrap.min.css';
// import '~/../bootstrap/dist/js/bootstrap.bundle.js';
import '../../assets/js/main.js';


  
const Footer = () => {
	
  return (
    <footer className="main-footer">
		<div className="footer-topbar-wrap">
			<div className="container">
			<div className="footer-topbar">
				<div className="topbar-widget">
						<div className="trusted-bx">
							<img src={require("../../assets/images/secure-payment-page-960x300-1.gif")} alt="trusted" />
							<img src={require("../../assets/images/trustpilot-energy-reviews.png")} alt="trusted" />
							<img src={require("../../assets/images/trustpilot-energy-reviews.png")} alt="trusted" />
						</div>
				</div>
				<div className="topbar-widget">
					<div className="subscribe-form-inner">
						<h3 className="subscribe-title">Save Time and Save Money!</h3>
						<p className="description">Sign up for member prices and you could save 10% or more on thousands of hotels.</p>

						<form method="" action="#">
							<div className="subscribe-form">
								<input type="email" name="EMAIL" className="form-control" placeholder="Your email address" required="" />
								<button type="submit" className="btn submit-btn">Subscribe</button>
							</div>
						</form>
					</div>	
				</div>
				</div>
				</div>
			</div>

		<div className="footer-inner-wrap">
			<div className="container">
			<div className="row">	
				<div className="footer-widget col-lg-4 col-md-6">
						<div className="contact-box small-box widget_travcontactwidget">
								<h2 className="widgettitle">Need Example Help?</h2>
								<p className="description">We would be more than happy to help you. Our team advisor are 24/7 at your service to help you.</p>
								<div className="contact-info">
									<span className="phone-num"><i className="icofont-phone"></i> 980-123-5844</span>
									<span className="email-address"><i class="icofont-email"></i> hello@example.com</span>
								</div>
						</div>

					    <div className="small-box social_links">
							<div className="social-icons square-shape-icon">
									<a title="twitter" className="twitter-link" href="https://www.twitter.com/" target="_blank"><i className="icofont-twitter"></i></a>
									<a title="facebook" className="facebook-link" href="https://www.facebook.com/" target="_blank"><i className="icofont-facebook"></i></a>
									<a title="linkedin" className="linkedin-link" href="https://www.linkedin.com/" target="_blank"><i className="icofont-linkedin"></i></a>
									<a title="instagram" className="instagram-link" href="https://www.instagram.com/" target="_blank"><i className="icofont-instagram"></i></a>
				
							</div>
						</div>		
				</div>

				<div className="footer-widget col-lg-2 col-md-3">
					<div className="small-box widget_nav_menu">
						<h2 className="widgettitle">Company</h2>
						<div className="menu-footer-menu-1-container">
							<ul className="menu">
								<li className="menu-item"><a href="#">About Us</a></li>
								<li className="menu-item"><a href="#">Management</a></li>
								<li className="menu-item"><a href="#">Destinations</a></li>
								<li className="menu-item"><a href="#">How we work</a></li>
							</ul>
						</div>
					</div>				
				</div>

				<div className="footer-widget col-lg-2 col-md-3">
					<div className="small-box widget_nav_menu">
						<h2 className="widgettitle">Products & Services</h2>
						<div className="menu-footer-menu-1-container">
							<ul className="menu">
								<li className="menu-item"><a href="#">Flights</a></li>
								<li className="menu-item"><a href="#">Hotels</a></li>
								<li className="menu-item"><a href="#">Holidays</a></li>
								<li className="menu-item"><a href="#">Bus</a></li>
							</ul>
						</div>
					</div>				
				</div>

				<div className="footer-widget col-lg-2 col-md-3">
					<div className="small-box widget_nav_menu">
						<h2 className="widgettitle">Support</h2>
						<div className="menu-footer-menu-1-container">
							<ul className="menu">
								<li className="menu-item"><a href="#">Contact</a></li>
								<li className="menu-item"><a href="#">Blog</a></li>
								<li className="menu-item"><a href="#">Sitemap</a></li>
							</ul>
						</div>
					</div>				
				</div>


				<div className="footer-widget col-lg-2 col-md-3">
					<div className="small-box widget_nav_menu">
						<h2 className="widgettitle">Policies & Terms</h2>
						<div className="menu-footer-menu-1-container">
							<ul className="menu">
								<li className="menu-item"><a href="#">Privacy Policy</a></li>
								<li className="menu-item"><a href="#">Terms of Use</a></li>
							</ul>
						</div>
					</div>				
				</div>

				

				{/* <div className="footer-widget col-lg-2 col-md-3">
					<div className="contact-box small-box widget_travsettingswidget">
						<h2 className="widgettitle">Setting</h2>				
						
							<div class="dropdown">
								<a class="btn dropdown-toggle" role="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
									Country
								</a>
								<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
									<a class="dropdown-item" href="#">India</a>
									<a class="dropdown-item" href="#">Dubai</a>
									<a class="dropdown-item" href="#">United State</a>
								</ul>
							</div>
					</div>				
				</div> */}



			</div>
			</div>

      <div className="copyright">
        <p>Copyright &copy; My Apps 2021. All Right Reserved.</p>
        
		</div>
		</div>
    </footer>
  );
};
  
export default Footer;

