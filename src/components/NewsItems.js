import React, { Component } from 'react'

export class NewsItems extends Component {
  
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;  
    return (
      <div>
        
          <div className="card" >
              <img src={!imageUrl?"https://i.gadgets360cdn.com/large/galaxy_watch_4_samsung_1694499272509.jpg":imageUrl} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
              </div>
          </div>
          <div className="container">

          </div>
      </div>
    )
  }
}

export default NewsItems