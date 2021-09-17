import React, { Component }  from 'react'
import {Link} from "react-router-dom";

export class Navbar extends Component {
  state = {
    mode: "light"

  }

  //setDark
  setDark = () => {
    console.log("setDark");
    this.setState({
      mode: "dark"
    })
  }
     


    render() {
     
        return (
            
            
            <nav className= {`container fixed navbar navbar-expand-lg navbar-${this.state.mode} bg-${this.state.mode} my-3`}>
            <div className="container">
              <b><Link className="navbar-brand " id = "brand" to="/">SAMACHAR DAILY</Link></b>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-1 mb-lg-0" >
                  <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/home">Home</Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link className="nav-link" to="/business">Business</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/health">Health</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/science">Science</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sports">Sports</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/technology">Technology</Link>
                  </li>
                           
                </ul>
               
              </div>
              <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckSuccess" />
  <label class="form-check-label" onClick= {this.setDark} htmlFor="flexSwitchCheckChecked">Dark Mode</label>
</div>
             
          </div>
          </nav>
        );
                  
             
                  
         
        
    };
}
