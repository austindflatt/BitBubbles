import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CoinContext from "./context/CoinContext";

ReactDOM.render(
	<React.StrictMode>
		<CoinContext>
			<App />
		</CoinContext>
	</React.StrictMode>, 
document.getElementById('root'));