import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './components/search_bar';

// const API_KEY = 'AIzaSyBC0FderVvs-m8zjAd6hA2R1zDm7-uZlXM';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SearchBar />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

// Create a new component. This component should produce
// some HTML
// const App = () => {
//     return <div>Hi!</div>;
// }

// Take this component's generated HTML and put it
// on the page (in the DOM)
 
// React.render(<App />, document.querySelector('.container'));
