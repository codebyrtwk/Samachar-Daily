import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsComponents extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page : 1
            
        };
    }
    

    

    componentDidMount() {

        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=84beabe2ef1340b6bcdfae0d64be2370`;
        
        this.setState({ loading: true });
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ articles: data.articles, loading: false }))
            .catch(error => console.log(error));
        }
        handlePrevClick = async () => {
      
            this.setState({page: this.state.page - 1});
          }
      
          
          handleNextClick = async () => {
            
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.category}&apiKey=84beabe2ef1340b6bcdfae0d64be2370&page=${this.state.page+1}`;
            const response = await fetch(url);
            const json = await response.json();
            this.setState({articles: json.articles, page: this.state.page + 1});
            
              
          }
   
    
    render() {
        

        return (
            
            <div className="container">
                <div className="row">
                    {this.state.articles.map(item => {
                        return <div className="col-md-3" key={item.url}>
                          
                                <div className="card mb-4 box-shadow">
                                    <NewsItem urlToImage={item.urlToImage} title={item.title} description={item.description} url={item.url} date = {item.publishedAt.slice(0,10) } />
                               </div>
                            </div>
                        
                    })}
                </div>
            </div>

        )
    }
}




export default NewsComponents
