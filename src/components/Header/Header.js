import React from 'react';
import './Header.css';
import logo from './logo.png';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.openSidebar = this.openSidebar.bind(this);
	}

	openSidebar() {
		const sidebar = document.getElementById('sidebar');
		const sidebarOverlay = document.getElementById('sidebarOverlay');
		sidebarOverlay.style.display = 'block';
		sidebar.style.transform = 'translateX(0)';
	}

	closeSidebar() {
		const sidebar = document.getElementById('sidebar');
		const sidebarOverlay = document.getElementById('sidebarOverlay');
		sidebarOverlay.style.display = 'none';
		sidebar.style.transform = 'translateX(-300px)';
	}

	render() {
		return (
			<div className='header-container'>
				<a href='https://hollend.com'>
					<img src={logo} className='logo'/>
				</a>
				<div className='nav-container'>
					<a className='navLink' href='https://www.hollend.com/'>HOME</a>
					<a className='navLink' href='https://www.hollend.com/educational-gallery/'>EDUCATIONAL GALLERY</a>
					<a className='navLink' href='https://www.hollend.com/corporate-gallery/'>CORPORATE GALLERY</a>
					<a className='navLink' href='https://www.hollend.com/our-clients/'>OUR CLIENTS</a>
					<a className='navLink' href='https://www.hollend.com/services/'>SERVICES</a>
					<a className='navLink' href='https://www.hollend.com/about-us/'>ABOUT US</a>
					<a className='navLink' href='https://www.hollend.com/contact/'>CONTACT</a>
				</div>
				<div className='hamburger'>
					<i class='fas fa-bars' onClick={this.openSidebar}></i>
				</div>
				<div className='sidebar-overlay' id='sidebarOverlay' style={{display: 'none'}} onClick={this.closeSidebar}>
				</div>
				<div className='nav-sidebar' id='sidebar' style={{transform: 'translateX(-300px)'}}>
					<div className='close-sidebar'><i className='fas fa-times' onClick={this.closeSidebar}></i></div>
					<a className='sidebar-link' onClick={this.closeSidebar} href='https://www.hollend.com/'>HOME</a>
					<a className='sidebar-link' onClick={this.closeSidebar} href='https://www.hollend.com/educational-gallery/'>EDUCATIONAL GALLERY</a>
					<a className='sidebar-link' onClick={this.closeSidebar} href='https://www.hollend.com/corporate-gallery/'>CORPORATE GALLERY</a>
					<a className='sidebar-link' onClick={this.closeSidebar} href='https://www.hollend.com/our-clients/'>OUR CLIENTS</a>
					<a className='sidebar-link' onClick={this.closeSidebar} href='https://www.hollend.com/services/'>SERVICES</a>
					<a className='sidebar-link' onClick={this.closeSidebar} href='https://www.hollend.com/about-us/'>ABOUT US</a>
					<a className='sidebar-link' onClick={this.closeSidebar} href='https://www.hollend.com/contact/'>CONTACT</a>
				</div>
			</div>
		);
	}
}

export default Header;