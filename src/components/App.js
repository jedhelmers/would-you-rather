import React, { Component } from 'react';
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import { Navigation } from './Navigation'
import Questions from './Questions'
import CreateQuestion from './CreateQuestion'
import logo from '../logo.svg';
import './App.css';

class App extends Component {

  state = {
    page: 'create'
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    let { page } = this.state

    return (
      <div className="App">
        <Navigation />
        <LoadingBar/>
          {this.props.loading === true
            ? null
            : ( page === 'create' ? <CreateQuestion /> : <Questions /> )
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
