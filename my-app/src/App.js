import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './logo.svg';
import Home from './Home';
import LifecycleComponent from './LifecycleComponent';

class App extends Component {
  render() {
    return (
      <Router>
      
        <div className="App-header">
        <ul className="App-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/lifecycle">Learn about lifecycle</Link>
            </li>
          </ul>
          <p>
            This is example to show you how React works!
          </p>
   
          Click to component for learn more
         
          <Route exact path="/" component={Home} />
          <Route path="/lifecycle" component={LifecycleComponent} />
        </div>
      </Router>
    );
  }
}

export default App;