import React from 'react'
import { Link } from 'react-router-dom'

 class LinkCard extends React.Component {

   render() {

     const baseUrl = "localhost:3000/"

     return (
       <div className="grid-parent">
        <div className="grid">{this.props.original}</div>
        <div className="grid"><Link to={`/${this.props.short}`}>{baseUrl}{this.props.short}</Link></div>
       </div>
     )
   }
 }

 export default LinkCard
