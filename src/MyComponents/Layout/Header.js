import React from 'react';
import {
Nav,
NavLink,
// Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<header className="header">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">Logo</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
				<Nav>
				<NavMenu>
				<NavLink to='/' activeStyle>
					Home
				</NavLink>
				<NavLink to='/about' activeStyle>
					About Us
				</NavLink>
				<NavLink to='/contact' activeStyle>
					Contact Us
				</NavLink>
				</NavMenu>
				<NavBtn>
				<NavBtnLink to='/signin'>Sign In</NavBtnLink>
				</NavBtn>
				</Nav>
				{/* <ul class="navbar-nav">
					<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="#">Home</a>
					</li>
					<li class="nav-item">
					<a class="nav-link" href="#">Features</a>
					</li>
					<li class="nav-item">
					<a class="nav-link" href="#">Pricing</a>
					</li>
					<li class="nav-item">
					<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
					</li>
				</ul> */}
				</div>
			</div>
		</nav>
	</header>
	</>
);
};

export default Navbar;
