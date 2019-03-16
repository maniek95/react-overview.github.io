import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
showImageBeforeMount = false;
componentWillMount() {
    this.showImageBeforeMount = true;
}
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Home Test
          </p>
        
        {this.showImageBeforeMount && '<p>1</p>'}
    
        </header>
      </div>
    );
  }
}

export default Home;
