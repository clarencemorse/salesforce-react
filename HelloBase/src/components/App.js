import React, { Component } from 'react'
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React + Visualforce</h1>
        </header>
        <div className="jumbotron">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">This is a simple react app for Visualforce.</p>
          <hr className="my-4"/>
          <p>It uses Webpack for resource bundling and Bootstrap for styling.</p>
          <a className="btn btn-primary btn-lg" href="https://github.com/wearemav3rik/sfdx-react-plugin" role="button">Learn more</a>
        </div>
        <div className="ml-4">
          <p>This is your HelloBase project and it's using API Version 43.0</p>
          <p>This is your org: clarencemorse company and it will expire on Wed Mar 11 2020</p>
        </div>
      </div>
    )
  }
}

export default App