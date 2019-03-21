import React, { Component } from 'react';
import './Home.css';
import HelloWithJSX from './WithJSX';
class Home extends Component {
showImageBeforeMount = false;

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
        <img src="./img/heart.png" />

          <p>
            Home Test
          </p>
        This is how to React works!
        <HelloWithJSX toWhat="World" />
        <HelloWithJSX toWhat="People" />
        <HelloWithJSX toWhat="Everyone!" />

        </header>
      </div>
    );
  }
}

export default Home;
