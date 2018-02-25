import React from 'react'

 class LinkCard extends React.Component {

   render() {

     const baseUrl = "http://localhost:3000/"

     return (
       <div className="grid-parent">
        <div className="grid">{this.props.original}</div>
         <div className="grid">{baseUrl}{this.props.short}</div>
       </div>
     )
   }
 }

 export default LinkCard
