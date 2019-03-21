import StatelessComponent from './StatelessComponent';
import ComponentWithClass from './ComponentWithClass';
import React, { Component } from 'react';

class Compontents extends Component {
    
      render() {

        return(
        <div className="App">
        <header className="App-header">
            <div className="Component-Presentation">
            <StatelessComponent text1="Component" text2="stateless" />
            </div>
             <div className="Component-Presentation">
            <ComponentWithClass text1="Component" text2="with class" />
            </div>
        </header>
        </div>
        );
      }
        
}
export default Compontents;