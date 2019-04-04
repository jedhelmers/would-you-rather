import React, { Component } from 'react';
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { Navigation } from './Navigation'
import { Questions } from './Questions'
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <header className="App-header">
          <Questions>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </Questions>
          <LoadingBar/>

        </header>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }){
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
