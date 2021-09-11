import React, { Component } from 'react'
import props from 'react'

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        articles: [],
        
    };
}

   
    
  
  
    render() {
        return (
            
            
            <nav className=" container fixed navbar navbar-expand-lg navbar-light bg-light my-3">
            <div className="container">
              <strong><a className="navbar-brand " href="/">SAMACHAR DAILY</a></strong>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-1 mb-lg-0" >
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                  </li>
                           
                </ul>
                <button disabled={this.state.page <=1} className="btn btn-block-success" type="submit" onClick = {props.handlePrevClick}>Prev</button>
                <button className="btn btn-block-success" type="submit"onClick = {props.handleNextClick}>Next</button>

               
              </div>
            </div>
          </nav>
          
        )
    };
}
