import React, { Component } from 'react'

 class Form extends React.Component {
   constructor(props) {
   		super(props);
   		this.state = {

   	 }
   }

   render() {

     return (
       <div className="form-div">
         <form onSubmit={this.props.handleSubmit}>
           <input type="text" placeholder="Put that absurdly long link here." className="url-field" onChange={this.props.handleInput}/><br/>
           <input type="submit" className="submit-button" value="Create a Shortcake"/>
         </form>
       </div>
     )
   }
 }

export default Form
