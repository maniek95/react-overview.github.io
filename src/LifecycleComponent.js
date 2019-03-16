import React, { Component } from 'react';
import './LifecycleComponent.css';

class LifecycleComponent extends Component {
showImageBeforeMount = false;
componentWillMount() {
    this.showImageBeforeMount = true;
}
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Lifecycle Test
          </p>
        
        {this.showImageBeforeMount && '<p>1</p>'}
    
        </header>
      </div>
    );
  }
}

export default LifecycleComponent;
