import React, { Component } from 'react';
import Facebook from './components/Facebook';

class App extends Component {
    render(){
        return (
        <div className="App">
        <header className="App-header">
            <h1>Facebook Auth Example</h1>
        </header>
        <p className="App-intro">
            To get started, authenticate with Facebook
        </p>
        <Facebook />
        </div>
        );
    }
}

export default App;