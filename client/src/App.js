import React, { Component } from 'react'
import Form from './components/form.js'
import './App.css';
import shortcake from './shortcake.png'
import { postURL } from './helpers/api';

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
      pathname = btoa(this.state.urlInput).substring(0,5)
    } else {
      pathname = this.state.customLink
    }

    this.addURL(this.state.urlInput, pathname)

    alert(`Your new link is 'http://localhost:3000/${pathname}'`)
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
      <h1>Welcome to Shortcake</h1>
      <div className="shortcake-pic-div">
        <img src={shortcake} alt="" />
      </div>
      <h2>Make your link short and sweet.</h2>
      <div className="form-div">
        <Form handleURLInput={this.handleURLInput} handleCustomInput={this.handleCustomInput} handleSubmit={this.handleSubmit} />
      </div>
      </div>
      <h2>Your Shortcakes:</h2>
       {this.state.urls.map(link =>
         <div key={link.id}>{link.original_url}, {link.short_url}</div>
       )}
      </div>
    );
  }
}

export default App;
