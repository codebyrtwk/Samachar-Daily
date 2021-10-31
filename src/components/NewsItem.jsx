import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {

        return (
            <div className="news-item">
                <img className="card-img-top" src={!this.props.urlToImage?"https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA=":this.props.urlToImage} alt="..." />
                <div className="card-body color-dark">
                    <strong><p className="card-text">{this.props.title}</p></strong>
                    <hr/>
                    <p className="card-text">{this.props.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <a target= "_blank" rel="noreferrer" href={this.props.url}><button type="button" className="btn btn-sm btn-outline-primary"  >READ MORE</button></a>
                        </div>
                        <small className="text-muted">{this.props.publishedAt}</small>
                    <small>{this.props.date}</small>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem



