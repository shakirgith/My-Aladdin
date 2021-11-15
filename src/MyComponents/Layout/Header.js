import React, { useState } from 'react';
import {
// Nav,
NavLink,
// Bars,
// NavMenu,
// NavBtn,
// NavBtnLink
} from './NavbarElements';
import MainLogo from '../../assets/images/logo-clipart.png';


// import DropdownToggle from '../Dropdown/DropdownToggle';


const Navbar = () => {
	const [hidden, setHidden] = useState(false);
	
return (
	<>

	<header className="header">


	<div hidden={hidden} className="top-alert">
		<p>Dear Customer, If your flight is affected due to Pune runway closure between 16-Oct-21 to 29-Oct-21, Kindly contact the respective Airline(s) for suitable alternative options.</p>
		<span class="closebtn"  onClick={() => setHidden(!hidden)}>&times;</span> 
	</div>



		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<NavLink className="navbar-brand" to='/'><img src={MainLogo} alt="LOGO NAME" title="Logo" /></NavLink>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
			
				<li className="nav-item">
					<NavLink exact activeClassName="active" to='/'>Home</NavLink>
				</li>
				<li className="nav-item">
					<NavLink exact activeClassName="active" to='/about'>About Us</NavLink>
				</li>
				<li className="nav-item">
				<NavLink exact activeClassName="active" to='/result-view'>Demo Result List</NavLink>
				</li>
				<li className="nav-item">
				<NavLink exact activeClassName="active" to='/contact'>Contact Us</NavLink>
				</li>
				</ul> 
				<div className="rightmenu">

					{/* <DropdownToggle /> */}
					<div class="dropdown">
							<a class="btn dropdown-toggle" role="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
								INR
							</a>
							<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
								<a class="dropdown-item" href="#">India</a>
								<a class="dropdown-item" href="#">UAE</a>
								<a class="dropdown-item" href="#">US</a>
							</ul>
					</div>
				
					<div className="loginPage">
					<button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#register" to='/model'>Sign in</button>
					</div>
				</div>
				 {/* <NavBtn>
					<NavBtnLink>Sign In</NavBtnLink> 	
				</NavBtn>  */}
				</div>
			</div>
		</nav>
	</header>

	</>
)
}

export default Navbar;
