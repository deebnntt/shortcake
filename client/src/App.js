import React, { Component } from 'react'
import Form from './components/form.js'
import List from './components/list.js'
import './App.css';
import shortcake from './shortcake.png'
import { postURL } from './helpers/api';
import CryptoJS from 'crypto-js'

class App extends Component {
  state = {
    urlInput: "",
    customLink: "",
    urls: [],
  }

  componentWillMount() {

    fetch('/urls')
      .then(res => res.json())
      .then(urls => this.setState({ urls }));
  }

  componentDidUpdate(){
    const path = this.props.location.pathname
    if (path !== "/") {
      const redirect = this.findURL(path.substring(1))
      window.location.href = `${redirect}`
    }
  }

  findURL = (path) => {
    console.log(path)
    const redirect = this.state.urls.filter(link => {
      return link.short_url === path
      })
    return redirect[0].original_url
  }

  handleURLInput = (e) => {
    let input = e.target.value
    this.setState({
      urlInput: input
    })
  }

  handleCustomInput = (e) => {
    let input = e.target.value
    this.setState({
      customLink: input
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let pathname

    if (this.state.customLink.length < 1) {
      pathname = CryptoJS.MD5(this.state.urlInput).toString().substring(0,5)
    } else {
      pathname = this.state.customLink
    }

    this.addURL(this.state.urlInput, pathname)

    alert(`Your new link is 'http://localhost:3000/${pathname}'`)

    e.target.reset();
  }

  addURL = (original, pathname) => {
    const params = { originalURL: original,
    shortURL: pathname }

    postURL(params).then(json =>
			this.setState({
				urls: [...json],
			}))
  }

  render(){

    return (
      <div className="App">
      <div className="body-div">
      <h1>Shortcake</h1>
      <div className="shortcake-pic-div">
        <img src={shortcake} alt="" />
      </div>
      <h2>Make your links short and sweet.</h2>
      <div cslassName="form-div">
        <Form handleURLInput={this.handleURLInput} handleCustomInput={this.handleCustomInput} handleSubmit={this.handleSubmit} />
      </div>
      </div>
      <List links={this.state.urls}/>
      </div>
    );
  }
}

export default App;
