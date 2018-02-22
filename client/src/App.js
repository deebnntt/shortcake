import React, { Component } from 'react'
import Form from './components/form.js'
import './App.css';
import CryptoJS from 'crypto-js'
import shortcake from './shortcake.png'

class App extends Component {
  state = {
    urlInput: ""
  }

  componentWillMount() {
    const path = this.props.location.pathname
    if (path !== "/") {
      const newpath = atob(path.substring(1))
      window.location.href = `${newpath}`
    }
  }

  handleInput = (e) => {
    let input = e.target.value
    this.setState({
      urlInput: input
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let pathname = btoa(this.state.urlInput)
    alert(`Your new link is 'http://localhost:3000/${pathname}'`)
  }

  render() {

    return (
      <div className="App">
      <div className="body-div">
      <h1>Welcome to Shortcake</h1>
      <div className="shortcake-pic-div">
        <img src={shortcake} alt="" />
      </div>
      <h2>Create a shortened link.</h2>
      <div className="form-div">
        <Form handleInput={this.handleInput} handleSubmit={this.handleSubmit} />
      </div>
      </div>
      </div>
    );
  }
}

export default App;
