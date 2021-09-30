import React from 'react';
import {
// Nav,
NavLink,
// Bars,
// NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<header className="header">
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<NavLink className="navbar-brand" to='/'>Logo</NavLink>
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
				<NavLink exact activeClassName="active" to='/contact'>Contact Us</NavLink>
				</li>
				</ul> 
				 <NavBtn>
				<NavBtnLink to='/signin'>Sign In</NavBtnLink>
				</NavBtn> 
				</div>
			</div>
		</nav>
	</header>
	</>
);
};

export default Navbar;
