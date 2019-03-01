import React, { Component } from 'react';
import logo from './logo.svg';
import UserInput from './components/UserInput/UserInput'
import UserOutput from './components/UserOutput/UserOutput'
import './App.css';

class App extends Component {
  state = {
    name: 'Andrew',
  }

  changeUserName = (event) => {
    this.setState({name: event.target.value});
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo}
            className='App-logo'
            alt='logo'
          />
          <UserInput
            changed={this.changeUserName}
            username={this.state.name} />
          <UserOutput username={this.state.name} />
          <UserOutput username={this.state.name} />
          <UserOutput username='Andrew' />
        </header>
      </div>
    );
  }
}

export default App;
