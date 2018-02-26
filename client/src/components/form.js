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
           <input type="text" placeholder="Enter original url here" className="url-field" onChange={this.props.handleURLInput}/><br/>
           <input type="text" placeholder="Add a custom url (optional)" className="url-field" onChange={this.props.handleCustomInput}/><br/>
           <input type="submit" className="submit-button" value="Create Shortcake"/>
         </form>
       </div>
     )
   }
 }

export default Form
