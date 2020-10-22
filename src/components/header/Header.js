import React, { useState } from 'react';
import camera from './camera.svg';

const Header = () => {
  	return (
		<header className="header">
			<img className="header-img" src={camera} alt="Camera" />
			<h1 className="header-title">Photo Gallery App</h1>
		</header>
  	);
}

export default Header;
