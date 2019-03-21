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
import Components from './Components';
class App extends Component {
  render() {
    return (
      <Router>
     <div className="App">


        <ul className="App-menu">
            <li className="name-of-website">
              React Overview
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/components">Components</Link>
            </li>
            <li>
              <Link to="/lifecycle">Learn about lifecycle</Link>
            </li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/lifecycle" component={LifecycleComponent} />
          <Route path="/components" component={Components} />

        </div>
      </Router>
     
    );
  }
}

export default App;