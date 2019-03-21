import React, { Component } from 'react';
import './LifecycleComponent.css';
import Clock from './Clock';


class LifecycleComponent extends Component {
  // updateSession = false;
  // demount = false;
  // mountSession = false;
// componentWillMount() {
//   this.updateSession = true;
// }
// componentDidMount() {
//   this.mountSession = true;
// }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Lifecycle Test
          </h1>
        To test lifecycle we used example from React documentation :) 

        <Clock/>
        {/* Mounted:
        {this.mountSession && 
        <div>
        <h5>Component Did Mount</h5>
        <img src="./img/heart.png" />
        </div> }  
        Update:
        {this.updateSession && 
        <div>
        <h5>Component Will Mount</h5>
        <img src="./img/heart.png" />
        </div> }
         Demount:
         {this.demount && 
        <div>
        <h5>componentWillUnmount</h5>
        <img src="./img/heart.png" />
        </div> }   */}
        </header>
      </div>
    );
  }
}

export default LifecycleComponent;
