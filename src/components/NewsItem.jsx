import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {

        return (
            <div className="news-item">
                <img className="card-img-top" src={this.props.urlToImage} alt="Card image cap" />


                <div className="card-body">
                    <strong><p className="card-text">{this.props.title}</p></strong>
                    <hr/>

                    <p className="card-text">{this.props.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <a href={this.props.url}><button type="button" className="btn btn-sm btn-outline-secondary" >View</button></a>
                        </div>
                   
                    <small>{this.props.date}</small>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem



