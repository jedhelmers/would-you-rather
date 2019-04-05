import React, { Component } from 'react';
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import { Navigation } from './Navigation'
import Questions from './Questions'
import logo from '../logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <LoadingBar/>
          {this.props.loading === true
            ? null
            : (
              <Questions />
            )
          }

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
