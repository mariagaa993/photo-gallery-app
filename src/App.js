import React, { Fragment } from 'react';
import './App.scss';
import Header from './components/header/Header';
import PrincipalContainer from './components/principalContainer/PrincipalContainer';
import Footer from './components/footer/Footer';

const App = () => {
  	return (
    	<Fragment>
			<Header />
			<PrincipalContainer />
			<Footer />
    	</Fragment>
  	);
}

export default App;
