import React, { Component } from 'react'

export default class NewsItems extends Component {
   
    render() {
      let  {title,descrpstion,imagurl,newsurl}=this.props;
        return (
            <div className="card" style={{ width: "18rem" }}  >
                <img src={imagurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text"> {descrpstion}...</p>
                    <a href={newsurl} target='_blanck' className="btn btn-primary">Read more</a>
                </div>
            </div>
        )
    }
}

