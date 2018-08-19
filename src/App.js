import React, { Component } from 'react';
import Blind from './blind';
import './App.css';

class App extends Component {
  paragraph = React.createRef()

  render() {
    return (
      <div>
        <Blind
          className="first"
          text="プライバシーポリシーま Text in English."
          msPerLine={500}
        />
        <Blind 
          className="longer"
          text="This is an example of a longer piece of writing that all comes in line by line." 
          msPerLine={1500}
        />
        <Blind
          className="big" 
          text="This is a bit of big text" 
          msPerLine={2200}
        />
        <Blind
          className="line-height"
          text="This text has a bigger line-height. It's long enough to show how well it wraps around."
          msPerLine={600}
        />
        <Blind
          className="lots"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          msPerLine={200}
        />
      </div>
    );
  }
}

export default App;