import React from 'react'
import LinkCard from './linkcard.js'

 class List extends React.Component {

   render() {

     const mappedUrls = this.props.links.map(link => {
      return <LinkCard key={link.id} original={link.original_url} short={link.short_url} />
    })

     return (
       <div className="list">
       <h2>Your Shortcakes:</h2>
       <div className="grid-parent">
        <div className="grid"><h3>Original URL</h3></div>
        <div className="grid"><h3>Shortcake</h3></div>
      </div>
          {mappedUrls}
       </div>
     )
   }
 }

 export default List
