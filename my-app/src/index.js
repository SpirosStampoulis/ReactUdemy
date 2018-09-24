import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import SearchBar from './components/search_bar';

// const API_KEY = 'AIzaSyBC0FderVvs-m8zjAd6hA2R1zDm7-uZlXM';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// Create a new component. This component should produce
// some HTML
// const App = () => {
//     return <div>Hi!</div>;
// }

// Take this component's generated HTML and put it
// on the page (in the DOM)
 
// React.render(<App />, document.querySelector('.container'));